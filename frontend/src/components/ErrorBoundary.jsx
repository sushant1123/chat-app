import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  let error = useRouteError();
  console.error(error);

  return <div>Dang!</div>;
};

export default ErrorBoundary;
