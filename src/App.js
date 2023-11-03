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
      <div className='flex flex-row gap-10'>
        <div className='basis-2/3 pl-32'>
          <SkillsComponent />
          <ProjectComponent />
          <ExperienceComponent />
          <ExtracurricularComponent />
          <WritingComponent />
          <EducationComponent />
        </div>
        <div className='basis-1/3 bg-slate-100 xs:hidden'>
          <AboutComponent />
        </div>
      </div>
    </div>
  )
}