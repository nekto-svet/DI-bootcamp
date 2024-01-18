// import styling from "./styling";

// import Button from 'react-bootstrap/Button';

// import './User.css';
// const User = (props) => {
//     console.log(props) //always object
//     const {name, email, id, username} = props.userinfo;

// //////STYLING///////////////////
// // inline styling

//     // const styling = {
//     //     display:'inline-block',
//     //     textAlign: 'center',
//     //     padding:'20px',
//     //     margin:'20px',
//     //     border:'1px solid cyan',
//     //     borderRadius: '15px',
//     //     backgroundColor: 'lightblue'
//     //     };

//     // <div style={styling}></div>
//     return (
//         <div className ='userstyle'>
//             <img src={`https://robohash.org/${id}?size=150x150`} alt=""/>
//             <h2>{name}</h2>
//             <h3>{email}</h3>
//             <h4>{username}</h4>
//             <Button variant="primary">More Info</Button>
//         </div>
//     )
// }

import React from 'react';

class User extends React.Component {
    // constructor(){
    //     super();
    // }
    render(){
        const {name, email, id, username} = this.props.userinfo;
        return (
                <div className ='userstyle'>
                    <img src={`https://robohash.org/${id}?size=150x150`} alt=""/>
                    <h2>{name}</h2>
                    <h3>{email}</h3>
                    <h4>{username}</h4>
                </div>
                )
    }
}

export default User