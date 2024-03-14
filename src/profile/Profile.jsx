
export const Profile  = ({isParent}) => {
    return (isParent ? <img src="src\assets\parent-profile-body.png"/> : <img src="src\assets\child-profile-body.png"/> );
}