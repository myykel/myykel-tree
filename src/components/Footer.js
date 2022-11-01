import './Footer.css'

// ASSETS
import IFORG from "../assets/I4G.png";
import zuriInternship from "../assets/Zuri.Internship_Logo.png";

export default function Footer() {
  return (
    <footer id='footer'>
      <img src={zuriInternship} alt='zuri internship logo'/>
      <p>HNG internship 9 Frontend Task</p>
      <img src={IFORG} alt='Ingressive for good logo'/>
    </footer>
  )
}
