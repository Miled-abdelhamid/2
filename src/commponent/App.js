import './App.css';
import Cardi from './Components/Cardi';
import Caroussel from './Components/Caroussel';
import Navi from './Components/Navi'

function App() {
  return (
    <div className="App">
      <h1>Workshop React component</h1>
          <Navi />
          <Caroussel />
          <Cardi/>
      
    </div>
  );
}

export default App;
