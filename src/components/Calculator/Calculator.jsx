import { faDivide, faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      currentValues: '',
      result: undefined,
    };
  }
  handleChange = e => {
    this.setState({ currentValues: e.target.value });
  };
  handleClick = e => {
    const { currentValues } = this.state;
    const oldValues = [...currentValues];
    oldValues.push(
      e.target.id === 'plus'
        ? '+'
        : e.target.id === 'minus'
        ? '-'
        : e.target.id === 'times'
        ? '*'
        : e.target.id === 'divide'
        ? '/'
        : null,
    );
    this.setState({ currentValues: oldValues });
  };
  render() {
    const { currentValues, result } = this.state;
    return (
      <div className="bg-gray-200 rounded-md w-40 md:w-80 h-40 mt-5 mr-5 md:ml-5 p-3">
        <div className="mb-3">
          <span className="bg-white text-gray-300 mr-3 rounded-full p-2 text-xl">
            <FontAwesomeIcon icon={faPlus} />
          </span>
          <span className="bg-white text-gray-300 mr-3 rounded-full p-2 text-xl">
            <FontAwesomeIcon icon={faMinus} />
          </span>
          <span className="bg-white text-gray-300 mr-3 rounded-full p-2 text-xl">
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <span className="bg-white text-gray-300 mr-3 rounded-full p-2 text-xl">
            <FontAwesomeIcon icon={faDivide} />
          </span>
        </div>
        <input
          type="text"
          className="w-28 mb-3 p-2 md:mr-5 md:w-60"
          value={currentValues}
          placeholder="Gimme some data"
          onChange={this.handleChange}
        />
        <button className="bg-white text-gray-500 rounded-xl p-2">Do the math!</button>
        <p className={!result && 'hidden'}>Result: {result}</p>
      </div>
    );
  }
}

export default Calculator;
