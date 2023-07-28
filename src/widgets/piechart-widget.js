import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


const PieChartWidget = ({ title, data, size }) => {
    return (
        <div style={{ flex: 1, border: '2px solid black', margin: '10px', ...size }}>
            {title ? <h2 style={{ paddingLeft: '10px' }}>{title}</h2> : ''}
            <Pie data={data} />
        </div>
    );
};

export default PieChartWidget;