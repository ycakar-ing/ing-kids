import { Card } from 'primereact/card';
import { useState } from 'react';
import { Knob } from 'primereact/knob';
import { Divider } from 'primereact/divider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';



export const Goals = () => {

    const [visible, setVisible] = useState(false);

    const [activeGoalVisible, setActiveGoalVisible] = useState(false);

    const [value, setValue] = useState(90);

    const [newGoalValue, setNewGoalValue] = useState('set new goal');

    const [approvalGoals, setApprovalGoals] = useState([
        {
            id: 1,
            description: "Playstation 5",
            budget: "-"
        },
        {
            id: 2,
            description: "Lego",
            budget: "-"

        }
    ]);

    const [activeGoals, setActiveGoals] = useState([
        {
            id: 1,
            description: "Red Dead Redemption",
            budget: "45 c"
        },
        {
            id: 2,
            description: "Baldur's Gate",
            budget: "60 c"

        }
    ]);

    const [historicGoals, setHistoricGoals] = useState([
        {
            id: 1,
            description: "t-shirt",
            budget: "5 c"
        },
        {
            id: 2,
            description: "Headphones",
            budget: "13 c"

        },
        {
            id: 3,
            description: "Mouse",
            budget: "21 c"
        },
        {
            id: 4,
            description: "trouser",
            budget: "5 c"
        },
        {
            id: 5,
            description: "cardigan",
            budget: "5 c"
        },
        {
            id: 6,
            description: "t-shirt",
            budget: "5 c"
        },
        {
            id: 7,
            description: "t-shirt",
            budget: "5 c"
        },
    ]);

    const onNewGoalSubmit = (e) => {
        let newApplorvaoGoal = {
            id: 5,
            description: newGoalValue
        }
        approvalGoals.push(newApplorvaoGoal);
        setApprovalGoals([...approvalGoals]);
        setVisible(false);
    }

    return (
        <>
            <Card title="Total Coins">
                <Knob value={value} onChange={(e) => setValue(e.value)} size={200} />
                <div className="card flex justify-content-center">
                    <Button label="Add New Goal" icon="pi pi-plus" onClick={() => setVisible(true)} />
                    <Dialog header="Add New Goal" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                        <InputText value={newGoalValue} onChange={(e) => setNewGoalValue(e.target.value)} />
                        <Button label="Submit Goal" icon="pi pi-check" onClick={onNewGoalSubmit} />
                    </Dialog>
                </div>
            </Card>
            <Divider />
            <Card title="Waiting Approval">
                <DataTable value={approvalGoals} paginator rows={5}>
                    <Column field="description" header="Goal"></Column>
                    <Column field="budget" header="Coins"></Column>
                </DataTable>
            </Card>
            <Divider />
            <Card title="Active Goals">
                <DataTable value={activeGoals} paginator rows={5} selectionMode={'checkbox'} selection={activeGoals} dataKey="id" tableStyle={{ minWidth: '50rem' }}>
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                    <Column field="description" header="Goal"></Column>
                    <Column field="budget" header="Coins"></Column>
                </DataTable>
                <Button label="Submit" icon="pi pi-check" onClick={() => setActiveGoalVisible(true)} />
                <Dialog header="Submit Choice" visible={activeGoalVisible} style={{ width: '50vw' }} onHide={() => setActiveGoalVisible(false)}>
                    <p>Would you like to continue?</p>
                    <Button label="Submit Request" icon="pi pi-check" />
                </Dialog>

            </Card>
            <Divider />
            <Card title="History">
                <DataTable value={historicGoals} paginator rows={5}>
                    <Column field="description" header="Goal"></Column>
                    <Column field="budget" header="Coins"></Column>
                </DataTable>
            </Card>

            <Divider />


        </>
    )
}