type IpcChannel = 
    | "auth:registerUser"
  | "auth:loginUser"
    | "";

interface Window {
  api?: {
    invoke: (channel: IpcChannel, ...args: unknown[]) => Promise<unknown>;
  };
}
