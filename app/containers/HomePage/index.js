/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import SectionOne from './Sections/section_one';
import Section_two from './Sections/section_two';
import Section_three from './Sections/section_three';
import Section_four from './Sections/section_four';
import Section_five from './Sections/section_five';
import Section_six from './Sections/section_six';
import './home-page.scss';
const HomePage = () => (
  <div>
    <SectionOne />
    <Section_two />
    <Section_three />
    <Section_four />
    <Section_five />
    <Section_six />
  </div>
);
export default HomePage;
