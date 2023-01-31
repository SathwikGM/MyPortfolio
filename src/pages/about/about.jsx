import "./about.scss";
const About = () => {
  return (
    <>
      <section className="about-container">
        <div className="about-heading">
          <h1>ABOUT ME</h1>
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
          <div className="about-content">
            <div className="about-main">
              <h3>
                I'm a Frontend Web Developer building the Front-end of Websites
              </h3>
              <div className="content-detail">
                <p>
                  I'm open to Job opportunities where I can contribute, learn
                  and grow. If you have a good opportunity that matches my
                  skills and experience then don't hesitate to contact me.
                </p>
              </div>
            </div>
            <div className="skill-container">
              <h3>My Skills</h3>
              <div className="skills">
                <div class="skills_skill">HTML</div>
                <div class="skills_skill">CSS</div>
                <div class="skills_skill">JavaScript</div>
                <div class="skills_skill">React</div>
                <div class="skills_skill">SASS</div>
                <div class="skills_skill">GIT</div>
                <div class="skills_skill">Github</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
