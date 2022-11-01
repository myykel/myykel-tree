// STYLES
import './App.css';


// COMPONENTS
import ProfileSection from './components/ProfileSection'
import LinksSection from './components/LinksSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ProfileSection/>
      <LinksSection/>
      <Footer/>
    </div>
  );
}

export default App;
