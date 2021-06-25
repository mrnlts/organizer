import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../data/icons';

const Weather = props => {
  const { pollution, temp, weather } = props;
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const currentIcon = () => {
    const icon = icons.find(obj => obj.type === weather);
    return icon ? <FontAwesomeIcon icon={icon.icon} /> : '';
  };
  return (
    <div className="border border-gray-900 w-40 rounded-md p-3 mr-5">
      <p className="text-2xl">Barcelona</p>
      <p>{new Date(Date.now()).toLocaleString('en-US', options)} </p>
      <p>
        {Math.round(temp - 273.15)} º {currentIcon()}
      </p>
      <p className="pb-2">Air quality: </p>
      <div className="flex">
        <div className={`bg-blue-500 h-5 w-5 rounded-full ${pollution.index === 1 && 'border-4'} border-gray-900`} />
        <div className={`bg-green-600 h-5 w-5 rounded-full ${pollution.index === 2 && 'border-4'} border-gray-900`} />
        <div className={`bg-yellow-300 h-5 w-5 rounded-full ${pollution.index === 3 && 'border-4'} border-gray-900`} />
        <div className={`bg-yellow-600 h-5 w-5 rounded-full ${pollution.index === 4 && 'border-4'} border-gray-900`} />
        <div className={`bg-red-500 h-5 w-5 rounded-full ${pollution.index === 5 && 'border-4'} border-gray-900`} />
      </div>
    </div>
  );
};

export default Weather;
