import './App.css';
import './components/UserList'
import io from 'socket.io-client'
import UserList from './components/UserList';
import CreateNewUser from './components/CreateNewUser';

export const socket = io('http://localhost:5000/');

function App() {
  return (
    <div style={{color: "whitesmoke"}}>
      <h1>SAY SOMETHING!!</h1>
      <CreateNewUser></CreateNewUser>
      <div className="App">
        <UserList></UserList>
      </div>
    </div>
  );
}

export default App;
