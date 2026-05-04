import GetCard from '@/component/GetCard';
import HeroSection from '@/component/HeroSection';
import LearningTips from '@/component/LearningTips';
import TopInstructors from '@/component/TopInstructors';
import SkillTicker from "@/component/SkillTicker";
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
        <SkillTicker></SkillTicker>
       <LearningTips></LearningTips>
      <GetCard></GetCard>
      <TopInstructors></TopInstructors>
    </div>
  );
};

export default HomePage;