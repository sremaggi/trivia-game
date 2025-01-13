import React from "react";

const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-75"></div>
            <p className="text-center text-lg font-semibold text-white">Loading...</p>
        </div>
    );
};

export default LoadingSpinner;
