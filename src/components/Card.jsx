import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { title, image, price } = this.props;
    return (
      <div data-testid="product">
        <img src={ image } alt={ title } />
        <h3>{ title }</h3>
        <p>
          R$
          {' '}
          { price }
        </p>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Card;
