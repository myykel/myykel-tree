// STYLES
import './ProfileSection.css'

// ASSETS
import Myykel from "../assets/myykel.jpg";

export default function ProfileSection() {
  return (
    <div id='profile_section'>
      <img id='profile__img'alt='profile' src={Myykel}/>
      <h4 id='twitter' >Michael Eboji</h4>
      {false && <p id='slack'>Michael Eboji</p>}
    </div>
  )
}
