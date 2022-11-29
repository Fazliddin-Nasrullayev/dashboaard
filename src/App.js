import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Context from './components/Context';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  const obj = {}

  return (
    <Context.Provider value={obj}>

    <Routes>
      <Route path='/' element={ <Header/> }>
        
        <Route path='/' element={ <Home/>} />
      </Route>

    </Routes>
    </Context.Provider>
  );
}

export default App;
