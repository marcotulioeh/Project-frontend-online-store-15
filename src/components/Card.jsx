import React from 'react';
// import { getProductsFromCategoryAndQuery } from '../services/api';

class Card extends React.Component {
  render() {
    const { title, image, price } = this.props;
    return (
      <div>
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
  // constructor() {
  //   super();
  //   this.state = {

  //   }
  // }

  // componentDidMount = async () => {
  //   const getProducts = await getProductsFromCategoryAndQuery();

  // }

  // render() {
  //   const { categoryId, query } = this.props;
  //   return (
  //     <div data-testid="product">
  //       <img
  //         src={ thumbnail }
  //         alt={ title }
  //       />
  //       <h5>{title}</h5>
  //       <p>
  //         R$
  //         {' '}
  //         { preço }
  //       </p>
  //     </div>
  //   );
  // }
}

export default Card;
