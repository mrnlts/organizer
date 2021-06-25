import DailyJoke from './DailyJoke';
import DailyPoem from './DailyPoem';
import Weather from './Weather';

const Header = props => {
  const { pollution, temp, weather, joke, poem } = props;
  return (
    <div className="p-5 flex flex-wrap justify-center bg-gray-200 w-full">
      <Weather pollution={pollution} temp={temp} weather={weather} />
      <DailyJoke joke={joke} />
      <DailyPoem poem={poem} />
    </div>
  );
};

export default Header;
