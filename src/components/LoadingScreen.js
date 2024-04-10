import React from 'react';

const LoadingScreen = ({ loading, setLoading }) => {
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <div className="flex items-center">
      <div className="text-center flex items-center h-screen">
        <div class="m-auto">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-4 border-yellow-500 border-t-transparent animate-spin mb-2"></div>
          </div>
          <p className="text-lg font-bold text-gray-900 mb-4">
            Finding learning path recommendations for you based on your
            responses
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
