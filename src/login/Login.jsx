import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Row } from "../common/Main";
import logo from "../assets/logo_kid-ing.png"
import logo1 from "../assets/ing_org.png"
import { Divider } from "primereact/divider";
import {InputSwitch} from "primereact/inputswitch";
import { HEADER_MODE_MAIN } from "../App";

export const Login = ({ afterLogin,setHeaderMode }) => {

    setHeaderMode(HEADER_MODE_MAIN);

    const [username, setUsername] = useState('');
    const [password, setPassowrd] = useState('');
    const [checked, setChecked] = useState(false);

    const navigate = useNavigate();

    const onLogin = (e) => {
        afterLogin(checked);
        navigate('/dashboard');
    }

    const divStyle = {
        width: '300px',
        margin: '0px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    const width100 = {
        width: '100%'
    }

    const header = () => {
        if(checked){
            return <img src={logo1} style={{ height: '80px' }} /> 
        } else {
            return <img src={logo} style={{ height: '80px' }} /> 
        }
        
    }

    return (
        <div style={divStyle}>
            <Card title={header} >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    Child <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} /> Parent
                </div>
                <Row>
                    <span className="p-float-label">
                        <InputText id="username"
                            style={width100}
                            value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="username">Username</label>
                    </span>
                </Row>
                <Row>
                    <span className="p-float-label">
                        <Password id="password"
                            style={width100}
                            inputStyle={width100}
                            value={password}
                            onChange={(e) => setPassowrd(e.target.value)} feedback={false} tabIndex={1} />
                        <label htmlFor="password">Passowrd</label>
                    </span>
                </Row>
                <Row>
                    <Button label="Login" style={width100} onClick={onLogin} />
                </Row>
                <Divider align="center">
                    <b>OR</b>
                </Divider>
                
                    <Button label="Register" style={width100} onClick={onLogin} />
                
            </Card>
        </div>
    );
}


