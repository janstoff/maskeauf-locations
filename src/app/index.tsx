import React from 'react';
import ReactDOM from 'react-dom';
import {useLocationData} from './use-location-data';
import {MaskFinder} from './mask-finder';

function App(): JSX.Element | null {
  const data = useLocationData();

  if (!data) {
    return null;
  }

  return <MaskFinder data={data} />;
}

ReactDOM.render(<App />, document.getElementById('app'));
