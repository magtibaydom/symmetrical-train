import React from 'react';

const HomeHowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Step 1: Choose Your Role</h3>
            <p className="text-lg">
              Decide if you want to be a mentor, a learner, or both. It's all about flexibility.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Step 2: Connect & Learn</h3>
            <p className="text-lg">
              Join sessions, collaborate with others, and gain valuable insights through mentorship.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Step 3: Share Your Knowledge</h3>
            <p className="text-lg">
              Whether you're a mentor or learner, contribute your skills and experiences to grow the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWorks;
