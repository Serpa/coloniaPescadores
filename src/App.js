import './App.css';
import Header from './components/layout/Header';
import Login from './components/views/Login';
import Footer from './components/layout/Footer';
import Content from './components/layout/Content';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content/>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
