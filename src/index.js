// For async/await
import "@babel/polyfill";

import sum from "./sum";
import appConfig from "appConfig";

import "./elements";

// eslint-disable-next-line no-console
console.log(sum(100, 2000));

// eslint-disable-next-line no-console
console.log("appConfig", appConfig);
