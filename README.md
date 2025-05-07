# Redux Example: Manual

This example demonstrates how to use Redux with a manual setup. How the project were using it before the Redux Toolkit
was released. And React Hooks were not available.

## Getting Started

Run the following command to install the dependencies:

```bash
# We have to use --force because the UI library conflicts with React 19
npm install --force
```

Then, start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Project Structure

Important files and folders in this project:

- `src/actions/` - Contains action creators for the Redux store.
- `src/reducers/` - Contains reducers for the Redux store.
- `src/store/` - Contains the Redux store configuration.

## Helpful Links

- [Sample API List](https://www.sampleapis.com/api-list)
- [Redux Documentation](https://redux.js.org/)
- [Redux `connect` Documentation](https://redux.js.org/usage/usage-with-typescript#typing-the-connect-higher-order-component)
