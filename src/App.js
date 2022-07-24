import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Destination from './Destination';
import Crew from './Crew'
import Technology from './Technology';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <section>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/destination' element={<Destination />} />
            <Route path='/crew' element={<Crew />} />
            <Route path='/technology' element={<Technology />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
