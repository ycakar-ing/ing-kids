import { Card } from 'primereact/card';
import { useState, useEffect } from 'react';
import { Divider } from 'primereact/divider';
import { Chart } from 'primereact/chart';
import { PERSONAL_EXPENSE, PIGGY_BANK, SOCIAL_EXPENSE } from '../common/Constants';

export const Dashboard = () => {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: [SOCIAL_EXPENSE, PIGGY_BANK, PERSONAL_EXPENSE],
            datasets: [
                {
                    data: [33, 33, 33],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--orange-100'),
                        documentStyle.getPropertyValue('--orange-500'),
                        documentStyle.getPropertyValue('--orange-300')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);


    return (
        <>
            <Card>
                <Chart type="doughnut" data={chartData} options={chartOptions} />
            </Card>
            <Divider />
        </>
    )
}

