# Ampedent

![Landing page](https://res.cloudinary.com/dkofkuquf/image/upload/v1707530071/nuxtshop/lqnlwdzylzf5u2zgu2bo.png)

Ampedent is a full-featured dental office website built with **Next.js**,
**Tailwind CSS**, **MongoDB**, and **Mongoose**. It boasts an intuitive
appointment booking system, and a secure admin panel.

## Features

- **Appointment Booking:** Users can easily book an appointment using our
  intuitive booking system. All bookings are stored in MongoDB for easy
  management.
- **Admin Panel:** Manage appointments and other site content through a secure
  admin panel.Navigate to /admin to login with your admin credentials.
- **Authentication:** The site uses NextAuth for authentication. The admin panel
  is accessible only to admins. A super admin can create other regular admin
  users.

## Technologies Used

- **Next.js**: A popular React framework for building dynamic and performant web
  applications.
- **Tailwind CSS**:A utility-first CSS framework for crafting tailored designs
  with rapid efficiency.
- **MongoDB**: A source-available cross-platform document-oriented database
  program.
- **Mongoose**: An Object Data Modeling (ODM) library that simplifies
  interactions with MongoDB in Node.js applications.
- **NextAuth**: A complete open source authentication solution for Next.js
  applications.

![Admin panel](https://res.cloudinary.com/dkofkuquf/image/upload/v1707585171/nuxtshop/go7j387zbdkslzrayolk.png)

## Setup

1. **Clone the repository.**

   ```bash
   git clone https://github.com/Amphei/ampedent.git

   ```

2. **Navigate to the project directory.**

   ```bash
   cd ampedent

   ```

3. **Install dependencies.**

   ```bash
   npm install

   ```

4. **Configure environment variables.**

- Create a `.env` file in the root of the project.
- Add the necessary environment variables for MongoDB and NextAuth.

  ```env
  # MongoDB
  MONGODB_URI=your_mongodb_uri

  # NextAuth
  NEXTAUTH_URL=http://localhost:3000 for development
  NEXTAUTH_SECRET=your nextauth secret


  NODE_ENV='development'
  ```

5. **Create a superuser (modify the name and password to your liking) with the
   provided script.**

   ```bash
   node createuser.js

   ```

6. **Run the development server.**

   ```bash
   npm run dev

   ```

7. **Open your browser and visit http://localhost:3000 to view the website.**

## Live Version

[https://ampedent.vercel.app](https://ampedent.vercel.app)

## Author

Github [@Amphei](https://github.com/Amphei) <br> Linkedin:
[@Aleksandar Atanasovski](https://www.linkedin.com/in/aleksandar-atanasovski-16b123263/)
<br> Portfolio:
[https://atal-portfolio.pages.dev/](https://atal-portfolio.pages.dev/)
