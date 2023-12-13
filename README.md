# Express TypeScript Starter

This Express TypeScript Starter is designed to be a comprehensive template for building high-quality web applications using Express with TypeScript.

## Benefits of Using This Starter

### TypeScript Integration

- **Type Safety**: TypeScript provides static type checking, which helps catch errors early in the development process.
- **Improved Developer Experience**: Features like auto-completion and code navigation enhance productivity and code quality.

### File-based Routing

- **Simplified Routing**: Easily manage routes through a file-based routing system, which organizes endpoints within the file structure.
- **Automatic Route Discovery**: New routes are automatically recognized without manual registration, streamlining the development workflow.

An example of file-based routing can be seen below:

```typescript
// src/routes/user.ts

import { Router } from 'express';
const router = Router();

// GET request for http://localhost:5000/user
router.get('/', function (req, res) {
  res.send('User List');
});

// POST request for http://localhost:5000/user/create
router.post('/create', function (req, res) {
  res.send('User created');
});

export default router;
```

Thats it! No more integration.

### Husky for Git Hooks

- **Code Quality Enforcement**: Husky integrates Git hooks that ensure code standards are met before commits and pushes (e.g., linting and testing).
- **Automated Workflows**: Set up pre-commit and pre-push workflows to automate tasks like code formatting and validation.

> Start with `npm run prepare`

### ESLint for Code Linting

- **Consistent Code Style**: Enforce a consistent coding style across the project, making the codebase easier to understand and maintain.
- **Catch Common Errors**: Identify and fix common coding mistakes before they become problematic.

### Prettier for Code Formatting

- **Automatic Formatting**: `Prettier` formats code consistently, ensuring a uniform code style throughout the project.
- **Integration with Editors**: Integrate `Prettier` with your code editor for on-the-fly formatting as you write code.

### Additional Features

- **Development Efficiency**: `Nodemon` is configured to automatically restart the server during development when code changes are detected.
- **Environment Variables**: `Dotenv-cli` integration for managing environment variables in development and production setups.
- **Production Ready**: The starter is configured for deployment on platforms like Render.com and Vercel, with predefined build and start commands.

## Quick Start

- **Initialize Project**: You can quickly bootstrap a new Express TypeScript project using the `npx` command.

```bash
npx sohanemon@latest express-ts my-express-app
```

```bash
npx sohanemon@latest express-ts my-express-app --yarn
```

```bash
npx sohanemon@latest express-ts my-express-app --pnpm
```

```bash
npx sohanemon@latest express-ts my-express-app --bun

```

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.

## Scripts

- `npm start`: Launches the server.
- `npm run build`: Compiles TypeScript to JavaScript in the `dist` directory.
- `npm run dev`: Starts the development server with nodemon.
- `npm run lint`: Runs `ESLint` to check for linting errors.
- `npm run format`: Checks for formatting issues with `Prettier`.
- `npm run format:write`: Formats code with `Prettier`.

## Deployment

Follow the instructions in `docs/render.md` for deploying your application on Render.com.

## Contribution

Feel free to fork and use this starter template for your projects. Contributions to enhance this template are welcome.

## License

This project is open-sourced under the MIT License.
