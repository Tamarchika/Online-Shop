import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import "../../style/components/_quantity.scss";

const Quantity = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    if (value < 100) {
      setValue(value + 1);
    }
  };
  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div className="quantity">
      <span className="arrow">
        <IoIosArrowUp
          onClick={(e) => {
            e.stopPropagation();
            increment();
          }}
        />
      </span>
      <span className="value">{value}</span>
      <span className="arrow">
        <IoIosArrowDown
          onClick={(e) => {
            e.stopPropagation();
            decrement();
          }}
        />
      </span>
    </div>
  );
};

export default Quantity;
