import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.scss";

class Navbar extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const aboutOffsetTop = document.getElementById("about").offsetTop;
    const workOffsetTop = document.getElementById("work").offsetTop;
    const resumeOffsetTop = document.getElementById("resume").offsetTop;

    if (window.pageYOffset < aboutOffsetTop) {
      this.props.setActiveSection("home");
    } else if (window.pageYOffset < workOffsetTop) {
      this.props.setActiveSection("about");
    } else if (window.pageYOffset < resumeOffsetTop) {
      this.props.setActiveSection("work");
    } else {
      this.props.setActiveSection("resume");
    }
  };

  handleItemClick = (section) => {
    this.props.setActiveSection(section);
  };

  render() {
    const { activeSection } = this.props;

    return (
      <div className="navbar-container">
        <h1>John</h1>
        <div className="navbar">
          <ol>
            <li
              className={activeSection === "home" ? "active" : ""}
              onClick={() => this.handleItemClick("home")}
            >
              <Link to="home" smooth={true} offset={-100}>
                Home
              </Link>
            </li>
            <li
              className={activeSection === "about" ? "active" : ""}
              onClick={() => this.handleItemClick("about")}
            >
              <Link to="about" smooth={true} offset={-100}>
                About
              </Link>
            </li>
            <li
              className={activeSection === "work" ? "active" : ""}
              onClick={() => this.handleItemClick("work")}
            >
              <Link to="work" smooth={true}>
                Work
              </Link>
            </li>
            <li
              className={activeSection === "resume" ? "active" : ""}
              onClick={() => this.handleItemClick("resume")}
            >
              <Link to="resume" smooth={true}>
                Resume
              </Link>
            </li>
          </ol>
        </div>
        <p>South bend, Indiana</p>
      </div>
    );
  }
}

export default Navbar;
