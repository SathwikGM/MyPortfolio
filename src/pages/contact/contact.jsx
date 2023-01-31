import "./contact.scss";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="">
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/sathwikgm/"
          >
            <i
              className="fa fa-linkedin-square"
              style={{ fontSize: "24px" }}
            ></i>
            LinkedIn
          </a>
          <a className="footer-link" href="https://github.com/SathwikGM">
            <i class="fa fa-github" style={{ fontSize: "24px" }}></i>GitHub
          </a>
          {/* <a className="footer-link" href="">
              Email
            </a> */}
        </div>
      </div>
    </>
  );
};

export default Contact;
