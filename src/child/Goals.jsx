import { Card } from 'primereact/card';
import { useState } from 'react';
import { Knob } from 'primereact/knob';
import { Divider } from 'primereact/divider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import React, { useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';



export const Goals = () => {

    const naviate = useNavigate();

    const [visible, setVisible] = useState(false);

    const [value, setValue] = useState(90);

    const [newGoalValue, setNewGoalValue] = useState('set new goal');

    const [approvalGoals, setApprovalGoals] = useState([
        {
            id: 1,
            description: "Playstation 5",
            budget: "-",
            date: "01/08/2024"
        },
        {
            id: 2,
            description: "Lego",
            budget: "-",
            date: "10/05/2025",

        }
    ]);

    const [activeGoals, setActiveGoals] = useState([
        {
            id: 1,
            description: "Red Dead Redemption",
            budget: "45 c",
            date: "01/08/2024"
        },
        {
            id: 2,
            description: "Baldur's Gate",
            budget: "60 c",
            date: "10/05/2025",

        }
    ]);

    const [historicGoals, setHistoricGoals] = useState([
        {
            id: 1,
            description: "t-shirt",
            budget: "5 c",
            date: "12/11/2023"
        },
        {
            id: 2,
            description: "Headphones",
            budget: "13 c",
            date: "11/05/2023",

        },
        {
            id: 3,
            description: "Mouse",
            budget: "21 c",
            date: "12/11/2023"
        },
        {
            id: 4,
            description: "trouser",
            budget: "5 c",
            date: "12/11/2023"
        },
        {
            id: 5,
            description: "cardigan",
            budget: "5 c",
            date: "12/11/2023"
        },
        {
            id: 6,
            description: "t-shirt",
            budget: "5 c",
            date: "12/11/2023"
        },
        {
            id: 7,
            description: "t-shirt",
            budget: "5 c",
            date: "12/11/2023"
        },
    ]);

    return (
        <>
            <Card title="Total Coins">
                <Knob value={value} onChange={(e) => setValue(e.value)} size={200} />
        <div className="card flex justify-content-center">
            <Button label="Add New Goal" icon="pi pi-plus" onClick={() => setVisible(true)} />
            <Dialog header="Add New Goal" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            <InputText value={newGoalValue} onChange={(e) => setNewGoalValue(e.target.value)} />
            <Button label="Submit Goal" icon="pi pi-check" onClick={() => setVisible(true)} />
            </Dialog>
        </div>
            </Card>
            <Divider />
            <Card title="Waiting Approval">
                <DataTable value={approvalGoals} paginator rows={5}>
                    <Column field="description" header="Goal"></Column>
                    <Column field="budget" header="Coins"></Column>
                    <Column field="date" header="Date"></Column>
                </DataTable>
            </Card>
            <Divider />
            <Card title="Active Goals">
                <DataTable value={activeGoals} paginator rows={5} selectionMode={'checkbox'} selection={activeGoals} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="description" header="Goal"></Column>
                    <Column field="budget" header="Coins"></Column>
                    <Column field="date" header="Date"></Column>
                </DataTable>
                <Button label="Submit" icon="pi pi-check" />
            </Card>
            <Divider />
            <Card title="History">
                <DataTable value={historicGoals} paginator rows={5}>
                    <Column field="description" header="Goal"></Column>
                    <Column field="budget" header="Coins"></Column>
                    <Column field="date" header="Date"></Column>
                </DataTable>
            </Card>

            <Divider />


        </>
    )
}