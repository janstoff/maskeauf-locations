import {APIGatewayProxyResult, APIGatewayProxyEvent, Context} from 'aws-lambda';
import {LocationData} from './types';

export function handler(
  _event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  // fetch location data from e.g. GoogleSheet

  // convert addresses into geo locations e.g. geocod.io

  // return well prepped data to client
  const data: LocationData = {
    locations: [
      {
        name: 'Laden 1',
        address: 'Adresse 1',
        phone: '999999999',
        position: {latitude: 50.133481, longitude: 9.018343}
      },
      {
        name: 'Laden 5',
        address: 'Adresse 5',
        phone: '999999999',
        position: {latitude: 50.133481, longitude: 13.018343}
      },
      {
        name: 'Laden 2',
        address: 'Adresse 2',
        phone: '999999999',
        position: {latitude: 53.133481, longitude: 9.018343}
      },
      {
        name: 'Laden 3',
        address: 'Adresse 3',
        phone: '999999999',
        position: {latitude: 52.133481, longitude: 8.018343}
      },
      {
        name: 'Laden 4',
        address: 'Adresse 4',
        phone: '999999999',
        position: {latitude: 49.133481, longitude: 10.018343}
      }
    ]
  };

  return Promise.resolve({
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
      'x-lambda-request-id': context.awsRequestId,
      'accept-ranges': 'bytes'
    },
    isBase64Encoded: true,
    body: JSON.stringify(data)
  });
}
