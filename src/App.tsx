import { Chart as ChartJS } from 'chart.js';
import Header from './components/Header';
import Section from './components/section/Section';
import SectionIntro from './components/section/SectionIntro';
import SectionData from './components/section/SectionData';
import SectionOverview from './components/section/SectionOverview';
import Totals from './components/data/Totals';
import ApplicationResults from './components/data/ApplicationResults';
import InterviewTypes from './components/data/InterviewTypes';
import ProfessionalDevelopment from './components/data/ProfessionalDevelopment';

ChartJS.defaults.font.family = '"Quicksand", sans-serif';
ChartJS.defaults.font.size = 14;

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SectionIntro />
        <SectionData />
        <SectionOverview />
        <Section
          sectionType="gradient-bg"
          id="totals"
          detectWidth={true}
        >
          <Totals />
        </Section>
        <Section
          sectionType="grid"
          id="apps-interviews"
        >
          <ApplicationResults />
          <InterviewTypes />
        </Section>
        <Section
          sectionType="gradient-bg"
          id="pd"
          detectWidth={true}
        >
          <ProfessionalDevelopment/>
        </Section>
      </main>
      <footer>
        <div className="container">
          &copy; {new Date().getFullYear()} <a href="https://brittanychopl.in/">Brittany Choplin</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
