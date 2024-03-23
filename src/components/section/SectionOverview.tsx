import Section from './Section';
import AccordionTable from '../AccordionTable';

export default function SectionOverview() {

  return (
    <Section id="overview">
      <h2>An Overview.</h2>

      <p>While this section isn't a fun visualization™️ like you'll see below, it <em>is</em> a synopsis of all the data I collected.</p>

      <AccordionTable
        title="Applications"
        accordionId="applications"
        data={[
          { th: 'Total', td: '150' },
          { th: 'Companies', td: '143' },
          { th: 'Remote Roles', td: '137' },
          { th: 'Local Remote Roles', td: '2' },
          { th: 'Hybrid or On-Site Roles', td: '4' },
          { th: 'Easy Apply', td: '12' },
          { th: 'Cover Letters', td: '96' },
          { th: 'Average Applications Per Day', td: '1.67' },
          { th: 'Average Applications Per Business Day', td: '2.5' },
          { th: 'Most Applications in a Day', td: '8' },
        ]}
      />
      <AccordionTable
        title="Application Results"
        accordionId="application-results"
        data={[
          { th: 'Rejected Outright', td: '51' },
          { th: 'Role Unavailable in Pennsylvania', td: '3' },
          { th: 'Ghosted (no response for > 30 days)', td: '55' },
          { th: 'Active (no response for < 30 days)', td: '17' },
          { th: 'Landed an Interview', td: '24' },
        ]}
      />
      <AccordionTable
        title="Interviews"
        accordionId="interviews"
        data={[
          { th: 'Total', td: '39' },
          { th: 'Number of Companies', td: '24' },
          { th: 'Initial / Recruiter', td: '19' },
          { th: 'Behavioral', td: '9' },
          { th: 'Technical', td: '9' },
          { th: 'Panel', td: '2' },
          { th: 'Final Rounds', td: '3' },
          { th: 'Average Interviews Per Week', td: '3' },
          { th: 'Most Interviews in a Day', td: '3' },
          { th: 'Most Rounds for a Single Company', td: '5' },
        ]}
      />
      <AccordionTable
        title="Interview Results"
        accordionId="interview-results"
        data={[
          { th: 'Rejected', td: '15' },
          { th: 'Withdrew', td: '8' },
          { th: 'Runner-Up', td: '1'},
          { th: 'Offers', td: '1' },
        ]}
      />
      <AccordionTable
        title="Professional Development"
        accordionId="professional-development"
        data={[
          { th: 'Courses Completed', td: '2' },
          { th: 'Course Modules', td: '13' },
          { th: 'Hours of Videos', td: '8' },
          { th: 'Pages of Notes', td: '25' },
          { th: 'Git Commits', td: '67' },
          { th: 'Practice Questions', td: '74' },
          { th: 'Personal Projects Started', td: '3' },
          { th: 'New Technologies', td: '2' },
          { th: 'Books Purchased', td: '3' }
        ]}
      />
      <AccordionTable
        title="Networking and Communication"
        accordionId="networking-communication"
        data={[
          { th: 'Referrals', td: '5' },
          { th: 'Emails Sent', td: '92' },
          { th: 'Emails Received', td: '606' },
          { th: 'LinkedIn Connections', td: '100' },
          { th: 'LinkedIn Posts', td: '3' },
          { th: 'LinkedIn Post Impressions', td: '48,580' },
          { th: 'LinkedIn Recommendations Received', td: '12' },
          { th: 'LinkedIn Recommendations Given', td: '4' },
          { th: 'Slack Communities Joined', td: '3' },
          { th: 'Networking Events', td: '2' }
        ]}
      />
    </Section>
  );
}
