import dbConnect from './lib/dbConnect'
import User from './models/User'

async function createSuperUser() {
  await dbConnect()
  // modify name and password to your liking
  const name = 'admin'
  const password = '123456'
  const role = 'superadmin'

  await User.create({ name, password, role })
  console.log('user created')
}

createSuperUser()
