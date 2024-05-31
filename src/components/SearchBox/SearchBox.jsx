
import css from "./SearchBox.module.css"

const SearchBox = ({ changeFilter, filter }) => {
    const handleChange = (e) => {
        changeFilter(e.target.value)
    } 

  return (
    <div>
      <input
        className={css.searchBox}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox