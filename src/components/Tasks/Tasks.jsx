const Tasks = () => {
  return (
    <div className="p-5 flex flex-wrap justify-center w-full">
      <div className="bg-gray-200 rounded-md w-40 sm:w-80 lg:w-1/2 h-40 mt-5 mr-5 lg:mr-0 p-3">
        <p className="pb-3">Tasks for the day</p>
        <ul className="text-gray-500 list-disc pl-5 overflow-y-scroll h-24 lg:flex lg:flex-wrap">
          <li className="sm:w-40 lg:w-56">
            Drink some water <input type="checkbox" />
          </li>
          <li className="sm:w-40 lg:w-56">
            Feed the cats <input type="checkbox" />
          </li>
          <li className="sm:w-40 lg:w-56">
            Take medication <input type="checkbox" />
          </li>
        </ul>
      </div>
      <div className="bg-gray-200 rounded-md w-40 md:w-80 h-40 mt-5 mr-5 md:ml-5 p-3">
        <p className="pb-3">New task</p>
        <input type="text" className="w-28 mb-3 p-2 md:mr-5 md:w-60" />
        <button className="bg-white text-gray-500 rounded-xl p-2">Add me!</button>
      </div>
    </div>
  );
};

export default Tasks;
