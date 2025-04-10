# React Poster

A fullstack application that allows users to create and view posts. Built with React, React Router, and a simple Express backend.

## Project Overview

React Poster is a simple social media application where users can:
- View a list of posts from all users
- Create new posts
- View post details 

The application demonstrates fundamental React concepts including:
- Component structure
- Routing with React Router
- CSS Modules for styling
- Form handling
- Data fetching and management

## Tech Stack

### Frontend:
- React 18
- React Router DOM 7
- React Icons
- CSS Modules
- Vite (for build tooling)

### Backend:
- Express
- Node.js
- Simple file-based JSON storage

## Project Structure

```
├── dummy-backend/        # Express backend
│   ├── app.js            # Main server file
│   ├── data/             # Data management
│   │   └── posts.js      # Posts storage and retrieval
│   ├── posts.json        # JSON data storage
├── frontend/             # React frontend
│   ├── public/           # Static assets
│   ├── src/              # Source code
│   │   ├── components/   # React components
│   │   ├── routes/       # Route components
│   │   ├── main.jsx      # Entry point
│   │   └── index.css     # Global styles
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone <repository-url>
cd react-poster
```

2. Install dependencies for both frontend and backend:
```
# Install backend dependencies
cd dummy-backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Start the backend server:
```
cd dummy-backend
npm start
```

4. In a separate terminal, start the frontend development server:
```
cd frontend
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173` (or the URL displayed in your terminal)

## Features

### Home Page
- Displays a grid of all posts
- Each post shows the author and content
- Empty state when no posts exist

### Creating Posts
- Click "New Post" button to open the creation modal
- Fill in your name and post content
- Submit to create a new post

### Post Details
- Click on any post to view its details in a modal
- Navigate back to the home page by clicking outside the modal or the "Cancel" button

## API Endpoints

The backend provides the following REST endpoints:

- `GET /posts` - Fetch all posts
- `GET /posts/:id` - Fetch a specific post by ID
- `POST /posts` - Create a new post

## Development

### Building for Production

```
# Build frontend
cd frontend
npm run build

# The build artifacts will be in the dist/ directory
```

## License

This project is licensed under the MIT License.

## Acknowledgments

- React team for the fantastic library
- Express team for the lightweight backend framework