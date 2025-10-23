import "./profileHeader.css";
function ProfileHeader ({name, title, avatar}) {
    return (
        <div className="header">
            <h2>{name}</h2>
            <h3>{title}</h3>
            <img src={avatar} alt={`${name} avatar`} className="avatar" />
        </div>
    );
}

export default ProfileHeader;