import Section from './Section';

export default function SectionData() {
  return (
    <Section sectionType="gradient-bg">
      <h2>The Data.</h2>

      <p>Before we get started, I'd like to provide some context. Particularly, I want to talk about the timing of everything.</p>

      <p>I got laid off on December 14, 2023. My job search lasted from <strong>December 15, 2023</strong> to <strong>March 14, 2024</strong>. This data spans 3 months / 13 weeks / 60 business days / 90 days. I spent an entire quarter unemployed.</p>

      <p>My first application was submitted on December 21, 2023. My first interview was scheduled on January 3, 2024. My last application was submitted on March 13, 2024. My last interview was also on March 13, 2024.</p>

      <p><strong>Explore my job search data below! ✨</strong></p>

      <div className="buttons">
        <div className="buttons__item">
          <a
            href="#overview"
            className="button button--cta"
          >
            <span>Overview</span>
          </a>
          </div>
          <div className="buttons__item">
          <a
            href="#totals"
            className="button button--cta"
          >
            <span>Totals</span>
          </a>
          </div>
          <div className="buttons__item">
          <a
            href="#apps-interviews"
            className="button button--cta"
          >
            <span>Applications</span>
          </a>
          </div>
          <div className="buttons__item">
          <a
            href="#apps-interviews"
            className="button button--cta"
          >
            <span>Interviews</span>
          </a>
          </div>
          <div className="buttons__item">
          <a
            href="#pd"
            className="button button--cta"
          >
            <span>Professional Development</span>
          </a>
        </div>
      </div>

      <p className="note"><em>Please note: this data displays best on larger screens.</em></p>
    </Section>
  );
}
