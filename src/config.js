import { faker } from '@faker-js/faker';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const config = {
    widgets: [
        {
            id: 1,
            type: 'Numeric',
            title: 'Numeric Widget',
            order: 1,
            size: { width: 200, height: 90 },
            data: 2000,
            priority: 1,
            refreshInterval: 10000, // Optional: Refresh data every 10 seconds
        },
        {
            id: 2,
            type: 'Chart-Pie',
            title: 'Pie Chart Widget',
            order: 3,
            size: { width: 800, height: 600 },
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            priority: 2,
        },
        {
            id: 3,
            type: 'Chart-Line',
            title: 'Line Chart Widget',
            order: 2,
            size: { width: 400, height: 400 },
            data: {
                labels: months,
                datasets: [
                    {
                        fill: true,
                        label: 'Dataset 2',
                        data: months.map(() => faker.number.int({ min: 0, max: 1000 })),
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ]
            },
            priority: 3,
        },
        {
            id: 4,
            type: 'HTML',
            data: '<h2>HTML Widget</h2><p>This is an HTML widget with custom content.</p>',
            order: 2,
            size: { width: '100%', height: 200 },
            priority: 3,
        }
    ],
};

export default config;
