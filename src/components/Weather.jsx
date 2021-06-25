import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icons from '../data/icons';
import AirQualityScale from './AirQualityScale';

const Weather = props => {
  const { pollution, temp, weather } = props;
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const currentIcon = () => {
    const icon = icons.find(obj => obj.type === weather);
    return icon ? <FontAwesomeIcon icon={icon.icon} /> : '';
  };
  return (
    <div className="w-40 h-40 rounded-md p-3 mr-5 mb-5 bg-white xl:w-80 xl:flex xl:flex-wrap xl:items-center xl:justify-center">
      <p className="text-2xl xl:pr-3">Barcelona</p>
      <p className="xl:pr-3">{new Date(Date.now()).toLocaleString('en-US', options)} </p>
      <p>
        {Math.round(temp - 273.15)} º {currentIcon()}
      </p>
      <p className="pb-2 xl:pr-3">Air quality: </p>
      <AirQualityScale pollution={pollution.index} />
    </div>
  );
};

export default Weather;
