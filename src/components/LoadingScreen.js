import React from 'react';

const LoadingScreen = ({ loading, setLoading }) => {
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <div className="flex items-center h-screen">
      <div class="m-auto">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-yellow-500 border-t-transparent animate-spin"></div>
          </div>
          <p className="mt-4 text-gray-700 font-bold text-xl">
            Finding learning path recommendations for you based on your
            responses
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
