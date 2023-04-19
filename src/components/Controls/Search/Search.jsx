import { BsSearch } from "react-icons/bs";
import styles from "./Search.module.css";

const Search = ({ search, setSearch }) => {
  return (
    <>
      <label className={styles.search}>
        <BsSearch />
        <input
          className={styles.search__input}
          onChange={(event) => setSearch(event.target.value)}
          value={search}
          placeholder='Search for country'
          type='search'
        />
      </label>
    </>
  );
};

export { Search };
