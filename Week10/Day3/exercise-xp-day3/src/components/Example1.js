import data from './second_data.json';


const SocialMedias = (props) => {
    return (
        data?data.SocialMedias.map((item,index) => {
            return(<div key={index}>
                <div>{item}</div>
            </div>)
        }):null
    )
}

export default SocialMedias;

