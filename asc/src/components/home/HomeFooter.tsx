import React from 'react';

const HomeFooter: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <div className="mb-4">
          <p>&copy; {new Date().getFullYear()} Afterschool Study Club. All Rights Reserved.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="/terms" className="hover:text-blue-400">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-blue-400">Privacy Policy</a>
          <a href="/contact" className="hover:text-blue-400">Contact Us</a>
        </div>
        <div className="mt-4">
          <p className="text-sm">Follow us on:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
