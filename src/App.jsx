import React, { Component } from "react";

import "./App.scss";

// Components
import Navbar from "./components/navbar/navbar";
import MainHeader from "./components/mainHeader/mainHeader";
import ProjectsPreview from "./components/projectsPreview/projectsPreview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: "home",
    };
  }

  setActiveSection = (section) => {
    console.log("setActiveSection: ", section);
    this.setState({ activeSection: section });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          activeSection={this.state.activeSection}
          setActiveSection={this.setActiveSection}
        />
        <section id="home">
          <MainHeader />
          <ProjectsPreview />
        </section>
        <section id="about" className="about">
          <div className="about-container">
            <h1 className="about-title">
              I am passionate <br /> about crafting clean <br /> and efficient
              code.
            </h1>
            <p className="about-sub-title">About me</p>
            <p className="about-body">
              As a full-stack web developer proficient in React and modern web
              technologies, I am currently pursuing my studies in software
              engineering at Springboard. With a deep-rooted passion for coding
              and a commitment to continuous learning, I strive to stay at the
              forefront of the ever-evolving web development landscape.
              <br />
              <br />
              Equipped with a solid foundation in both front-end and back-end
              development, I possess the skills to architect and build
              innovative and robust applications. Leveraging the power of React,
              I bring user interfaces to life with seamless interactions and
              engaging user experiences. Whether it's implementing responsive
              designs or optimizing performance, I ensure that my applications
              are not only visually appealing but also highly functional and
              user-friendly across various devices and platforms.
            </p>
            <p className="about-follow-up">
              See my work on <span>Github</span>
            </p>
          </div>
        </section>
        <section id="work">
          <h1 style={{ paddingTop: 1000 }}>work</h1>
        </section>
        <section id="resume">
          <h1 style={{ paddingTop: 1000 }}>resume</h1>
        </section>
      </div>
    );
  }
}

export default App;
