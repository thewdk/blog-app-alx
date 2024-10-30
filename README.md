---

# **Blog App**

A full-stack blog application built using the MERN (MongoDB, Express, React, Node.js) stack, allowing users to register, sign in via Google OAuth, and create, manage, and publish blog posts. The app features a responsive design and a user-friendly interface.

## **Table of Contents**
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**
- **User Authentication**: Secure login with Google OAuth via Firebase.
- **CRUD Operations**: Users can create, read, update, and delete their own blog posts.
- **Responsive Design**: Works across desktop and mobile platforms.
- **Simple & Clean UI**: Built with Tailwind CSS and Flowbite.
- **MongoDB Database**: Used to store blog posts and user data.

---

## **Installation**

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/blog-app.git
    cd blog-app
    ```

2. **Install server dependencies:**
    ```bash
    cd api
    npm install
    ```

3. **Install client dependencies:**
    ```bash
    cd ../client
    npm install
    ```

4. **Set up environment variables** (see [Environment Variables](#environment-variables)).

5. **Run the development server:**
    For the backend:
    ```bash
    npm run dev
    ```
    For the frontend:
    ```bash
    npm run dev
    ```

---

## **Usage**

1. **Register or Sign in** via Google.
2. **Create a New Post** from the dashboard.
3. **View All Posts** on the homepage.
4. **Edit or Delete** your posts from the dashboard.

---

## **Project Structure**

```
blog-app/
│
├── api/                   # Backend (Node.js, Express)
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   └── index.js           # Entry point for the Express server
│
├── client/                # Frontend (React)
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Main application pages (e.g., Home, Dashboard)
│   │   ├── context/       # Context for app state
│   │   └── index.js       # Main entry point for React
│   └── public/
│
├── .gitignore
├── package.json
└── README.md
```

---

## **Technologies Used**

### **Backend**
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB Atlas**: Cloud-based NoSQL database.
- **Mongoose**: MongoDB ODM for Node.js.

### **Frontend**
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Flowbite**: UI component library for Tailwind.
- **Firebase**: Used for Google OAuth authentication.
- **Vite**: Frontend build tool for faster development.

### **Development Tools**
- **Git**: Version control system.
- **Nodemon**: Automatically restarts the Node.js server on file changes.
- **Render**: For frontend deployment.
  
---


## **Contributing**

If you’d like to contribute to this project:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License.

--- 

