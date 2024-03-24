import { HEADER_MODE_DEEP } from "../App";

export const Profile = ({setHeaderMode}) => {
    setHeaderMode(HEADER_MODE_DEEP);
    return (<p>Profile</p>);
}