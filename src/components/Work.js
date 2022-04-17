import React from 'react';
import WorkItem from './WorkItem';
import { ReactComponent as WorkIcon1 } from '../assets/icons/WorkIcon1.svg';
import { ReactComponent as WorkIcon2 } from '../assets/icons/WorkIcon2.svg';
import { ReactComponent as WorkIcon3 } from '../assets/icons/WorkIcon3.svg';
import './Work.scss';

const workItems = [
  {
    id: 1,
    title: 'Software development',
    content:
      'It is always pleasurable to solve problems through code, which is what I used to do for fun (and automation). But that was not enough, I wanted to experience this craft commercially and build complex software product. This would give me a full rounded skillset in the software industry, which would be a great assets for clients and companies. This is what I currently do as a full time job.',
    icon: <WorkIcon3 />,
  },
  {
    id: 2,
    title: 'Integration & Project management',
    content:
      'This started by testing on site and developed into managing multiple projects and products. This included customer relationship, integration with 3rd party and existing systems, software delivery, product requirements, coordination with development, qa and support teams. This period was fun and full of challenges, and achievements. It improved my communication and leadership skills, and taught me heaps about building useful products.',
    icon: <WorkIcon2 />,
  },
  {
    id: 3,
    title: 'Testing & Automation',
    content:
      'I started my career as a tester, and did it for about 10 years. I wrote automation scripts using multiple tools and languages, and got to tinker with several software products. QA improved my critical thinking and helped me address problems from multiple perspectives, most importantly the customer perspective. During this period, I was also hands on deployments and its toolings.',
    icon: <WorkIcon1 />,
  },
];

const Work = () => (
  <section className="my-work" id="myWork">
    <h1>Bits From My Career</h1>
    <div className="work-items">
      {workItems.map((item) => (
        <WorkItem
          key={item.id}
          workItemIcon={item.icon}
          workItemTitle={item.title}
          workItemContent={item.content}
        />
      ))}
    </div>
  </section>
);

export default Work;
