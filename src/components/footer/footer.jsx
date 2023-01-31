import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer-continer">
        <div className="footer-content">
          <div>© Copyright 2023. Made by Sathwik G M</div>
          <div className="footer-links">
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
      </footer>
    </>
  );
};

export default Footer;
