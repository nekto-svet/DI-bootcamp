import { getUsers } from "./usersSlice";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";

const Users = () => {
    const {users , status} = useSelector(state => state.allUsers);
    const dispatch = useDispatch();
    const api = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        dispatch(getUsers(api));
    }, []);
    console.log(status);
    return (
        <>
        <h3>Users</h3>
        {status === 'succeeded'? 
        users.map(user => {
            return <div key={user.id}>
                <div>Name: {user.name}</div>
                <div>Username: {user.username}</div>
                <div>Email: {user.email}</div>
                <br/>
            </div>
        }):status}
        </>
    )
}

export default Users;