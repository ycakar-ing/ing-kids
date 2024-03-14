import { Card } from "primereact/card";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export const ParentDashboard = () => {

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
            <Card title="My Account Info">
                <h2><b>Total Balance : 1400 $</b></h2>
            </Card>
            <DashboardSummary />
            
            <BalanceCard header={PIGGY_BANK} value={piggyBank} />
            
            <BalanceCard header={PERSONAL_EXPENSE} value={personalExpense} />
            
            <BalanceCard header={SOCIAL_EXPENSE} value={socialExpense} />
            
        </div>
    )
}