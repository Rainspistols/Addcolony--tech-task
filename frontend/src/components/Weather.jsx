import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { getCurrentWeather } from '../utils/api';
import Tooltip from '../ui/Tooltip';

const Weather = () => {
  const dateBuild = (d) => {
    let modifiedDate = String(d);
    return modifiedDate.slice(4, 15);
  };

  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
    );
  }, []);

  useEffect(() => {
    if (location.lat && location.lon)
      getCurrentWeather(location.lat, location.lon).then((result) => {
        setWeather(result);
      });
  }, [location]);

  return (
    <WeatherStyled>
      {weather.current && (
        <>
          <div className='location-container'>
            <div className='location'>{weather.timezone}</div>
            <div className='date'> {dateBuild(new Date())}</div>
          </div>

          <div className='weather-container'>
            <Tooltip text='tooltip'>
              <div
                className={
                  Math.round(weather.current.temp) > 25
                    ? 'temperature hot'
                    : 'temperature'
                }
              >
                {Math.round(weather.current.temp)}°C
              </div>
            </Tooltip>

            <div className='weather'>
              {weather.current.weather[0].main}
              <img
                src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
                alt={weather.current.weather[0].main}
              />
            </div>
          </div>
        </>
      )}
    </WeatherStyled>
  );
};

const WeatherStyled = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.white};
  text-shadow: ${({ theme }) => theme.shadow};
  text-align: center;
  background: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.flex.center};
  flex-direction: column;

  .location-container {
    .location {
      font-size: 30px;
      line-height: 30px;
      margin-bottom: 20px;
    }
    .date {
      font-size: 20px;
      line-height: 20px;
    }

    margin-bottom: 50px;
  }

  .weather-container {
    width: 100%;
    .temperature {
      font-size: 100px;
      line-height: 100px;
      font-weight: 700;
      background-color: rgb(255, 255, 255, 0.1);
      border-radius: 16px;
      box-shadow: ${({ theme }) => theme.shadow};
      margin-bottom: 20px;
      width: 100%;
      color: green;
      position: relative;
    }

    .temperature.hot {
      color: red;
    }

    .weather {
      font-size: 50px;
      line-height: 50px;
      font-weight: 700;

      ${({ theme }) => theme.flex.center};
    }
  }
`;

export default Weather;
