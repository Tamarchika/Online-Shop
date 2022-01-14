import Subscribe from "./Subscribe";
import FooterNavbar from "./Footer_Navbar";
import "../../style/layout/_footer.scss";
import AvtorSocLink from "./AvtorSocLink";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="subscribe">
        <Subscribe />
      </div>
      <div className="footer_nav">
        <FooterNavbar />
      </div>
      <div className="avtor_social_links">
        <AvtorSocLink />
      </div>
    </footer>
  );
};

export default Footer;
