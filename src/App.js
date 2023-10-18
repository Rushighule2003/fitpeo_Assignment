import './App.css';
import { Sidebar } from './components/SideMenu/Sidebar';
import { Header } from './components/PageContent/Header';
function App() {


  return (
    <div className="App">
      <Sidebar className="sidebar"/>
      <Header className="header"/>
    </div>
  );
}

export default App;
