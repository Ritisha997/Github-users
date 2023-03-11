import logo from './logo.svg';
import './App.css';
import Info from './components/Info';
import Repos from './components/Repos';
import Search from './components/Search';
import User from './components/User';
import Demo from './components/Demo';

function App() {
  return (
   <main>
    <Demo/>
    <Search/>
    <Info/>
    <Repos/>
    <User/>
   </main>
  );
}

export default App;
