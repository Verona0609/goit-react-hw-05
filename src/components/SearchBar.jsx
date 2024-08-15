import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    /* Ф-ія оновлює значення  при кожній зміні текстового поля */
    setQuery(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.searchform} onSubmit={handleSumbit}>
        <input
          className={styles.searchinput}
          value={query}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={styles.searchbutton} type="submit">
          <FiSearch />
        </button>
      </form>

      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
