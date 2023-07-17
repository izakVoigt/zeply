import { errorHandler } from '@utils/errorHandler';
import WebSocket from 'websocket';

const connectWebsocket = () => {
  const client = new WebSocket.client();

  client.on('connectFailed', (error) => {
    errorHandler(error);
  });

  client.on('connect', (connection) => {
    console.log('OK');

    connection.on('error', (error) => {
      errorHandler(error);
    });

    connection.on('message', (message) => {});
  });

  client.connect(process.env.NEXT_APP_BLOCKCHAIN_WEBSOCKET!);

  return client;
};

export default connectWebsocket;
