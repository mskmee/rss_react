import React, { Component } from 'react';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../../domain/localStorageWorker';
import styles from './SearchBar.module.css';

interface ISearchBarState {
  searchValue: string;
}
interface ISearchBarProps {
  value?: string;
}
export default class SearchBar extends Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { searchValue: getDataFromLocalStorage() };
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  }

  handleBeforeUnload = () => {
    setDataToLocalStorage(this.state.searchValue);
  };

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: e.target.value });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type="text"
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
        <div className={styles.icon}></div>
      </div>
    );
  }
}
