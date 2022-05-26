import React from 'react';
import Post from '../components/blog/Post';
import './Blog.scss';
const posts = [
  {
    title: `How to Speed Up Your Lambda Functions`,
    url: 'https://www.freecodecamp.org/news/how-to-speed-up-lambda-functions/',
    summary: `AWS lambda has many use cases, from running scripts to gluing flows & processes within a serverless architecture. 
          But what about cold starts? Won't they slow everything down? 
          In this article we go over how to speed up your lambda functions.`,
  },
  {
    title: `How do you protect your customers' data on Amazon S3?`,
    url: 'https://dev.to/aws-builders/how-do-you-protect-your-customers-data-on-amazon-s3-k4i',
    summary: `With multiple security breaches that have happened in the past few years, mostly around
        configuration of S3 buckets, it's necessary to monitor and report on any
        potential issues. That's not only related to the security of the data, but
        also to the Privacy. In this blog, we explore how Amazon Macie works to
        protect the privacy of your customer data.`,
  },
  {
    title: `How to secure your site on AWS with CloudFront and ACM?`,
    url: 'https://dev.to/aws-builders/how-to-secure-your-site-on-aws-with-cloudfront-and-acm-5ako',
    summary: `In the previous article, we've gone over setting up a static site on S3 and associating it with a custom domain. Did you notice that the website URL uses HTTP? That's not very secure, and we'd better use HTTPS, which is mainly a layer of encryption added to HTTP. In this post, we will secure the site with an SSL Certificate, which proves ownership of the website and signed by a trusted authority. In addition, we'll build everything with Infrastructure as Code.`,
  },
  {
    title: `Build a static website using S3 & Route 53 with Terraform`,
    url: 'https://dev.to/aws-builders/build-a-static-website-using-s3-route-53-with-terraform-1ele',
    summary: `I've written an article in the past about how to host a static website on S3 using AWS CDK. Now, as I am learning Terraform, I wanted to repeat the same process and connect that site to a custom domain on Route 53. In this post, we will host a static site on S3 and add appropriate Route 53 records to provide access to this website when a user loads our custom domain in the browser.`,
  },
  {
    title: `How to schedule your Lambda with Terraform?`,
    url: 'https://dev.to/aws-builders/how-to-schedule-the-execution-of-your-lambda-code-2fl3',
    summary: `There are many cases where you might need to run your Lambda regularly without having it triggered by a user action, such as trying to send an email to your customers on a monthly/weekly basis or running a process against your data. This post details how to do that with EventBridge and Terraform.`,
  },
  {
    title: `Route 53 - Route end users to Internet apps`,
    url: 'https://dev.to/aws-builders/route-53-route-end-users-to-internet-apps-2fhh',
    summary: `Unless you start a new project, working with DNS doesn't happen very frequently. So I'll use this post as an opportunity to refresh my knowledge in this area and share the learnings, providing a high level guide into DNS and Route 53.`,
  },
  {
    title: `How to Test Serverless Applications in AWS`,
    url: 'https://www.freecodecamp.org/news/how-to-test-serverless-applications-in-aws/',
    summary: `While serverless introduced a lot of simplicity into the process of building and shipping software, some challenges can come into play around testing. This includes both unit and integration tests. This article aims to answer these questions to help you effectively test your serverless apps.`,
  },
  {
    title: `How to Build a CSS Library with Vite.js`,
    url: 'https://www.freecodecamp.org/news/build-a-css-library-with-vitejs/',
    summary: `Building a CSS library might seem like something you'd do out of pure curiosity, just to learn and explore. But it can be so much more than that. I've seen custom-built CSS libraries used everywhere from big organisations to scrappy young startups. This article goes into the details of building a design library with Vite.js`,
  },
  {
    title: `Host a static website on S3 using AWS CDK`,
    url: 'https://medium.com/swlh/host-a-static-website-on-s3-using-aws-cdk-b9151213aad4',
    summary: `If you’ve built a website, whether for personal or commercial use, you probably researched web hosting options. Lots of companies provide this kind of services. In this post, we will build a very simple website, and host it on Amazon S3 (Amazon storage service), which can be used to host a static website (a site that contains static content and client-side scripts).`,
  },
  {
    title: `Do you keep a tidy Git commit history?`,
    url: 'https://ali-haydar.medium.com/do-you-keep-a-tidy-git-commit-history-26d4b669a83',
    summary: `In multiple instances, I have encountered unclear commit messages. This was frustrating, not just because of my slight obsession with quality and tidiness but also because I needed to urgently understand what was going on in this change to fix a production bug. Has this change caused the bug? Should I revert the change?. In this post, we talk about conventional commits and how they help keep a clean commit history`,
  },
  {
    title: `Getting started with S3`,
    url: 'https://ali-haydar.medium.com/getting-started-with-s3-2f178a362918',
    summary: `This post includes a summary of AWS Simple Storage Service (S3), which I created when I started learning about AWS services. I sometimes use it as a cheatsheet.`,
  },
  {
    title: `Encryption with AWS (PART 2) — client-side`,
    url: 'https://medium.com/codex/encryption-with-aws-part-2-client-side-d16367f6a37d',
    summary: `In this post, we will go over client-side Encryption, which is the technique of encrypting data on the sender’s side before it’s sent to the server. That’s mainly your application. This kind of Encryption offers a high level of privacy as it eliminates the potential for data to be viewed by third parties your app is integrating with.`,
  },
  {
    title: `Data Encryption in AWS (Part 1) - server-side`,
    url: 'https://medium.com/codex/data-encryption-in-aws-part-1-dca85a0dd19',
    summary: `In this post, we will go over some theories around Encryption and use some examples to provide more clarity, highlighting how Encryption works in AWS.`,
  },
  {
    title: `Building a secure network in AWS (PART 2)`,
    url: 'https://ali-haydar.medium.com/building-a-secure-network-in-aws-part-2-5264fc724d8d',
    summary: `Assume you’ve been asked to create a VM on AWS to run some critical operations for your business; it needs to access the internet, but only can be accessed by the maintainers (e.g. people/services who would want to install/upgrade the software). How would you do it?`,
  },
  {
    title: `Building a secure network in AWS (PART 1)`,
    url: 'https://ali-haydar.medium.com/building-a-secure-network-in-aws-part-1-32b830f96209',
    summary: `In this post, we will go over what happens when you create an EC2 instance (VM) in AWS; it would be an introductory post for another article about architecting a secure solution in a secure network in the cloud.`,
  },
  {
    title: `Is Your Web App Secure Enough?`,
    url: 'https://medium.com/swlh/is-your-web-app-secure-enough-3377b8304262',
    summary: `In this post, we will build an insecure web application. The goal is to share some of my learnings building AWS serverless apps. At the same time, I am hoping this would start a discussion that increases the awareness around security when architecting or developing software.`,
  },
  {
    title: `Setup a web server on AWS using Cloud Formation`,
    url: 'https://ali-haydar.medium.com/setup-a-web-server-on-aws-using-cloud-formation-b84fcee25e70',
    summary: `In this post, we will write infrastructure as code, using Cloud Formation, to set up a web server on an EC2 instance on AWS.`,
  },
  {
    title: `Navigation within a React app`,
    url: 'https://ali-haydar.medium.com/navigation-within-a-react-app-4549398b30cd',
    summary: `As with any website, I wanted to add a navigation menu to my personal website (built with ReactJS) when I was developing it — https://ahaydar.github.io. In this post, I will go through my thought process and document my learnings about the tech used. I hope this will be helpful for anyone starting with React and React Router.`,
  },
  {
    title: `Lessons learned about Software Quality (or delivery?)`,
    url: 'https://ali-haydar.medium.com/lessons-learned-about-software-quality-or-delivery-3a05ca2e4609',
    summary: `The goal of this post is to share an approach or a combination of approaches I learned in my career to deliver software products faster and with higher quality. There is nothing I invented here. It is merely a summary of methods suggested and tested by companies, individuals through books and frameworks, and applied in a few companies I worked with.`,
  },
  {
    title: `Email Verification — Gmail helper utility`,
    url: 'https://ali-haydar.medium.com/email-verification-gmail-helper-utility-2e6858d83244',
    summary: `Lots of applications have a set of processes or operations that include sending emails to customers. This could be related to registration, resetting passwords, or notifications… Sometimes, teams choose to avoid the automation testing of email verifications and stick to testing it manually at the implementation time. This might be a fair choice if the area that is being tested isn’t going to be updated in the future, or isn’t impacting the business progress or success.`,
  },
  {
    title: `Mocks and testability`,
    url: 'https://ali-haydar.medium.com/mocks-and-testability-5de12fd614f',
    summary: `Most of the times, when we develop software, we rely on third party services to accomplish a certain outcome so that we don’t have to re-invent the wheel. However, this introduces a new level of complexity, especially around testability. This post is based on a presentation I gave at the “Ministry of testing - Auckland” meetup. Mocking isn’t new, and there are lots of articles on the internet about it, but it is less frequent to see content about mocks in the context of a system testing or end to end testing.`,
  },
  {
    title: `API Testing with Cypress`,
    url: 'https://medium.com/swlh/api-testing-with-cypress-d8c60ed6aa2e',
    summary: `This post explores the usage of Cypress as an API testing tool, given it's usually utilized as a UI Automation framework.`,
  },
];

const Blog = () => (
  <div className="blog-page">
    <h3>
      This page consolidates links to various blog posts I've written on
      multiple platforms, including{' '}
      <a
        href="https://www.freecodecamp.org/news/author/ali/"
        target="_blank"
        rel="noopener noreferrer"
      >
        freecodecamp
      </a>
      ,{' '}
      <a
        href="https://ali-haydar.medium.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        dev.to
      </a>{' '}
      and{' '}
      <a
        href="https://dev.to/ahaydar"
        target="_blank"
        rel="noopener noreferrer"
      >
        medium
      </a>
      {'.'}
    </h3>
    {posts.map((post) => (
      <Post
        key={post.title}
        title={post.title}
        url={post.url}
        summary={post.summary}
      />
    ))}
  </div>
);

export default Blog;
