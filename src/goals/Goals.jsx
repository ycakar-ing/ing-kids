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




export const Goals = ({ isParent }) => {
    console.log(isParent);
    let emptyGoal = {
        id: null,
        description: '',
        budget: null
    };

    const [visible, setVisible] = useState(false);

    const [value, setValue] = useState(90);

    const [newGoalValue, setNewGoalValue] = useState('set new goal');

    const [confirmCheckoutDialogue, setConfirmCheckoutDialogue] = useState(false);
    const [parentDialog, setParentDialog] = useState(false);

    const [goal, setGoal] = useState(null);

    const toast = useRef(null);

    const actionBodyTemplate = (rowData) => {
        const onButtonClick = () => {
            console.log('here');
            confirmCheckoutGoal(rowData);
        }
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={onButtonClick} />
            </React.Fragment>
        );
    };

    const confirmCheckoutGoal = (activeGoals) => {
        setGoal(activeGoals);
        console.log(activeGoals.description);
        setConfirmCheckoutDialogue(true);
    };

    const hideConfirmCheckoutDialogue = () => {
        setConfirmCheckoutDialogue(false);
    };

    const onCheckoutCoin = (e) => {
        let newValue = value - goal.budget;
        setValue(newValue);
        deleteGoal();
    }

    const deleteGoal = () => {
        let _activeGoalList = activeGoals.filter((val) => val.id !== goal.id);

        setActiveGoals(_activeGoalList);
        hideConfirmCheckoutDialogue();
        setGoal(emptyGoal);
    };

    const onNewGoalSubmit = (e) => {
        let newApplorvaoGoal = {
            id: 5,
            description: newGoalValue
        }
        approvalGoals.push(newApplorvaoGoal);
        setApprovalGoals([...approvalGoals]);
        setVisible(false);
    }

    const [approvalGoals, setApprovalGoals] = useState([
        {
            id: 1,
            description: "Playstation 5",
            budget: 0
        },
        {
            id: 2,
            description: "Lego",
            budget: 0

        }
    ]);

    const [activeGoals, setActiveGoals] = useState([
        {
            id: 1,
            description: "Red Dead Redemption",
            budget: 45
        },
        {
            id: 2,
            description: "Baldur's Gate",
            budget: 60

        }
    ]);

    const [historicGoals, setHistoricGoals] = useState([
        {
            id: 1,
            description: "t-shirt",
            budget: 5
        },
        {
            id: 2,
            description: "Headphones",
            budget: 13

        },
        {
            id: 3,
            description: "Mouse",
            budget: 21
        },
        {
            id: 4,
            description: "trouser",
            budget: 5
        },
        {
            id: 5,
            description: "cardigan",
            budget: 5
        },
        {
            id: 6,
            description: "t-shirt",
            budget: 5
        },
        {
            id: 7,
            description: "t-shirt",
            budget: 5
        },
    ]);


    return (
        <>
            <Card title="Total Coins">
                <div style={{ textAlign: 'center' }}>
                    <Knob value={value} onChange={(e) => setValue(e.value)} size={200} style={{ textAlign: 'center' }} />
                    <div className="card flex justify-content-center">
                        {!isParent ? <Button label="Add New Goal" icon="pi pi-plus" onClick={() => setVisible(true)} /> : null}

                        <Dialog header="Add New Goal" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                            <InputText value={newGoalValue} onChange={(e) => setNewGoalValue(e.target.value)} />
                            <Button label="Submit Goal" icon="pi pi-check" onClick={onNewGoalSubmit} />
                        </Dialog>
                    </div>
                </div>
            </Card>
            <Divider />
            <Card title="Waiting Approval">
                <DataTable value={approvalGoals} paginator rows={5}>
                    <Column field="description" header="Goal"></Column>
                    <Column field="budget" header="Coins"></Column>
                    {isParent ?
                        <Column header="Actions" body={(item) => {
                            const onSubmit = () => {
                                let newList = approvalGoals.filter(it => it.id != item.id);
                                setApprovalGoals(newList);
                            }
                            return (<Button label='Submit' onClick={onSubmit} />)
                        }}></Column>
                        : null}
                </DataTable>
            </Card>
            <Divider />
            <Card title="Active Goals">
                <Dialog visible={confirmCheckoutDialogue} style={{ width: '32rem' }} onHide={hideConfirmCheckoutDialogue} >
                    <div className="confirmation-content">
                        <p>Are you sure?</p>
                        <Button label="Check out coins" icon="pi pi-check" onClick={onCheckoutCoin} />
                    </div>
                </Dialog>
                <Dialog visible={parentDialog} style={{ width: '32rem' }} onHide={(e) => setParentDialog(false)} >
                    <div className="confirmation-content">
                        <p>Did you visit our partners shop for the prize?</p>
                        <p>Do you want to check ING loan products ?</p>
                        <Button label="Yes" icon="pi pi-check" onClick={(e) => setParentDialog(false)} />
                    </div>
                </Dialog>
                <DataTable value={activeGoals} paginator rows={5}>
                    <Column field="description" header="Goal"></Column>
                    <Column field="budget" header="Coins"></Column>
                    {isParent 
                        ? <Column header="Action" body={(item)=>{
                            return(
                                <Button label="Approve" onClick={(e)=>setParentDialog(true)}/>
                            )
                        }} />
                        : <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>}
                    
                </DataTable>


            </Card>
            {!isParent ?
                <>
                    <Divider />
                    <Card title="History">
                        <DataTable value={historicGoals} paginator rows={5}>
                            <Column field="description" header="Goal"></Column>
                            <Column field="budget" header="Coins"></Column>
                        </DataTable>
                    </Card>
                </>
                : null
            }
            <Divider />


        </>
    )
}