import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import RoomPage from './components/RoomPage.js';
import RoomPageSingle from './components/RoomPageSingle.js';
import Testimonials from './components/Testimonials.js';
import ContextProvider from './Context.js';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar/>

          <Switch>
            <Route exact path='/' component={Home}/>

            <Route exact path='/About' component={About}/>

            <Route exact path='/RoomPage' component={RoomPage}/>

            <Route exact path='/Testimonials' component={Testimonials}/>

            <Route path='/:room' component={RoomPageSingle}/>
          </Switch>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
