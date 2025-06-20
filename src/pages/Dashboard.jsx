import React from 'react';
import './Dashboard.css';

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
const statuses = ['Applied', 'Interview Scheduled', 'Offer Received', 'Rejected'];

const jobs = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: jobTypes[i % jobTypes.length] + ' #' + (i + 1),
  company: companies[i % companies.length],
  status: statuses[i % statuses.length],
}));

const Dashboard = () => {
  // Track which jobs have been applied to
  const [appliedJobs, setAppliedJobs] = React.useState([]);

  const handleApply = (id) => {
    setAppliedJobs((prev) => [...prev, id]);
  };

  return (
    <div style={{ padding: '30px', background: '#f4f6fb', minHeight: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}>
        <h2 style={{ color: '#2d72d9', marginBottom: 8, textAlign: 'center' }}>Welcome to your Dashboard!</h2>
        <p style={{ color: '#555', marginBottom: 0, textAlign: 'center' }}>Your job tracking info will appear here.</p>
      </div>
      <div className="jobs-table-container">
        <h3 style={{ marginBottom: 20, color: '#222' }}>Your Jobs ({jobs.length})</h3>
        <table className="jobs-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Company</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job.id}>
                <td className="job-id">{job.id}</td>
                <td className="job-title">{job.title}</td>
                <td>{job.company}</td>
                <td className={`job-status ${job.status}`} status={job.status}>
                  {appliedJobs.includes(job.id) || job.status !== 'Applied' ? (
                    job.status
                  ) : (
                    <button
                      className="apply-btn"
                      onClick={() => handleApply(job.id)}
                      style={{
                        background: '#2d72d9',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '6px 16px',
                        cursor: 'pointer',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        boxShadow: '0 2px 8px rgba(45,114,217,0.08)'
                      }}
                    >
                      Apply
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
