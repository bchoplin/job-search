import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const interviewTypesOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Interview Types',
        padding: {
          bottom: 10,
        },
        font: {
          size: 20,
        }
      },
    },
  };

const interviewTypesData = {
  labels: ['Initial', 'Behavioral', 'Panel', 'Technical'],
  datasets: [
    {
      label: '# of Interviews',
      data: [19, 9, 2, 9],
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

export default function InterviewTypes() {
  return (
    <div className="job-search-chart job-search-chart--interview-types">
        <PolarArea options={interviewTypesOptions} data={interviewTypesData} />
    </div>
  );
}
