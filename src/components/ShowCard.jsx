import React from 'react';
import Card from './Card';

class ShowCard extends React.Component {
  render() {
    const { filterCard, data, deleteCard } = this.props;
    let novoData;
    if (filterCard.length === 0) {
      novoData = data;
    } else {
      novoData = data.map((item) => item.includes(filterCard));
    }

    return (
      novoData.map((card) => (
        <div key={ card.cardName }>
          <Card
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />
          <button
            type="button"
            data-testid="delete-button"
            onClick={ () => (deleteCard(card)) }
          >
            Excluir
          </button>
        </div>
      ))
    );
  }
}

export default ShowCard;
