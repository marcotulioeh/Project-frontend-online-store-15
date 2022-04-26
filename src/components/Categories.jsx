import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor() {
    super();

    this.state = {
      allCategories: [],
      fetchDone: false,
    };
  }

  async componentDidMount() {
    const promise = await getCategories();
    this.setState({ allCategories: promise, fetchDone: true });
  }

  render() {
    const { allCategories, fetchDone } = this.state;
    return (
      <ul>
        {fetchDone ? (
          allCategories.map(({ id, name }) => (
            <li key={ id } id={ id } data-testid="category">{name}</li>
          ))) : ''}
      </ul>
    );
  }
}

export default Categories;
