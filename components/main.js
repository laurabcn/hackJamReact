import React, { Component } from 'react';
import filters from '../mocks/filters';
import books from '../mocks/books';
import Navbar from './navbar';
import Books from './books';
import Sidemenu from './sidemenu';


class Main extends Component {
  constructor () {
    super();

    this.selectTab = this.selectTab.bind(this);
    this.openSideBar = this.openSideBar.bind(this);

    this.state = {
      books,
      filters,
    };
  }

  selectTab ( category ) {
    this.setState({
      filters: filters.map(filter => {
        if (filter.category === category) {
          filter.selected = true;
        } else {
          filter.selected = false;
        }
        return filter;
      }),
     books: category === 'All'? books : books.filter( book => {
      return book.category === category;
     }),
    });
  }

  openSideBar () {
    this.setState({
      navClosed: true
    });
  }

  render () {
    const { books, filters } = this.state;

    let className = 'gallery';

    if ( this.state.navClosed ) {
      className += ' filter-is-visible';
    }

    return (
    <main className="main-content">
      <Navbar stateFilters = { this.state.filters }
              selectTab = { this.selectTab } />
      {className}
      <Books booksList = { this.state.books }
             className = { className } />

      <Sidemenu className={ this.state.navClosed ? 'filter filter-is-visible' : 'filter' } />

      <a href="#0" className="filter-trigger" onClick={ this.openSideBar }>Filters</a>
    </main>
   );
  }
}

export default Main;
