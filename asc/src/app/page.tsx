import React from 'react';
import HomeHeader from '@/components/home/HomeHeader';
import HomeHero from '@/components/home/HomeHero';
import HomeAbout from '@/components/home/HomeAbout';
import HomeFeatures from '@/components/home/HomeFeatures';
import HomeHowItWorks from '@/components/home/HomeHowItWorks';
import HomeCallToAction from '@/components/home/HomeCallToAction';
import HomeFooter from '@/components/home/HomeFooter';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <HomeHeader />
      <HomeHero />
      <HomeAbout />
      <HomeFeatures />
      <HomeHowItWorks />
      <HomeCallToAction />
      <HomeFooter />
    </div>
  );
};

export default Home;
