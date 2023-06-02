import './App.css';
import Menu from './Components/Menu/Menu';
import AboutMe from './Components/AboutMe/AboutMe'
import Footer from './Components/Footer/Footer'
import HireMe from './Components/HireMe/HireMe';
import ImageCarasal from './Components/ImageCarasol/Carosal';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <AboutMe></AboutMe>
      <ImageCarasal></ImageCarasal>
      <HireMe></HireMe>
      <Footer></Footer>

    </div>
  );
}

export default App;
