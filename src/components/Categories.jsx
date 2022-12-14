import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { clickHandler } = this.props;
    const { allCategories, fetchDone } = this.state;
    return (
      <ul>
        {fetchDone ? (
          allCategories.map(({ id, name }) => (
            <li
              key={ id }
              id={ id }
              data-testid="category"
              onClick={ clickHandler }
              aria-hidden="true"
            >
              {name}
            </li>
          ))) : ''}
      </ul>
    );
  }
}

Categories.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Categories;
