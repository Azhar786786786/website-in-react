import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import UseRefComponent from './Components/Hooks/UseRefComponent';

function App() {
  return (
    <>
      {/* <Navbar />
      <Header />
      <MainContent />
      <Footer /> */}
      <UseRefComponent/>
    </>
  );
}

export default App;
