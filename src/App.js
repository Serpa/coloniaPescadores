import './App.css';
import Header from './components/layout/Header';
import Login from './components/Login'
import Footer from './components/layout/Footer';
import Content from './components/layout/Content';


function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Login/> */}
      <Content/>
      <Footer></Footer>
    </div>
  );
}

export default App;
