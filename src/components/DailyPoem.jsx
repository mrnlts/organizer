const DailyPoem = props => {
  const { poem } = props;
  return (
    <div className="border border-gray-900 w-80 h-40 rounded-md p-3 mr-5 flex flex-col justify-center">
      {poem ? (
        <div className="overflow-y-scroll">
          <div className="text-xs pb-3">
            {poem.lines.slice(0, 4).map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <p className="text-xs italic">
            {poem.author}, {poem.title}{' '}
          </p>
        </div>
      ) : (
        'Loading'
      )}
    </div>
  );
};

export default DailyPoem;
