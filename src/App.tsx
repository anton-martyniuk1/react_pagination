import React, { ChangeEvent } from 'react';
import './App.css';
import { Pagination } from './components/Pagination';
import { getNumbers } from './utils';

type State = {
  visibleItems: string[],
  selectedPageItems: number,
  itemsCount: number[],
  pageLinks: number,
  selectedPage: number,
};

const items = getNumbers(1, 42)
  .map(n => `Item ${n}`);

export class App extends React.Component<{}, State> {
  state = {
    visibleItems: items.slice(0, 5),
    selectedPageItems: 5,
    itemsCount: [3, 5, 10, 20],
    pageLinks: 9,
    selectedPage: 1,
  };

  total = items.length;

  handleNewItems = () => {
    this.setState(state => {
      const { selectedPage, selectedPageItems } = state;

      return ({
        visibleItems: items.slice(
          (selectedPage * selectedPageItems) - selectedPageItems,
          selectedPage * selectedPageItems,
        ),
      });
    });
  };

  setItemsPerPage = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    this.setState({
      selectedPageItems: +value,
      pageLinks: Math.ceil(items.length / +value),
      selectedPage: 1,
    });

    this.handleNewItems();
  };

  selectPage = (page: number) => {
    this.setState({ selectedPage: page });
    this.handleNewItems();
  };

  selectPrevPage = () => {
    this.setState(state => ({ selectedPage: state.selectedPage - 1 }));
    this.handleNewItems();
  };

  selectNextPage = () => {
    this.setState(state => ({ selectedPage: state.selectedPage + 1 }));
    this.handleNewItems();
  };

  render() {
    const {
      visibleItems,
      itemsCount,
      selectedPageItems,
      pageLinks,
      selectedPage,
    } = this.state;

    return (
      <div className="container">
        <h1>Items with Pagination</h1>

        <p className="lead" data-cy="info">
          {`Page ${selectedPage} (items ${visibleItems[0]} - ${visibleItems.at(-1)} of ${this.total})`}
        </p>

        <div className="form-group row">
          <div className="col-3 col-sm-2 col-xl-1">
            <select
              data-cy="perPageSelector"
              id="perPageSelector"
              className="form-control"
              value={selectedPageItems}
              onChange={this.setItemsPerPage}
            >
              {itemsCount.map(count => (
                <option key={count} value={count}>
                  {count}
                </option>
              ))}
            </select>
          </div>

          <label htmlFor="perPageSelector" className="col-form-label col">
            items per page
          </label>
        </div>

        <Pagination
          // total={items.length}
          visibleItems={visibleItems}
          perPage={pageLinks}
          currentPage={selectedPage}
          onPageClick={this.selectPage}
          toPrevPage={this.selectPrevPage}
          toNextPage={this.selectNextPage}
        />
      </div>
    );
  }
}

export default App;
