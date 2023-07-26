<h1 align='center'>Dooo : Online Task Manager</h1>

---

## Overview

This is a full-stack Todo application that allows users to manage their tasks efficiently. Users can create, read, update, and delete todos. The app provides a dashboard where users can view their todos with details. The application is built using Node.js and Express for the backend, MongoDB for the database, and Vite React, Tailwind CSS, React Router Dom, Nivo Charts, Redux, and Axios for the frontend. The app utilizes real-time updates, enabling users to access and interact with their todos from anywhere.

## Features

- User-friendly interface for managing todos effectively.
- Create new todos with a title, description, owner, priority, status, due date, and category.
- View todos with detailed information in the dashboard.
- Update existing todos with revised information.
- Delete unwanted todos effortlessly.
- Delete all todos at once
- Real-time synchronization for seamless access and interaction from multiple devices.

## Technologies Used

- Frontend:

  - Vite React: A fast React framework for the frontend development.
  - Tailwind CSS: A utility-first CSS framework for responsive and customizable designs.
  - React Router Dom: A routing library for React applications.
  - Nivo Charts: A data visualization library for creating interactive charts and graphs.
  - Redux: A state management library for managing application state.
  - Axios: A promise-based HTTP client for making API requests.

- Backend:
  - Node.js: A JavaScript runtime for server-side development.
  - Express: A web application framework for Node.js.
  - MongoDB: A NoSQL database for storing todos and related information.
  - Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## Getting Started

To run the Todo application on your local machine, follow these steps:

1. Clone the repository:

```bash
# frontend
git clone https://github.com/lokeshkavisth/dooo.git


# backend
git clone https://github.com/lokeshkavisth/dooo-backend.git

```

2. Install dependencies for both frontend and backend:

```bash
# Go to the frontend folder and install dependencies
cd dooo
npm install

# Go to the backend folder and install dependencies
cd dooo-backend
npm install
```

3. Set up the MongoDB connection:

   - Ensure you have MongoDB installed and running on your system.
   - Open the `.env` file and update the database connection URI.

4. Run the application:

```bash
# Run the backend server (from the dooo-backend folder)
npm run dev or npm start

# Run the frontend development server (from the dooo folder)
npm run dev
```

5. Access the application in your web browser at `http://localhost:5173`.

## Contribution

Contributions to the Todo application are welcome! If you find any bugs, have feature requests, or want to improve the code, feel free to create a pull request.

## License

This Todo application is open-source and available under the [MIT License](https://opensource.org/license/mit/). Feel free to use, modify, and distribute the application as per the license terms.

Happy Todo-ing!
