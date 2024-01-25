import data from './second_data.json';


const Experiences  = (props) => {
    console.log (data.Experiences[0].roles)
    return (
        data?data.Experiences.map((item,index) => {
            return(
            <div key={index}>
                <img src={item.logo} alt='logo'/><br/>
                <a href={item.url}>{item.companyName}</a><br/>
                <h4>{item.roles[0].title}</h4><br/>
                <div>{item.roles[0].startDate}{item.roles[0].location}</div><br/>
                <div>{item.roles[0].description}</div>
                <br/>
                <br/>
            </div>)
        }):null
    )
}

export default Experiences ;