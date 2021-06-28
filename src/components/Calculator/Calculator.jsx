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
    const newValue = e.target.value.slice(e.target.value.length - 1);
    const operators = ['+', '-', '*', '/'];
    //It's a number
    return !isNaN(parseInt(newValue))
      ? this.setState({ currentValues: e.target.value })
      : //It's an operator
      operators.includes(newValue)
      ? this.setState({ currentValues: e.target.value })
      : //It's deleting
      e.target.value === ''
      ? this.setState({ currentValues: '' })
      : //Else
        '';
  };
  handleCalculus = () => {
    const { currentValues } = this.state;
    let calcArguments = currentValues.split('+');
    if (calcArguments.length > 1) {
      this.setState({ result: Number(calcArguments[0]) + Number(calcArguments[1]) });
    } else {
      calcArguments = calcArguments.toString().split('-');
      if (calcArguments.length > 1) {
        this.setState({ result: Number(calcArguments[0]) - Number(calcArguments[1]) });
      } else {
        calcArguments = calcArguments.toString().split('*');
        if (calcArguments.length > 1) {
          this.setState({ result: Number(calcArguments[0]) * Number(calcArguments[1]) });
        } else {
          calcArguments = calcArguments.toString().split('/');
          this.setState({ result: Number(calcArguments[0]) / Number(calcArguments[1]) });
        }
      }
    }
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
        <button className="bg-white text-gray-500 rounded-xl p-2" onClick={this.handleCalculus}>
          Do the math!
        </button>
        <p className={`relative left-40 -top-8 ${!result && 'hidden'}`}>Result: {result}</p>
      </div>
    );
  }
}

export default Calculator;
