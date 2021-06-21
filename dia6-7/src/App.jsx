import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Receitas from './components/body';


function App() {
  return (
    <div className="App">
      <Header />
      <Receitas />  
      <Footer />
    </div>
  );
}

export default App;
