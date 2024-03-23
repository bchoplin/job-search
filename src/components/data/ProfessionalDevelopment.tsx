import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const professionalDevelopmentOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Professional Development',
      padding: {
          bottom: 10,
      },
      font: {
          size: 20,
      }
    },
  },
};

const labels = ['Hours of Videos', 'Course Modules', 'Pages of Notes', 'Git Commits', 'Practice Questions'];

const professionalDevelopmentData = {
  labels,
  datasets: [
    {
      data: [8, 13, 25, 67, 74],
      backgroundColor: [
        'rgba(218, 106, 153, 0.75)',
        'rgba(178, 137, 216, 0.75)',
        'rgba(96, 170, 243, 0.75)',
        'rgba(0, 193, 228, 0.75)',
        'rgba(88, 207, 189, 0.75)',
      ],
    },
  ],
};

export default function ProfessionalDevelopment() {
  return (
    <div className="job-search-chart job-search-chart--professional-development">
        <Bar options={professionalDevelopmentOptions} data={professionalDevelopmentData} />
    </div>
  );
}

