declare module 'appConfig' {
  interface IConfig {
    APP_URL: string;
  }

  const config: IConfig;

  export = config;
}
