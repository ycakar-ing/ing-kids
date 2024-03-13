import { Card } from 'primereact/card';
import { useState, useEffect } from 'react';
import { Knob } from 'primereact/knob';
import { Divider } from 'primereact/divider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Chart } from 'primereact/chart';
import { PERSONAL_EXPENSE, PIGGY_BANK, SOCIAL_EXPENSE } from '../common/Constants';

export const ChildDashboard = () => {

    const naviate = useNavigate();

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
            
            <Button label='Tasks' onClick={(e) => {
                naviate('/tasks');
            }} /> <Button label='Empty' onClick={(e) => {
                naviate('/empty');
            }} />
        </>
    )
}

export const ChildDashboardTasks = () => {
    return (
        <p>
            Tasks
        </p>
    )
}

export const Empty = () => {
    return(<></>)
}