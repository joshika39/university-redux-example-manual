import { createListenerMiddleware } from "@reduxjs/toolkit";

const toastMiddleware = createListenerMiddleware();

export default toastMiddleware;
