// STYLES
import './Home.css'

// COMPONENTS
import ProfileSection from './ProfileSection'
import LinksSection from './LinksSection';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className="Home">
      <ProfileSection/>
      <LinksSection/>
      <Footer/>
    </div>
  )
}
