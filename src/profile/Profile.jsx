import { HEADER_MODE_DEEP } from "../App";

export const Profile  = ({isParent,setHeaderMode}) => {
      setHeaderMode(HEADER_MODE_DEEP);
    return (isParent ? <img src="src\assets\parent-profile-body.png"/> : <img src="src\assets\child-profile-body.png"/> );

}