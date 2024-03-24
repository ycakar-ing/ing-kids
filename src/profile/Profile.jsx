import { HEADER_MODE_DEEP } from "../App";
import child from "../assets/child-profile-body.png"
import parent from "../assets/parent-profile-body.png"


export const Profile = ({ isParent, setHeaderMode }) => {
  setHeaderMode(HEADER_MODE_DEEP);
  const bgStyle = {
    width: '100%'
  }
  let src = isParent ? parent : child;
  return (<>
    <img src={src} style={bgStyle} />
  </>)

}