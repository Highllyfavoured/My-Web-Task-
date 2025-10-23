function ProfileStats ({ projects, followers, following }) {
    return (
        <div>            
        <h4>Projects: {projects}</h4>
        <h4>Followers: {followers}</h4>
        <h4>Following: {following}</h4>
        </div>
    );
}

export default ProfileStats;