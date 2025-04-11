# Kip - Lightweight Local Bookmarks

Kip is a simple, local bookmarking tool that helps you save and organize your favorite links without relying on the cloud. Keep your bookmarks private and easily accessible, all in one place.

## Features

- 🔐 Local Authentication
- 📑 Create and manage bookmarks
- 🏷️ Tag-based organization
- 🎨 Clean and intuitive user interface
- 📱 Responsive design
- 🔍 View detailed bookmark information

## Tech Stack

- React 19
- React Router v7
- React Hook Form
- JSON Server (for local data storage)
- Vite
- CSS Modules
- LottieFiles for animations
- ESLint for code quality

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the JSON server (for bookmark storage):

```bash
npm run server
```

4. Start the development server:

```bash
npm run dev
```

## Default Login Credentials

- Username: admin
- Password: admin

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start the JSON server for data storage
- `npm run lint` - Run ESLint

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── contexts/      # React Context providers
  ├── pages/         # Page components
  ├── assets/        # Static assets
  └── App.jsx        # Main application component
```

## Contributing

Feel free to open issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
