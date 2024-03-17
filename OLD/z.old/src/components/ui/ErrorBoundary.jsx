import { useNavigate, useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const navigate = useNavigate();
  const error = useRouteError();
  // if (error) console.error(error);

  const errorMessages = {
    404: "This page doesn't exist!",
    401: "You aren't authorized to see this",
    500: 'Internal server error',
    503: 'Looks like our API is down',
  };

  const errorMessage = errorMessages[error?.status] || 'Something went wrong';

  return (
    <div className="mx-auto flex h-full w-full max-w-layout flex-col items-center justify-center gap-5 pb-3 pt-4 sm:pb-4 sm:pt-5">
      <button className="app-links text-xl" onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
      <div className="text-3xl">
        {error && (
          <>
            <h1>
              {errorMessage} ({error?.status} Error)
            </h1>
          </>
        )}
      </div>
    </div>
  );
}

export default ErrorBoundary;
