import React from 'react';
import './Jobs.css';

const jobTypes = [
  'Frontend Developer', 'Backend Engineer', 'UI/UX Designer', 'Data Scientist', 'DevOps Engineer',
  'QA Tester', 'Product Manager', 'Mobile Developer', 'Full Stack Developer', 'Cloud Architect',
  'AI Engineer', 'Business Analyst', 'System Administrator', 'Security Analyst', 'Database Admin',
  'Network Engineer', 'Game Developer', 'Embedded Engineer', 'Support Engineer', 'Scrum Master'
];
const companies = [
  'Tech Solutions', 'Innovatech', 'Creative Minds', 'DataWiz', 'Cloudify',
  'SecureNet', 'Appify', 'NextGen', 'VisionSoft', 'CodeCrafters',
  'PixelWorks', 'LogicLoop', 'BrightFuture', 'SkyHigh', 'QuantumLeap',
  'BlueOcean', 'GreenField', 'RedPanda', 'WhiteHat', 'BlackBox'
];

const jobs = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: jobTypes[i % jobTypes.length] + ' #' + (i + 1),
  company: companies[i % companies.length],
}));

const Jobs = () => {
  return (
    <div style={{ padding: '40px 0', background: '#f4f6fb', minHeight: '100vh' }}>
      <div className="jobs-list-container">
        <h2 style={{ color: '#2d72d9', textAlign: 'center', marginBottom: 18 }}>Explore Exciting Jobs Here!</h2>
        <div className="jobs-list">
          {jobs.map(job => (
            <div className="job-card" key={job.id}>
              <span className="job-id">#{job.id}</span>
              <div className="job-title">{job.title}</div>
              <div className="job-company">{job.company}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
