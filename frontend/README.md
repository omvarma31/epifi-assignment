# Frontend - Epifi Assignment

This is the frontend for the Epifi Assignment, built with React and Tailwind CSS.

## Features
- User authentication (login, signup)
- Product management (add, view products)
- Protected routes
- Modern UI with Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v14 or above recommended)
- npm (v6 or above)

### Installation
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the development server:
```bash
npm start
```
The app will run at [http://localhost:3000](http://localhost:3000).

### Environment Variables
Create a `.env` file in the `frontend` directory with the following:
```
REACT_APP_API_URL=http://localhost:5000/api
```
- This should point to your backend API base URL.

### Available Scripts
- `npm start` - Start the development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Lint the code (if configured)

## Project Structure
- `src/pages/` - Main pages (Login, Signup, Products, AddProduct)
- `src/components/` - Reusable components
- `src/` - App entry point and global styles

## Styling
Tailwind CSS is used for styling. You can customize styles in `tailwind.config.js`.

## Notes
- Ensure the backend server is running for API requests.
- Uses Axios for HTTP requests.

## License
MIT
