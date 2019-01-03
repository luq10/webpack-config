# Technology 

1. ES2015+ (Babel)
2. No framework - only Vanila JS
3. SASS
4. Hot Module Replacement on all SASS files 

# Development

* Install dependency by `yarn`
* Now you can run `yarn start` to start development server (webpack-dev-server) on your machine.
By default server start on port `3000`.

## App config
* The file `app.config.js` should defined in root directory.
* See `app.config.js.dist` to see how it should look like

## Change server port 

Just run `yarn start --port 8080`.

If you want start server on some free port, you can run `yarn run start:fp`

## Share server by LAN

By default dev server is visible on LAN, so you can:

1. check your IP (On Ubuntu `ip route get 8.8.8.8 | awk '{print $NF; exit}'`
`),
1. run `yarn start` 
1. send someone in your LAN, url to `YOUR_IP:3000` 

## Run server and open in default browser

Just run `yarn start --open`

# Build

To build production version just run `yarn run build`, after that, 
in `/dist` directory you have prod version.

**Watch out!**

App main config file (`/app.config.js`) does not exist in directory `/dist`. 
Providing this file is job for you *CI*

## Build feature

1. Vendors script is bundled to own hashed bundle, so if you don't change vendors in next deploy, 
users have this file in cache 
1. App configuration file is not bundled - `/app.config.js`, so you can build once and move this build 
on next deploy stage ((1) test > (2) staging > (3) prod) and create different `/app.config.js` for each instance.

**But Watch out!**

You can still use variables defined by *webpack.DefinePlugin* 
(for example `process.env.NODE_ENV` which can be "*development*" - `yarn start` and "*production*" - `yarn run build`) 
in your code. But, you must remember that `process.env.NODE_ENV === "production"` will be also on 
(1) test, (2) staging and (3) prod deploy stage.

If you want run some code only in (3) prod deploy stage, just create flag in your `/app.config.js`.

## Debug development build

Normaly, delelopment version of build (run by `yarn start`) is served from memory (by webpack-dev-server), 
sometime you might want to see how this served files looked. For this job you can run `yarn run build:dev`, after that
in `/dist` you can see all files served by `yarn start` script

## Linting code

Just run `yarn run lint`. Before each `git commit` all files in git staged will be linted.
If there are any of error, commit will not execute. 
