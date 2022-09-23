
import './App.css'
import './index.css'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Grid } from '@material-ui/core';

import {ImageStore} from './Components/images-firebase/ImageStore';
import ListMovies from './Components/ListMovies';
import Quotes from './Components/Quotes'
import Realtime from './Components/Realtime';import { Dashboard, ZoomOutMapSharp } from '@material-ui/icons';
import Contact from './bin/Contact';
import About from './bin/About';
import Home from './bin/Home';
import Layout from './Components/Layout/Layout';
import Client from './Components/Client';
import SignUp from './Components/Layout/SignUp';
import { useUserContext } from './Components/Authentication/context/userContext';
import Auth from './Components/Authentication/components/auth';
import AddEvent from './Components/AddEvent';
import AddNews from './Components/AddNews';
import AddResource from './Components/AddResource';
import AddLead from './Components/AddLead';
import NavBar from './Components/Layout/NavBar';
function App() {
  const { user, loading, error } = useUserContext();
  return (
   <>
    <div className="App">
    <BrowserRouter>
      <NavBar/>
        <Routes className='z-control'>
          <Route path="/" element={<AddEvent/>}/>
          <Route path="resource" element={ <AddResource /> } />
          <Route path="news" element={ <AddNews/> } />
          <Route path="leads" element={ <AddLead/> } />
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
      <Layout/>
        <Routes>
          <Route path="/" element={<AddMovie/>}/>
          <Route path="movies" element={ <Realtime/> } />
          <Route path="contact" element={ <Contact/> } />
        </Routes>
      </BrowserRouter> */}
    </div>

   </>
  );
}

export default App;
