import { TabView, TabPanel } from "primereact/tabview";
import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { TaskService } from "../service/TaskService";

export const Tasks = () => {
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
