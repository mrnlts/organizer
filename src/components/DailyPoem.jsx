const DailyPoem = props => {
  const { poem } = props;
  return (
    <div className="w-40 md:w-80 xl:w-96 h-40 rounded-md p-3 mr-5 mb-5 flex flex-col justify-center bg-white">
      {poem ? (
        <div className="overflow-y-scroll">
          <p className="text-xs xl:text-sm italic pb-3">
            {poem.author}, {poem.title}{' '}
          </p>
          <div className="text-xs xl:text-sm">
            {poem.lines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      ) : (
        'Loading'
      )}
    </div>
  );
};

export default DailyPoem;
