import React from 'react';
import{ Button } from "@/components/ui/button";

const HomeHero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-white)] text-black text-center dark:text-white dark:bg-gray-900">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Learning after hours, together.
      </h1>
      <p className="text-xl md:text-2xl mb-8">
        Join a community of learners and mentors to grow, teach, and collaborate after school or work.
      </p>
      <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg rounded-full">
        Join the Club
      </Button>
    </section>
  );
};

export default HomeHero;
