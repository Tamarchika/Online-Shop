import Dropdown from "react-dropdown";
import "../../style/layout/_header.scss";

const options = ["English", "Russian", "Georgian", "German", "French"];
const Language = () => {
  return (
    <div className="language_dropdown">
      <Dropdown options={options} value={options[0]} />
    </div>
  );
};

export default Language;
