type IpcChannel = 
  | "auth:registerUser"
  | "auth:loginUser"
  | "company:createOrUpdate"
  | "company:getCompanyByUser";

interface Window {
  api?: {
    invoke: (channel: IpcChannel, ...args: unknown[]) => Promise<unknown>;
  };
}
