import React from 'react';
import ReactDOM from 'react-dom';
import {useLocationData} from './useLocationData';

function App(): JSX.Element | null {
  const data = useLocationData();

  if (!data) {
    return null;
  }

  return <h1>{JSON.stringify(data)}</h1>;
}

ReactDOM.render(<App />, document.getElementById('app'));
