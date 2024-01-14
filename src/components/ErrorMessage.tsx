import React from "react";

const ErrorMessage = ({
  errorMessage,
  setErrorMessage,
  type = "error",
}: any) => {
  React.useEffect(() => {
    setTimeout(() => {
      setErrorMessage(null);
    }, 7000);
    return () => {
      clearTimeout;
    };
  }, [errorMessage]);

  if (errorMessage)
    return (
      <div >
        <h1
          className={`${
            type === "error" ? "text-error" : "text-success"
          } text-f12 `}
        >
          {errorMessage}
        </h1>
      </div>
    );
  return <></>;
};

export default ErrorMessage;
