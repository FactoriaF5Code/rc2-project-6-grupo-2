import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import ".Footer.css";

export const Footer = () => {
  return (
    <>
    <div className="pagefoot">
    <section className="enlaces">
      <h3>Versión para móviles</h3>
      <h3>Tus reservas</h3>
      </section>
        <section className="socialNetwork">
          <a
            href="https://www.facebook.com/tupagina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook style={{ color: "#ffffff" }} />
          </a>
          <a
            href="https://twitter.com/tucuenta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter style={{ color: " #ffffff" }} />
          </a>
          <a
            href="https://www.instagram.com/tucuenta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ color: "#ffffff " }} />
          </a>
        </section>

        <section>
          <p>© 2024 Trooking</p>
        </section>
      </div>
    </>
  );
};

export default Footer;
