import { errorHandler } from '@utils/errorHandler';

const connectWebsocket = (onConnect: (connection: WebSocket) => void): WebSocket => {
  const client = new WebSocket('wss://ws.blockchain.info/inv');

  client.onopen = () => {
    onConnect(client);
  };

  client.onerror = (error) => {
    errorHandler(error);
  };

  return client;
};

export default connectWebsocket;
