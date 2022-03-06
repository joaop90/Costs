import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import stytes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={stytes.footer}>
      <ul className={stytes.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={stytes.copy_right}>
        <span>Costs</span>&copy; 2022
      </p>
    </footer>
  );
}

export default Footer;
