
import './App.css';

// import styles
import './style/custom.css';

// import components
import Header from './components/Header';
import Billboard from './components/Billboard';
import MainContent from './components/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Billboard />
      <MainContent />
    </div>
  );
}

export default App;
