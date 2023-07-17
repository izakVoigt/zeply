export interface NotificationsContextData {
  addresses: string[];
  notifications: string[];
  removeNotification: (hash: string) => void;
  subscribeAddress: (hash: string) => void;
  unsubscribeAddress: (hash: string) => void;
}
