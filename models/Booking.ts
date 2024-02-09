import mongoose from 'mongoose'

export type BookingType = {
  _id: mongoose.ObjectId | string
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  status: 'pending' | 'completed' | 'canceled'
  date: Date
  time: string
}
type BookingDoc = mongoose.Document & BookingType

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const BookingSchema = new mongoose.Schema<BookingDoc>(
  {
    firstName: {
      type: String,
      lowercase: true,
      required: [true, 'Please provide a first name.'],
      maxlength: [20, 'First name cannot be more than 20 characters'],
    },
    lastName: {
      type: String,
      lowercase: true,
      required: [true, 'Please provide a last name.'],
      maxlength: [20, 'Last name cannot be more than 20 characters'],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (value: string) {
          return emailRegex.test(value)
        },
        message: 'Invalid email format',
      },
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: [20, 'Phone number cannot be more than 20 characters'],
    },
    message: {
      type: String,
      trim: true,
      maxlength: [255, 'Message cannot be more than 255 characters'],
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'uncompleted'],
      default: 'pending',
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
)

export default mongoose.models.Booking ||
  mongoose.model<BookingDoc>('Booking', BookingSchema)
