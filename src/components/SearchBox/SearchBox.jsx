import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  const handleInputChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        className={styles.input}
        type="text"
        id="filter"
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBox;
