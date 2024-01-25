import data from './second_data.json';


const Skills = (props) => {
    return (
        data?data.Skills.map((item,index) => {
            return(
            <div key={index}>
                <h3>{item.Area}</h3>
                <ul>
                {item.SkillSet.map((language, ind) => {
                    return(<li key={ind}>{language.Name}</li>)
                })}
                </ul>
            </div>)
        }):null
    )
}

export default Skills;