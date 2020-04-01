import {Location, LocationData, Position} from '../bff/types';
import {getDistanceBetweenCoordinates} from './get-distance-between-coordinates';

export interface LocationWithDistance extends Location {
  readonly distance: number;
}

export function createRankedClosestLocations(
  data: LocationData,
  userLocation: Position | undefined,
  maxNumberOfResults: number
): LocationWithDistance[] | undefined {
  if (!userLocation) {
    return undefined;
  }

  return data.locations
    .map(location => {
      return {
        ...location,
        distance: getDistanceBetweenCoordinates(
          userLocation,
          location.position,
          true
        )
      };
    })
    .sort((a, b) => (a.distance > b.distance ? 1 : -1))
    .slice(0, maxNumberOfResults);
}
