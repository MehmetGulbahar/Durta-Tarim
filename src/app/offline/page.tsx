"use client";

export default function Offline() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">

        <h1 className="text-4xl font-bold mb-4">You are offline</h1>
        <p className="text-gray-600 mb-8">
          Please check your internet connection and try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  )
} 