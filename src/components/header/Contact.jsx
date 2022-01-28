import { FaMailBulk } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import "../../style/components/_contact.scss";

const Contact = () => {
  return (
    <>
      <div className="mail">
        <FaMailBulk />
        <span className="website_mail">Online-Shop@gmail.com</span>
      </div>
      <div className="phone_num">
        <FaPhone /> +883998127361
      </div>
    </>
  );
};

export default Contact;
