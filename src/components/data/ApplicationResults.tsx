import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const applicationResultsOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Application Results',
      padding: {
        bottom: 10,
      },
      font: {
        size: 20,
      }
    },
  },
};

const applicationResultsData = {
  labels: ['Rejected', 'Role Unavailable', 'Ghosted', 'Interview', 'Active'],
  datasets: [
    {
      label: '# of Applications',
      data: [51, 3, 55, 24, 17],
      backgroundColor: [
        'rgba(218, 106, 153, 0.75)',
        'rgba(178, 137, 216, 0.75)',
        'rgba(96, 170, 243, 0.75)',
        'rgba(0, 193, 228, 0.75)',
        'rgba(88, 207, 189, 0.75)',
      ],
      borderColor: [
        'rgb(218, 106, 153)',
        'rgb(178, 137, 216)',
        'rgb(96, 170, 243)',
        'rgb(0, 193, 228)',
        'rgb(88, 207, 189)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function ApplicationResults() {
  return (
    <div className="job-search-chart job-search-chart--application-results">
      <Doughnut options={applicationResultsOptions} data={applicationResultsData} />
    </div>
  );
}
