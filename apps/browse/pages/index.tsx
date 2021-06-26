import React from 'react';
import Layout from '@components/Layout';
import HeroSection from '@ui/heroSection/HeroSection';
import ExperienceSection from '@ui/ExperienceSection/ExperienceSection';
import DanceSection from '@ui/DanceSection/DanceSection';


export function Index() {
  return (
    <Layout title="RopeNflash">
      <HeroSection />
      <ExperienceSection />
      <DanceSection />
    </Layout>
  );
}

export default Index;
