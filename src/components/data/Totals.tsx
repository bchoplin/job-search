import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const applicationsData = [0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 7, 12, 12, 15, 18, 18, 23, 27, 28, 30, 30, 34, 35, 35, 42, 45, 47, 49, 52, 54, 55, 61, 63, 63, 66, 66, 67, 67, 70, 73, 75, 77, 77, 77, 77, 80, 80, 85, 93, 93, 93, 93, 93, 96, 101, 105, 105, 105, 113, 115, 119, 119, 126, 126, 126, 129, 129, 129, 129, 129, 132, 132, 132, 137, 141, 142, 142, 142, 142, 145, 148, 148, 148, 148, 148, 148, 148, 150];

const interviewsData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 5, 5, 5, 7, 7, 7, 8, 10, 10, 11, 12, 12, 12, 13, 13, 14, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 18, 18, 18, 19, 19, 19, 19, 21, 21, 21, 21, 23, 23, 23, 24, 26, 26, 26, 29, 29, 29, 30, 30, 30, 32, 33, 33, 33, 35, 37, 38, 39];

const totalsOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'The Big Picture: Totals',
      font: {
        size: 20,
      }
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Days',
      },
      type: 'linear' as const,
      min: 0,
      max: 90,
      ticks: {
        stepSize: 30,
      }
    }
  }
};

// Create "day" labels based on applications data length.
const labels = [];
for (let i = 0; i < applicationsData.length; i++) {
  labels.push(i);
}

const totalsData = {
  labels,
  datasets: [
    {
      label: 'Applications',
      data: applicationsData,
      borderColor: 'rgb(218, 106, 153)',
      backgroundColor: 'rgb(255, 255, 255)',
      pointRadius: 2,
    },
    {
      label: 'Interviews',
      data: interviewsData,
      borderColor: 'rgb(178, 137, 216)',
      backgroundColor: 'rgb(255, 255, 255)',
      pointRadius: 2,
    },
  ],
};

export default function Totals() {
  return (
    <div className="job-search-chart job-search-chart--totals">
      <Line options={totalsOptions} data={totalsData} />
    </div>
  );
}
