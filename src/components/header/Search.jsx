import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../style/components/_input.scss";

const SearchInput = () => {
  const [searchId, setSearchId] = useState(null);
  const searchProduct = (e) => {
    setSearchId(e.target.value);
  };

  return (
    <div className="search_input">
      <form>
        <input
          type="search"
          className="input_placeholder"
          placeholder="Search for the product with Id"
          value={searchId}
          onChange={searchProduct}
        />
        <span className="search_icon">
          <Link to={`/category/product/${searchId}`} tabIndex="-1">
            {<FontAwesomeIcon icon={faSearch} />}
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SearchInput;
