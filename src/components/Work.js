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
      'It is always pleasurable to solve problems through code, which I used to do for fun (and automation). But that was not enough. I wanted to experience this craft commercially and build complex software products. That would give me an entire rounded skill set in the software industry, which would be a significant asset for clients and companies. I currently develop software as a full-time job (some tools I use include: JavaScript, TypeScript, ReactJs, NodeJS, Terraform, CloudFormation, AWS Serverless stack).',
    icon: <WorkIcon3 />,
  },
  {
    id: 2,
    title: 'Integration & Project management',
    content:
      'This started by testing on-site and developed into managing multiple projects and products, and included customer relationships, integration with 3rd party and existing systems, software delivery, product requirements, coordination with development, QA and support teams. This period was fun and full of challenges and achievements. It improved my communication and leadership skills and taught me heaps about building valuable products.',
    icon: <WorkIcon2 />,
  },
  {
    id: 3,
    title: 'Testing & Automation',
    content:
      'I started my career as a tester and did it for about 10 years. I wrote automation scripts using multiple tools and languages and got to tinker with several software products. QA improved my critical thinking and helped me address problems from various perspectives, most notably the customer perspective. During this period, I was also hands-on with deployment and its toolings.',
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
