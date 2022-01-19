import './App.css';
import Nav from './components/Navbar/Nav';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Testimonial from './components/Testimonial/Testimonial';
import Blog from './components/Blog/Blog';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Main />
        <Footer />
        {/* <Route path='/Features'>
          <Features />
        </Route>
        <Route path='/Testimonial'>
          <Testimonial />
        </Route>
        <Route path='/Blog'>
          <Blog />
        </Route> */}
      </div>
    </BrowserRouter>
  );
}

export default App;