import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} DeepScanAI by Deep Real Inc. All rights reserved.</p>

        <div className="flex justify-center items-center space-x-2 mt-2">
          <p className="text-white font-medium">Email Address:</p>
          <a href="https://mail.google.com/" className="text-lg font-medium text-blue-500 hover:underline">
            Deepreal01@gmail.com
          </a>
        </div>

        <p className="mt-2">Phone No: +254 727 577 080 </p>
        <p>Address: P.O BOX 00232-00100, RUIRU, THIKA ROAD, KENYA </p>
      </div>
    </footer>
  );
}
