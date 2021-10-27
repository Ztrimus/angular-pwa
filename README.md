# Progressive Web App (PWA)

1. Build angular App
2. Service Worker
3. mainfest.json
4. Deployment
5. Install App on Mobile/Desktop
6. Resource

![Build a PWA](https://camo.githubusercontent.com/b4872b359c3e809aa6644183bc7f289978fc3445/68747470733a2f2f692e696d6775722e636f6d2f3363736f777a6a2e706e67)

Progressive Web Apps provide you with a unique opportunity to deliver a web experience your users will love. Using the latest web features to bring native-like capabilities and reliability, Progressive Web Apps allow what you build to be installed by anyone, anywhere, on any device with a single codebase.
- Progressive Discoverable
- Installable Works Offline

## 1. Build react App
```sh
ng new angular-pwa
```
- refer code in the repo for further understanding

## 2. Service Worker
coming soon

## 3. manifest.json
coming soon

## 4. Deployment
### 4.1. Lighthouse
- chrome Developer Tool Extension.
- Click on "General Report", it'll create an audit of your application according to PWA criteria.
- you will get one 
- if all are okay, you are ready to host your site.
### 4.2. Publish
- Build your project
```sh
ng build --prod
```
- to host/publish your project on the github, go to install ghPage
- do login/signup

## 5. Install App on Mobile/Desktop
- When you open a fully certified and published PWA Application in the browser of desktop/mobile (Check Lighthouse report for it), you will get the option to install that app on desktop/mobile.

## 6. Resource
- [Angular PWA, install and configure](https://medium.com/ngconf/angular-pwa-install-and-configure-858dd8e9fb07)
- [Build your First Angular PWA from Scratch (Angular 6 PWA Tutorial)](https://www.youtube.com/watch?v=othhfZ0mGjU)
