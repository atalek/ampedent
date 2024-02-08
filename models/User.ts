import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

enum Role {
  ADMIN = 'admin',
  SUPERADMIN = 'superadmin',
}

export type UserType = mongoose.Document & {
  _id: mongoose.ObjectId | string
  username: string
  password: string
  role: Role
}

type UserDoc = UserType & {
  matchPassword(enteredPassword: string): Promise<boolean>
}

const UserSchema = new mongoose.Schema<UserDoc>(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: Role.ADMIN,
    },
  },
  { timestamps: true },
)

UserSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password)
}

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

export default mongoose.models.User ||
  mongoose.model<UserDoc>('User', UserSchema)
