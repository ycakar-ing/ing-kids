import { Card } from 'primereact/card';
import { useState } from 'react';
import { Knob } from 'primereact/knob';
import { Divider } from 'primereact/divider';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export const ChildDashboard = () => {

    const [value, setValue] = useState(60);
    const [transactions, setTransacations] = useState([
        {
            description: "Birthdate",
            balance: " + 500 USD",
            date: "01/01/2023"
        },
        {
            description: "Birthdate",
            balance: " + 500 USD",
            date: "01/01/2023",

        }
    ]);

    return (
        <>
            <Card title="Balance">
                <Knob value={value} onChange={(e) => setValue(e.value)} size={200} />
            </Card>
            <Divider />
            <Card title="Transactions">

                <DataTable value={transactions}>
                    <Column field="description" header="Name"></Column>
                    <Column field="balance" header="Balance"></Column>
                    <Column field="date" header="Date"></Column>
                </DataTable>

            </Card>
        </>
    )
}