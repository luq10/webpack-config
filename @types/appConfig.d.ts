declare module "appConfig" {
  interface AppConfigInterface {
    APP_URL: string;
  }

  const config: AppConfigInterface;
  export = config;
}
