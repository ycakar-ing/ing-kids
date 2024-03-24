import { Card } from 'primereact/card';
import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { BalanceCard } from '../common/Main'
import { PERSONAL_EXPENSE, PIGGY_BANK, SOCIAL_EXPENSE } from '../common/Constants';
import { HEADER_MODE_MAIN } from '../App';

export const ChildDashboard = () => {
    return <Dashboard isParent={false} />
}


export const ParentDashboard = () => {
    return <Dashboard isParent={false} />
}


export const Dashboard = ({isParent,setHeaderMode}) => {

    setHeaderMode(HEADER_MODE_MAIN);

    const [piggyBank,setPiggyBank] = useState([]);
    const [personalExpense,setPersonalExpense] = useState([]);
    const [socialExpense,setSocialExpense] = useState([]);

    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    }

    return (
        <div style={divStyle}>
            <Card title={isParent ? "My Kids Info" : "My Account Info"}>
                <h2><b>Total Balance : 1400 $</b></h2>
            </Card>
            <DashboardSummary />
            
            <BalanceCard header={PIGGY_BANK} value={piggyBank} />
            
            <BalanceCard header={PERSONAL_EXPENSE} value={personalExpense} />
            
            <BalanceCard header={SOCIAL_EXPENSE} value={socialExpense} />
            
        </div>
    )
}


export const DashboardSummary = () => {
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
            //cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
    return (
        <Card title="Monthly Balance Summary">
            <Chart type="pie" data={chartData} options={chartOptions} />
        </Card>
    );
}



