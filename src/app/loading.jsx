// src/app/components/Loading.jsx
"use client";

import React from 'react';

const Loading = () => {
  return (
    <div style={styles.container}>
      <div className="spinner">
        <style jsx>{`
          .spinner {
            width: 50px;
            height: 50px;
            border: 6px solid rgba(0, 0, 0, 0.1);
            border-top-color: #333;
            border-right-color: #333;
            border-radius: 50%;
            animation: spin 0.8s ease-in-out infinite;
          }
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'white', // Light grey background
  },
};

export default Loading;
