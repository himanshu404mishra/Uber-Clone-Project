# Uber Clone

A full-stack application that replicates core Uber functionality with a modern tech stack. This project includes both user and driver interfaces, real-time location tracking, and ride management.

## Project Structure

```
uber-clone/
├── frontend/         # React frontend application
├── backend/          # Node.js/Express backend API
└── README.md         # This file
```

## Features

- **User Authentication**: Secure signup/login for riders and drivers
- **Real-time Location Tracking**: Live GPS positioning for riders and drivers
- **Ride Requests**: Users can request rides with pickup and destination locations
- **Driver Matching**: Automatic assignment of nearby drivers to ride requests
- **In-app Messaging**: Communication between drivers and riders
- **Ride History**: Log of past rides for both users and drivers
- **Payment Integration**: Secure payment processing (simulated)
- **Admin Dashboard**: Manage users, drivers, and rides

## Tech Stack

### Frontend
- React.js
<!-- - Redux for state management -->
<!-- - Mapbox/Google Maps API for mapping -->
- Socket.io for real-time communication
- Tailwind CSS for styling

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Socket.io for real-time updates
- bcrypt for password hashing

## Installation

### Prerequisites
- Node.js (v14+)
- MongoDB
- npm or yarn

### Setting Up the Backend
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/uber_clone
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```
   npm run dev
   ```

### Setting Up the Frontend
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

<!-- 3. Create a `.env.local` file with the following variables:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token -->
   ```

4. Start the development server:
   ```
   npm run dev
   ```


## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request


## Acknowledgements

- Inspired by Uber's service and UI/UX