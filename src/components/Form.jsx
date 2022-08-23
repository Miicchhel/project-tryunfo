import React from 'react';

class From extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="name"
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            type="text"
            id="description"
          />
        </label>

        <label htmlFor="attr01">
          attr01
          <input
            data-testid="attr1-input"
            type="number"
            id="attr01"
          />
        </label>

        <label htmlFor="attr2">
          attr02
          <input
            data-testid="attr2-input"
            type="number"
            id="attr2"
          />
        </label>

        <label htmlFor="attr3">
          attr03
          <input
            data-testid="attr3-input"
            type="number"
            id="attr3"
          />
        </label>

        <label htmlFor="image">
          Image
          <input
            data-testid="image-input"
            type="text"
            id="image"
          />
        </label>

        <label htmlFor="Raridade">
          Raridade
          <select name="" id="Raridade" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfo">
          Super Trunfo
          <input type="checkbox" id="trunfo" data-testid="trunfo-input" />
        </label>

        <button type="button" data-testid="save-button">Salvar</button>

      </form>
    );
  }
}

export default From;
