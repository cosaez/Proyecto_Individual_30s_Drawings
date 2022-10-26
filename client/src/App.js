/* styles */
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* views */
import Main from './views/Main';
import Login from './views/Login';
import Register from './views/Register';
import GestureDrawing from './views/GestureDrawing';
import List from './views/List';
import New from './views/New';
import Remove from './views/Remove';
import Exercise from './views/Exercise';
import Others from './views/Others';
/* components */
import Nav from './components/Nav';
/* react hooks */
import { useEffect, useState } from 'react';
/* axios */
import axios from 'axios';
/* routing */
import { Route, Routes } from 'react-router-dom';
/* context */
import { UserContext } from './context/userContext';
import { library } from '@fortawesome/fontawesome-svg-core';
/* font awesome */
import { faCircleUser, faCircleExclamation, faRightFromBracket, faPen } from '@fortawesome/free-solid-svg-icons';

library.add(faCircleUser, faCircleExclamation, faRightFromBracket, faPen);

/* App displays the navbar and main view. It also contains routing, authentication, and global constants item (needed for List and Exercise) and user */
function App() {
  const [user, setUser] = useState(false);
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios.get('/api/checkauth')
      .then((res) => {
        setUser(res.data.user)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <div className="header">
          <Nav />
        </div>
        <Routes>
          <Route path={'/'} element={<Main className="Main" />} />
          <Route path={'/gd'} element={<GestureDrawing />} />
          <Route path={'/others'} element={<Others />} />
          {/* could use const navigate to return to / when input's successful? */}
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/list'} element={<List item={item} setItem={setItem} />} />
          <Route path={'/new'} element={<New />} />
          <Route path={'/remove'} element={<Remove />} />
          <Route path={'/exercise'} element={<Exercise item={item} />} />
        </Routes>
        <div className="main">
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
