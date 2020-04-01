import React from 'react';
import {LocationData, Position} from '../bff/types';
import {createRankedClosestLocations} from './create-ranked-closest-locations';
import {List} from './list';

interface MaskFinderProps {
  readonly data: LocationData;
}

export function MaskFinder({data}: MaskFinderProps): JSX.Element {
  const [userLocation, setUserLocation] = React.useState<
    Position | undefined
  >();

  const handleFindClick = (): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position =>
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        })
      );
    }
  };

  const results = createRankedClosestLocations(data, userLocation, 10);

  return (
    <div>
      <button onClick={handleFindClick}>Standort verwenden</button>
      <div>{`user location: ${JSON.stringify(userLocation)}`}</div>
      {results && <List results={results} />}
    </div>
  );
}
