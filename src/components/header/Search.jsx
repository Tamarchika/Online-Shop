import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../style/components/_input.scss";

const SearchInput = ({ closeMenu }) => {
  const [searchId, setSearchId] = useState(null);
  const searchProduct = (e) => {
    setSearchId(e.target.value);
  };
  const navigate = useNavigate();
  return (
    <div className="search_input">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchId) {
            navigate(`/category/product/${searchId}`);
            closeMenu();
          }
        }}
      >
        <input
          type="search"
          className="input_placeholder"
          placeholder="Search for the product with Id"
          value={searchId}
          onChange={searchProduct}
        />
        <button className="search_icon" type="submit">
          {<FontAwesomeIcon icon={faSearch} />}
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
