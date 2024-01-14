import React from "react";

const LoadingComponent = ({
  styleLoading,
  primaryLoading,
  secondaryLoading,
}: any) => {
  return (
    <>
      {primaryLoading && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-800/20 backdrop-blur-[5px] transition-all duration-100 z-10 flex justify-center items-center">
          <div
            className={` h-[5rem] w-[5rem] animate-spin rounded-full border-[7px] border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite] ${styleLoading}`}
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
      {secondaryLoading && (
        <div className="">
          <div
            className={` h-[1rem] w-[1rem] animate-spin rounded-full border-[3px] border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite] ${styleLoading}`}
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingComponent;
