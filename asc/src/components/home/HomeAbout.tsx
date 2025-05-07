import React from 'react';

const HomeAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What is Afterschool Study Club?</h2>
        <p className="text-lg mb-6">
          Afterschool Study Club is a community-driven platform designed to help people of all ages
          learn and grow—whether you’re looking for mentorship, resources, or a place to share knowledge.
        </p>
        <p className="text-lg">
          We focus on creating an inclusive and flexible environment where anyone can become a mentor or learner,
          no matter their background or experience.
        </p>
      </div>
    </section>
  );
};

export default HomeAbout;
