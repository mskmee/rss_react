import { getDataFromLocalStorage, setDataToLocalStorage } from '../../domain/localstorageWorker';
import React, { Component } from 'react';

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
  componentDidUpdate() {
    setDataToLocalStorage(this.state.searchValue);
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: e.target.value });
  }
  render() {
    return <input type="text" value={this.state.searchValue} onChange={this.handleChange} />;
  }
}
