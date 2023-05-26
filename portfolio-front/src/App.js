
// import styles
import './style/custom.css';

// import components
import Header from './components/Header';
import Billboard from './components/Billboard';
import MainContent from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Billboard />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
