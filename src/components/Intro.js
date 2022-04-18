import React from 'react';
import { ReactComponent as HomePageMainImage } from '../assets/images/HomePageMainImage.svg';
import Button from './Button';
import './intro.scss';

const introTitle = `Hi, I'm Ali.`;

const introData = [
  {
    id: 1,
    topic:
      'I am a software engineer and a lifelong learner. I firmly believe that good software is built through good collaboration and communication. I am a big fan of the DevOps ways of working.',
  },
  {
    id: 2,
    topic:
      'I help organisations build and deliver high-quality software. My expertise ranges from getting into the nitty-gritty details of code (mainly JavaScript and infrastructure) to leading teams, designing software solutions, testing them and communicating progress.',
  },
  {
    id: 3,
    topic:
      'What excites me is solving real-world problems, mainly with technology (sometimes it starts operationally and then gets automated). I do not know many things, but I know how to learn them efficiently and rapidly. My best fit is a company that values equity, diversity and inclusion and is authentic in its mission.',
  },
  {
    id: 4,
    topic:
      'My untraditional career path has equipped me with versatility across the software lifecycle, with a depth of knowledge in a few vital areas and a breadth that covers all the necessary tasks.',
  },
  {
    id: 5,
    topic:
      'In my spare time, when I am not geeking out, I cycle, cook, do yoga and play board games with friends.',
  },
];

const Intro = () => (
  <section className="intro">
    <HomePageMainImage className="main_image" />
    <div className="intro_text">
      <div className="intro-title">{introTitle}</div>
      <div>
        {introData.map((dataItem) => (
          <div key={dataItem.id}>
            {dataItem.topic}
            <br />
            <br />
          </div>
        ))}
      </div>
      <Button text="Get in touch" />
    </div>
  </section>
);

export default Intro;
