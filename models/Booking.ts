import mongoose from 'mongoose'

type Booking = mongoose.Document & {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  status: 'pending' | 'completed' | 'canceled'
  scheduledTime: Date
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const BookingSchema = new mongoose.Schema<Booking>(
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
      required: true,
      trim: true,
      maxlength: [255, 'Message cannot be more than 255 characters'],
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'uncompleted'],
      default: 'pending',
    },
    scheduledTime: {
      type: Date,
    },
  },
  { timestamps: true },
)

export default mongoose.models.Booking ||
  mongoose.model<Booking>('Booking', BookingSchema)
