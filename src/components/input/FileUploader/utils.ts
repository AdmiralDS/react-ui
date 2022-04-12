export type Status = 'Uploaded' | 'Loading' | 'Error' | 'Queue';

export type Dimension = 'xl' | 'm';

export const formatBytes = (bytes: number, decimals = 2): number => {
  return Number((bytes / (1024 * 1024)).toFixed(decimals));
};

export const dataTransferConstructorSupported = (): boolean => {
  let dataTransferConstructorSupported;
  try {
    new DataTransfer();
    dataTransferConstructorSupported = true;
  } catch {
    dataTransferConstructorSupported = false;
  }
  return dataTransferConstructorSupported;
};
