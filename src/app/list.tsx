import React from 'react';
import {LocationWithDistance} from './create-ranked-closest-locations';

interface ListProps {
  readonly results: LocationWithDistance[];
}

export function List({results}: ListProps): JSX.Element {
  return (
    <ul>
      {results.map((result, index) => (
        <li
          key={`result-${index}`}
        >{`${result.name}: ${result.distance}km`}</li>
      ))}
    </ul>
  );
}
