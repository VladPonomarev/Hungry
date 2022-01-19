import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Blog from './components/Blog';
import {BrowserRouter, Route} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Main />
        <Route path='/Features'>
          <Features />
        </Route>
        <Route path='/Testimonial'>
          <Testimonial />
        </Route>
        <Route path='/Blog'>
          <Blog />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;