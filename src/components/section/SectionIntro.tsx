import { useState } from 'react';
import Section from './Section';

export default function SectionIntro() {
  const [contentExpanded, setContentExpanded] = useState(false);

  const handleReadMore = () => {
    setContentExpanded(!contentExpanded);
  };

  return (
    <Section sectionType="gray-bg">
      <h2>Let's cut to the chase.</h2>

      <p>The job market is abysmal right now. I have been in tech for over 10 years and never before have I found myself in such a whirlwind of career chaos. Unfortunately, the kickoff to this journey was an unexpected layoff. I know that I am not alone in a loss of employment catalyzing a swift entrance into the deep and uncertain waters of the applicant pool. So I want to share a bit about what it took to get me to the finish line.</p>

      <p>A handful of things are known to calm me down: my dog, meditation, running. Also on that list? Documentation. I document many things in my life, both personally and professionally. Writing things down feels like a safety net, a lighthouse for Future Brittany to return to when things get rocky. Seeing it all laid out helps me see patterns emerging, numbers growing, improvements abound. I knew, to survive this, documentation would be my saving grace.</p>

      {contentExpanded &&
        <>
          <p>During my search, I began documenting everything in <a href="https://www.notion.so/">Notion</a>. What started as a simple application tracker blossomed into much more. By the end of it, I had multiple databases, countless fields, and a task board. I tracked every application, every interview, and the results. I had notes and notes of information about myself and the companies I was interviewing with. I wrote out my elevator pitch, answers to behavioral questions, anything I could jot down to perform better in interviews. Anything that made me feel a little bit closer to an offer letter in my inbox.</p>

          <p>To be clear: documentation and data collection alone didn't get me a job. Sure, they helped, but at the end of the day it was <em>me</em>. It was my refusal to back down when the numbers didn't look good. It was my lack of relaxation, no matter how well things were going, because I knew nothing was guaranteed. I didn't count how many tears I shed, how many text messages I avoided answering, how many doom scrolls I took down my LinkedIn feed. I didn't tally how many times I redid my resume or how many hours I dedicated to interview prep. The data below reflects only the results of my hard work. To quantify the effort feels like an exponentially depressing and unnecessary task.</p>

          <p>I don't expect this data to change your life, get you your dream job, or suddenly wave a magic wand over the job market and make it all better. The data itself is not very complex. Yet, it's my lighthouse. I built this little landing page to show the world what it took for me to get back to shore.</p>

          <p>I hope to see many more people in the same boat approaching the harbor soon.</p>
        </>
      }

      <button
      className="button button--cta"
      onClick={handleReadMore}
      >
        {contentExpanded ?
          <span>Read Less</span>
        :
          <span>Read More</span>
        }
        <span className="sr-only">
            about my job search journey
        </span>
      </button>
    </Section>
  );
}
