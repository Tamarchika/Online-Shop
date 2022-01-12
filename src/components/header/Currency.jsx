import Dropdown from "react-dropdown";
import "../../style/layout/_header.scss";

const options = ["USD", "GBP", "RUB", "GEL", "EUR"];

const Currency = () => {
  return (
    <div>
      <Dropdown options={options} value={options[0]} />
    </div>
  );
};

export default Currency;
