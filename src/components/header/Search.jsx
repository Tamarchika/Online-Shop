import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../../style/components/_input.scss";

const SearchInput = () => {
  return (
    <div className="search_input">
      <form>
        <input
          type="search"
          value="Search for product..."
          className="input_placeholder"
        />
        <span className="search_icon">
          {<FontAwesomeIcon icon={faSearch} />}
        </span>
      </form>
    </div>
  );
};

export default SearchInput;
