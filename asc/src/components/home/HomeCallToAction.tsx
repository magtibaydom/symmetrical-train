import React from 'react';
import {Button} from "@/components/ui/button";

const HomeCallToAction: React.FC = () => {
  return (
    <section id="signup" className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-center">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to join the community?</h2>
        <p className="text-lg mb-8">
          Whether you’re looking to learn new skills or share your knowledge, Afterschool Study Club has a place for you.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg rounded-full">
          Join Now
        </Button>
      </div>
    </section>
  );
};

export default HomeCallToAction;
