import React from 'react';
import Form from './components/Form';
import './app.css';
import Card from './components/Card';
import ShowCard from './components/ShowCard';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
    filterCard: '',
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const min = 0;
      const max = 90;
      const maxSum = 210;
      const {
        cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;

      if (
        cardName
        && cardDescription
        && cardImage
        && (cardAttr1 >= min) && (cardAttr1 <= max)
        && (cardAttr2 >= min) && (cardAttr2 <= max)
        && (cardAttr3 >= min) && (cardAttr3 <= max)
        && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum)
      ) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  onSaveButtonClick = (card) => {
    const { data } = this.state;
    this.setState(() => ({
      data: [...data, card],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: '',
    }), () => {
      const { cardTrunfo } = this.state;
      if (cardTrunfo) {
        this.setState(() => ({
          hasTrunfo: true,
          cardTrunfo: false,
        }));
      }
    });
  };

  deleteCard = (item) => {
    const { data } = this.state;
    const newData = data.filter((card) => card !== item);

    if (item.cardTrunfo) {
      this.setState(() => ({
        data: newData,
        hasTrunfo: false,
      }));
    } else {
      this.setState(() => ({
        data: newData,
      }));
    }
  };

  findCard = ({ target }) => {
    const { value } = target;
    // const f
    this.setState(() => ({
      filterCard: value,
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      data,
      filterCard,
    } = this.state;
    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
          <section className="section-container">

            <section className="section-filter">
              <input
                type="text"
                data-testid="name-filter"
                placeholder="Nome da carta"
                onChange={ this.findCard }
              />
            </section>

            <section className="section-form">
              <Form
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
                hasTrunfo={ hasTrunfo }
                isSaveButtonDisabled={ isSaveButtonDisabled }
                onInputChange={ this.onInputChange }
                onSaveButtonClick={ this.onSaveButtonClick }
              />
            </section>
            <section className="section-card">
              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
              />
            </section>
          </section>

          <section className="section-show-card">
            <ShowCard filterCard={ filterCard } data={ data } deleteCard={ this.deleteCard } />
          </section>
        </main>
      </>
    );
  }
}

export default App;
