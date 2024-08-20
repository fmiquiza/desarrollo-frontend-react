import logo from './logo.svg';
import './App.css';

import Logo from './components/logo';
import Description from './components/Description';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Logo/>
          <Description/>
          <Content/>
      </header>
    </div>
  );
}

export default App;
