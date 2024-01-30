import {useSelector, useDispatch} from 'react-redux';
import { 
    incrementAsync, 
    decrementAsync, 
} from './counterSlice';
import logo from './logo.svg';

const Counter =() => {
    const {count, loading} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return(
        <>
        <h1>Count:
            {loading?<img src={logo} className="App-logo" alt="logo" />:count} </h1>
        <div>
            <button onClick={() => dispatch(decrementAsync())}> - </button>
            <button onClick={() => dispatch(incrementAsync())}> + </button>
        </div>
        </>
    );
};


export default Counter;