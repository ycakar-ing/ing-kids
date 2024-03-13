import { Button } from "primereact/button";
import logo from "../assets/logo_kid-ing.png"
import { Divider } from "primereact/divider";

export const AppHeader = () => {
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
            <img src={logo} style={{ height: '40px' }} />
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
            <LogoButton icon="pi-check-square" />
            <LogoButton icon="pi-home" />
            <LogoButton icon="pi-compass" />
        </div>
    );
}

export const LogoButton = ({ icon, onClick }) => {
    return (
        <Button
            onClick={onClick}
            rounded
            style={{ background: 'white', borderColor: 'white' }}
            icon={() => <i className={"pi " + icon} style={{ color: '#FF6200', fontSize: '1.5em' }}></i>}>
        </Button>
    )
}