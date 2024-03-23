import { TabView, TabPanel } from "primereact/tabview";
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { TaskService } from "../service/TaskService";
import { Card } from "primereact/card";
import { Row } from "../common/Main";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

export const Tasks = ({ isParent }) => {
    if (isParent) {
        return (<ParentTasks />)
    } else {
        return (<MyTasks />)
    }
};


export const MyTasks = () => {
    const [Tasks, setTasks] = useState([]);
    const [Tasks2, setTasks2] = useState([]);

    useEffect(() => {
        TaskService.getTasksMini().then((data) => setTasks(data));
    }, []);

    useEffect(() => {
        TaskService.getAdditionalTasks().then((data) => setTasks2(data));
    }, []);

    const actionsTemplate = (item) => {
        const onButtonClick = (e) => {
            alert("sent for approval");
        };
        return (
            <Button
                rounded
                style={{
                    background: "white",
                    borderColor: "white",
                    color: "#FF6200",
                    fontSize: "1.5em",
                }}
                icon={item.icon}
                disabled={item.status != "ongoing"}
                onClick={onButtonClick}
            />
        );
    };

    return (
        <>
            <TabView>
                <TabPanel header="Daily">
                    <div className="card">
                        <DataTable value={Tasks}>
                            <Column field="name" header="Name"></Column>
                            <Column field="points" header="Points"></Column>
                            <Column header="Actions" body={actionsTemplate}></Column>
                        </DataTable>
                    </div>
                </TabPanel>
                <TabPanel header="Additional">
                    <div className="card">
                        <DataTable value={Tasks2}>
                            <Column field="name" header="Name"></Column>
                            <Column field="points" header="Points"></Column>
                            <Column header="Actions" body={actionsTemplate}></Column>
                        </DataTable>
                    </div>
                </TabPanel>
            </TabView>
        </>
    );
};


export const ParentTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTasks] = useState({});

    const types = [
        { name: 'Daily', code: 'DAILY' },
        { name: 'Weekly', code: 'WEEKLY' },
        { name: 'Monthly', code: 'MONTHLY' }
    ];


    const onValueChange = (e) => {
        newTask[e.target.id] = e.target.value;
        setNewTasks({ ...newTask });
    }

    const onTypeSelected = (value) => {
        newTask.type = value;
        setNewTasks({ ...newTask });
    }

    const width100 = {
        width: "100%"
    }

    const onAddNewTask = () => {
        
        let task = {
            description: newTask.description,
            type: newTask.type.name,
            point: newTask.point,
        }
        tasks.push(task);
        setTasks([...tasks]);
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
        }}>
            <Card title="Task List">
                <DataTable value={tasks}>
                    <Column field="description" header="Name"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column field="point" header="Points"></Column>
                </DataTable>
            </Card>
            <Card title="New Task">
                <Row>
                    <span className="p-float-label">
                        <InputText id="description"
                            style={width100}
                            value={newTask.description} onChange={onValueChange} />
                        <label htmlFor="description">Description</label>
                    </span>
                </Row>
                <Row>
                    <span className="p-float-label">
                        <InputText id="point"
                            style={width100}
                            value={newTask.point} onChange={onValueChange} />
                        <label htmlFor="point">Point</label>
                    </span>
                </Row>
                <Row>
                    <Dropdown id="type" value={newTask.type}
                        style={width100}
                        onChange={(e) => onTypeSelected(e.value)}
                        options={types} optionLabel="name"
                        placeholder="Select a Type" className="w-full md:w-14rem" />

                </Row>
                <Row>
                    <Button label="Add New Task" style={width100} onClick={onAddNewTask}/>
                </Row>
            </Card>
        </div>
    );
}
