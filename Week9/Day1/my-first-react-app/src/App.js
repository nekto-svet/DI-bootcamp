// import logo from './logo.svg';
import './App.css';
// import Hello from './Hello';
// import SubHello from './SubHello';
import User from './components/User'

//props//////////////////////

const arr = [
  {id:1, name:'John', email:'jjj@gmail.com'},
  {id:2, name:'Mary', email:'mmm@gmail.com'},
  {id:3, name:'Ann', email:'aaa@gmail.com'}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <SubHello/>
       <h1> I love react</h1>
       <Hello/>
      <Hello/> */}
        {/* <User name='John' email='dlfgnmldkgnmld@gmail.com'/> */}
        {arr.map(item => {
          // return <User name={item.name} email={item.email}/>
          return <User userinfo={item} key={item.id}/>
        })}

      </header>
    </div>
  );
}

export default App;
