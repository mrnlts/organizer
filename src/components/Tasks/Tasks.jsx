import { Component } from 'react';

class Tasks extends Component {
  constructor() {
    super();
    this.state = {
      todaysTasks: ['Drink some water', 'Feed the cats', 'Take medication'],
      currentTask: '',
    };
  }
  handleChange = e => this.setState({ currentTask: e.target.value });
  handleClick = () => {
    const { todaysTasks, currentTask } = this.state;
    const oldTasks = [...todaysTasks];
    oldTasks.push(currentTask);
    this.setState({ todaysTasks: oldTasks });
  };
  render() {
    const { todaysTasks, currentTask } = this.state;
    return (
      <div className="p-5 flex flex-wrap justify-center w-full">
        <div className="bg-gray-200 rounded-md w-40 sm:w-80 lg:w-1/2 h-40 mt-5 mr-5 lg:mr-0 p-3">
          <p className="pb-3">Tasks for the day</p>
          <ul className="text-gray-500 list-disc pl-5 overflow-y-scroll h-24 lg:flex lg:flex-wrap">
            {todaysTasks.map((task, index) => (
              <li key={index} className="sm:w-40 lg:w-56">
                {task} <input type="checkbox" />{' '}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-200 rounded-md w-40 md:w-80 h-40 mt-5 mr-5 md:ml-5 p-3">
          <p className="pb-3">New task</p>
          <input
            type="text"
            className="w-28 mb-3 p-2 md:mr-5 md:w-60"
            value={currentTask}
            onChange={this.handleChange}
          />
          <button className="bg-white text-gray-500 rounded-xl p-2" onClick={this.handleClick}>
            Add me!
          </button>
        </div>
      </div>
    );
  }
}

export default Tasks;
