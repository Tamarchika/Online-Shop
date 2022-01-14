import AccountFooter from "./AccountFooter";
import Company from "./Company";
import QuickLinks from "./QuickLinks";

const FooterNavbar = () => {
  return (
    <div className="footer_nav_container">
      <div className="footer_logo">
        <h1>ONLINE-SHOP</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          molestie malesuada metus, non molestie ligula laoreet vitae. Ut et
          fringilla risus, vel.
        </p>
      </div>
      <div className="footer_navbar">
        <Company />
        <QuickLinks />
        <AccountFooter />
      </div>
    </div>
  );
};

export default FooterNavbar;
