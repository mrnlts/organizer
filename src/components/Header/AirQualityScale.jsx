const AirQualityScale = props => {
  const { pollution } = props;
  return (
    <div className="flex">
      <div className={`bg-blue-500 h-5 w-5 rounded-full ${pollution === 1 && 'border-4'} border-gray-900`} />
      <div className={`bg-green-600 h-5 w-5 rounded-full ${pollution === 2 && 'border-4'} border-gray-900`} />
      <div className={`bg-yellow-300 h-5 w-5 rounded-full ${pollution === 3 && 'border-4'} border-gray-900`} />
      <div className={`bg-yellow-600 h-5 w-5 rounded-full ${pollution === 4 && 'border-4'} border-gray-900`} />
      <div className={`bg-red-500 h-5 w-5 rounded-full ${pollution === 5 && 'border-4'} border-gray-900`} />
    </div>
  );
};

export default AirQualityScale;
