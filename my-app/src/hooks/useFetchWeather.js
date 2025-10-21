import { useEffect, useState } from 'react';
import { fetchWeather } from '../api/weather';

export default function useFetchWeather(city, apiKey) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    setLoading(true);
    setError(null);

    fetchWeather(city, apiKey)
      .then((res) => setData(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [city, apiKey]);

  return { data, loading, error };
}
