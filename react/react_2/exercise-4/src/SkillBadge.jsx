import "./SkillBadge.css"
function SkillBadge ({ skill, level }) {
    return (
        <div className={`skill ${level === "Beginner" ? 'Beginner' : level === "Intermediate" ? 'Intermediate' : level === "Expert" ? 'Expert' : ''}`}>
            <h5>[{skill}-{level}]</h5>
        </div>
    );
}

export default SkillBadge;