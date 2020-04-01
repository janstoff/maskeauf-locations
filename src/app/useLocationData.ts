import React from 'react';
import {LocationData} from '../bff/types';

export function useLocationData(): LocationData | undefined {
  const [data, setData] = React.useState<LocationData | undefined>();

  React.useEffect(() => {
    (async () => {
      const data = await fetch('bff');
      const json = await data.json();

      if (typeof json === 'object') {
        setData(json);
      } else {
        setData(json.message || json.errorMessage || 'Not a valid data object');
      }
    })().catch(error => {
      setData(error.message);
    });
  }, []);

  return data;
}
