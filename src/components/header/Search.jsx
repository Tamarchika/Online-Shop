import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const SearchInput = ({ closeMenu }) => {
  const [searchId, setSearchId] = useState("");
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
          }
          if (window.innerWidth < 768 && searchId) {
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

SearchInput.propTypes = {
  closeMenu: PropTypes.func,
};

export default SearchInput;
