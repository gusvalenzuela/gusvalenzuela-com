import React from "react";
import Styles from "./Foot.module.css";
import { Icon } from "semantic-ui-react";

function Foot() {
  return (
    <footer id="site-footer" className={Styles.footer}>
      <div className={Styles.footerLeft}>2020 &copy; gr\^_^/</div>
      <div className={Styles.footerRight}>
        <div className={Styles.footerIcons}>
          <ul className={`${Styles.menu} ${Styles.simple}`}>
            <li>
              <a
                href="https://github.com/gusvalenzuela"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" inverted size="big" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gus-valenzuela-b73b0296/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="linkedin" inverted size="big" />
              </a>
            </li>
            {/* <li>
            <a href="" target="_blank"  rel="noopener noreferrer">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li> */}
            {/* <li>
            <a href="#target-1" target="_blank"  rel="noopener noreferrer">
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            </a>
          </li> */}
            <li>
              <a
                href="https://twitter.com/vrsulo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="twitter" inverted size="big" />
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className={Styles.footerBottom}>
        {" "}
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with NEXT.js and ❤{" "}
        </a>
      </div>
    </footer>
  );
}

export default Foot;
