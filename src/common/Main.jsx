import { Button } from "primereact/button";
import logo from "../assets/logo_kid-ing.png";
import logo1 from "../assets/ing_org.png";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { HEADER_MODE_DEEP } from "../App";

export const AppHeader = ({ headerMode, setLogin }) => {
    const style = {
        background: 'white',
        width: '100%',
        paddingTop: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '5px',
        top: '0',
        display: 'flex',
        justifyContent: 'space-between'
    }
    if (headerMode === HEADER_MODE_DEEP) {
        return (
            <div style={style}>
                <LogoButton icon="pi-arrow-left" path="/dashboard" />
                <img src={logo} style={{ height: '40px' }} />
                <LogoutButton setLogin={setLogin}/>
            </div>
        );
    } else {
        return (
            <div style={style}>
                <LogoButton icon="pi-user" path="/profile" />
                <img src={logo} style={{ height: '40px' }} />
                <LogoButton icon="pi-bell" path="/notifications" />
            </div>
        );
    }

}

export const ParentAppHeader = () => {
    const style = {
        background: 'white',
        width: '100%',
        paddingTop: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '5px',
        top: '0',
        display: 'flex',
        justifyContent: 'space-between'
    }
    return (
        <div style={style}>
            <LogoButton icon="pi-user" />
            <img src={logo1} style={{ height: '40px' }} />
            <LogoButton icon="pi-bell" />
        </div>
    );
}


export const AppFooter = () => {
    const style = {
        background: 'white',
        width: '100%',
        position: 'fixed',
        bottom: '0',
        paddingTop: '5px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '1px solid var(--surface-300)'
    }
    return (
        <div style={style}>
            <LogoButton icon="pi-check-square" path="/tasks" />
            <LogoButton icon="pi-home" path="/dashboard" />
            <LogoButton icon="pi-compass" path="/goals" />
        </div>
    );
}

export const ParentAppFooter = () => {
    const style = {
        background: 'white',
        width: '100%',
        position: 'fixed',
        bottom: '0',
        paddingTop: '5px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '1px solid var(--surface-300)'
    }
    return (
        <div style={style}>
            <LogoButton icon="pi-check-square" path="/tasks" />
            <LogoButton icon="pi-home" path="/dashboard" />
            <LogoButton icon="pi-compass" path="/goals" />
        </div>
    );
}

export const LogoButton = ({ icon, path }) => {
    const navigate = useNavigate();
    const onButtonClick = (e) => {
        if (path) {
            navigate(path);
        }
    }
    return (
        <Button
            onClick={onButtonClick}
            rounded
            style={{ background: 'white', borderColor: 'white' }}
            icon={() => <i className={"pi " + icon} style={{ color: '#FF6200', fontSize: '1.5em' }}></i>}>
        </Button>
    )
}

export const LogoutButton = ({ setLogin }) => {
    const navigate = useNavigate();
    const onButtonClick = (e) => {
        
        setLogin(false);
        navigate('/');
        
    }
    return (
        <Button
            onClick={onButtonClick}
            rounded
            style={{ background: 'white', borderColor: 'white' }}
            icon={() => <i className="pi pi-sign-out" style={{ color: '#FF6200', fontSize: '1.5em' }}></i>}>
        </Button>
    )
}

export const BalanceCard = ({ header, value }) => {
    return (
        <Card title={header}>
            <DataTable value={value}>
                <Column field="description" header="Description"></Column>
                <Column field="balance" header="Balance"></Column>
                <Column field="date" header="Date"></Column>
            </DataTable>
        </Card>
    )
}


export const Row = (props) => {
    const style = {
        paddingTop: '30px'
    }
    return (
        <div style={style}>
            {props.children}
        </div>
    )
}