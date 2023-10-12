import React from 'react'
import Nav from './Nav';

const About = ({search,setsearch}) => {
  return (
   <main className="About">
    <Nav search={search} setsearch={setsearch}/>
    <h2>About</h2>
    <p style={{margin: "1rem"}}>Hi there, Freelancer Team </p><br></br>
    <p style={{margin: "0.5rem"}}>A job portal is an online platform that serves as a bridge between job seekers and employers. It provides a centralized space where individuals can search for job opportunities and employers can post their job openings. Job portals offer a wide range of services to streamline the job search and recruitment process.

For job seekers, a job portal is a valuable tool to explore job openings across various industries, locations, and experience levels. They can upload their resumes, create profiles, and customize job preferences. Job portals often provide search filters and notifications, making it easier for candidates to find relevant job opportunities. Additionally, they may offer career resources such as interview tips, resume writing advice, and industry insights.

On the other hand, employers utilize job portals to post job listings, search for potential candidates, and manage the hiring process. They can screen applicants, conduct interviews, and communicate with candidates through the portal. Many job portals offer tools for employer branding, enabling companies to showcase their culture and values to attract top talent.

Overall, a job portal simplifies the job search and hiring processes, making it efficient for both job seekers and employers. It plays a vital role in connecting talent with job opportunities and fostering growth within the workforce.</p>
   </main>
  )
}

export default About;