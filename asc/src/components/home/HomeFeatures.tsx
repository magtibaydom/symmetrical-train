import React from 'react';

const HomeFeatures: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Join Afterschool Study Club?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Flexible Learning</h3>
            <p className="text-lg">
              Learn at your own pace, whether it’s after school, after work, or during your free time.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Mentorship Opportunities</h3>
            <p className="text-lg">
              Connect with experienced mentors who can guide you on your learning journey and help you grow.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Inclusive Community</h3>
            <p className="text-lg">
              A welcoming space for everyone—learners, mentors, and peers who share a passion for growth and education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
