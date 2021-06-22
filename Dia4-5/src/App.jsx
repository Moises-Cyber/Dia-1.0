import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import HandleTask from './components/body';

function App() {
  return (
    <div className="App">
      <Header />
      <HandleTask />
      <Footer />
    </div>
  );
}

export default App;
