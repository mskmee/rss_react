import styles from './SearchBar.module.css';

interface ISearchBarProps {
  query: string;
  submitHandler: () => void;
  setQuery: (data: string) => void;
}
export const SearchBar = ({ query, submitHandler, setQuery }: ISearchBarProps) => {
  return (
    <form
      className={styles.wrapper}
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler();
      }}
    >
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className={styles.icon} />
    </form>
  );
};
