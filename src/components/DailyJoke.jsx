const DailyJoke = props => {
  const { joke } = props;
  return (
    <div className="border border-gray-900 w-80 h-40 rounded-md p-3 mr-5 flex items-center">
      <p>{joke ? joke : 'Loading'}</p>
    </div>
  );
};

export default DailyJoke;
