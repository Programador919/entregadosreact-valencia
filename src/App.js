import './App.css';
import Routers from './router/Routers';
import NavBar from './components/NavBar';
/* import "bootstrap/dist/css/bootstrap.min.css"; */
import "bootstrap/dist/js/bootstrap.min.js"; 



function App() {
  return (    
    <>
    <NavBar />
    <Routers />
    <footer >
      <p>Footer</p>
    </footer>
    </>
    
  );
}

export default App;
