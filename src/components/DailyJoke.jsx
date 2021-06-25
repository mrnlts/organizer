const DailyJoke = props => {
  const { joke } = props;
  return (
    <div className="w-40 lg:w-80 h-40 rounded-md p-3 mr-5 mb-5 flex items-center bg-white">
      <p>{joke ? joke : 'Loading'}</p>
    </div>
  );
};

export default DailyJoke;
