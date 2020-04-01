export interface Position {
  readonly latitude: number;
  readonly longitude: number;
}

export interface Location {
  readonly name: string;
  readonly address: string;
  readonly position: Position;
  readonly phone?: string;
  readonly email?: string;
}

export interface LocationData {
  locations: Location[];
}
