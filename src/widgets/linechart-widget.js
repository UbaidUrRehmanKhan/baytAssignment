import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
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
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};


const LineChartWidget = ({ title, data, size }) => {
    return (
        <div style={{ flex: 1, border: '2px solid black', margin: '10px', ...size }}>
            {title ? <h2 style={{ paddingLeft: '10px' }}>{title}</h2> : ''}
            <Line options={options} data={data} />
        </div>
    );
};


export default LineChartWidget;