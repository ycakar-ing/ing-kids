import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
import { Button } from "primereact/button";
import { HEADER_MODE_DEEP } from "../App";

const notificationsList = [
    {
        id: 50,
        description: "notification-1",
        read: true,
    },
    {
        id: 51,
        description: "notification-2",
        read: true,
    },
    {
        id: 52,
        description: "notification-3",
        read: false,
    }
];

export const Notifications = ({setHeaderMode}) => {
    const [notifications, setNotificasion] = useState([...notificationsList]);

    setHeaderMode(HEADER_MODE_DEEP);

    return (
        <div className="card">
            <DataTable value={notifications}>
                <Column field="description" header="Description"></Column>
                <Column body={(notification) => {
                    const [read, setRead] = useState(notification.read);
                    const onButtonClick = (e) => {
                        setRead(!read);
                    }
                    return (
                        <Button
                            onClick={onButtonClick}
                            rounded
                            style={{ background: 'white', borderColor: 'white' }}
                            icon={() => <i className={"pi " + (read ? 'pi-bell' : 'pi-verified')}
                                style={{ color: '#FF6200', fontSize: '1.5em' }}></i>}>
                        </Button>
                    )
                }} 
                style={{
                    width: '10px'
                }}/>
            </DataTable>
        </div>
    );
}