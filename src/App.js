import React from 'react';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import SkillsComponent from './components/SkillsComponent';
import ExtracurricularComponent from './components/ExtracurricularComponent';
import WritingComponent from './components/WritingComponent';
import EducationComponent from './components/EducationComponent';
import ExperienceComponent from './components/ExperienceComponent.jsx';
import ProjectComponent from './components/ProjectComponent';
import AboutComponent from './components/AboutComponent.jsx';

export default function App() {
  return (
    <div className='mx-auto prose-slate prose-sm'>
      <div className='flex flex-col-reverse sm:flex-row sm:gap-5'>
        <div className='w-full px-5 sm:basis-2/3 sm:pl-32'>
          <SkillsComponent />
          <ProjectComponent />
          <ExperienceComponent />
          <WritingComponent />
          <EducationComponent />
          <ExtracurricularComponent />
        </div>
        <div className='w-full px-8 py-8 bg-slate-200 sm:basis-1/3 sm:px-10 sm:pr-22'>
          <AboutComponent />
        </div>
      </div>
    </div>
  )
}