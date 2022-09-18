
import Main from './views/Main';
import Login from './views/Login';
import List from './views/List';
import New from './views/New';
import Remove from './views/Remove';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Exercise from './views/Exercise';

import { useState } from "react";




function App() {

  const [item, setItem] = useState([]);

  return (
    <div className="App">
      <div className="header">
        <Nav />
      </div>
      <Routes>
        <Route path={'/'} element={<Main className="Main" />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/list'} element={<List item={item} setItem={setItem}/>} />
        <Route path={'/new'} element={<New />} />
        <Route path={'/remove'} element={<Remove />} />
        <Route path={'/exercise'} element={<Exercise item={item}/>} />
      </Routes>

      <div className="main">
      </div>

      {/* <Form>
                <FormGroup>
                    <Label>Nombre</Label>
                    <Input type="text" name="username"/>
                </FormGroup>
                <FormGroup>
                    <Label>Clave</Label>
                    <Input type="password" name="password"/>
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form> */}
    </div>
  );
}

export default App;
