import "./LinksSection.css";

// ASSETS
import github from "../assets/github.png";
import slack from "../assets/slack.png";

export default function LinksSection() {
  return (
    <div id="links_section">
      <a href="https://twitter.com/MrPace_setter" target="blank">
        <div className="links_container">
          <span>Twitter Link</span>
        </div>
      </a>

      <a id="btn__zuri" href="https://training.zuri.team/" target="blank">
        <div className="links_container">
          <span>Zuri Team</span>
        </div>
      </a>

      <a id="books" href="http://books.zuri.team" target="blank">
        <div className="links_container">
          <span>Zuri Books</span>
          <p>Find books about design and coding</p>
        </div>
      </a>

      <a
        id="book__python"
        href="https://books.zuri.team/python-for-beginners?ref_id=Lina"
        target="blank"
      >
        <div className="links_container">
          <span>Python Books</span>
        </div>
      </a>

      <a id="pitch" href="https://background.zuri.team" target="blank">
        <div className="links_container">
          <span>Background Check for Coders</span>
          <p>Learn more about the web builders</p>
        </div>
      </a>

      <a
        id="book__design"
        href="https://books.zuri.team/design-rules"
        target="blank"
      >
        <div className="links_container">
          <span>Design Books</span>
          <p>Learn Design with this free book</p>
        </div>
      </a>

      <div className="social-icons">
        <img src={slack} alt="slack icon" />
        <a href="https://github.com/myykel/myykel-tree" target="blank">
          <img src={github} alt="github icon" />
        </a>
      </div>
    </div>
  );
}
