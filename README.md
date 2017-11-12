# Posting application

Posting application is <b>PWA</b>, is based on <b>NodeJS</b> & <b>Express</b> and throw data by using <b>body-parser</b> & <b>VueJS</b>, and data stored in <b>Google - Firebase</b>, project components cached in browser storage by using <b>Service worker</b>, it's simple app show you how to use Service worker with other Javascript different components.

# installing

```
git clone https://github.com/moumen-soliman/Posting-app.git 

npm install
```

to run server 
`node server`

follow run at 
`http://localhost:8880/`

to create post 
`http://localhost:8880/create`

to run service worker and start caching use 
`http://localhost:8880/js/sw`

to change cache version
``` var staticCacheName = 'posting-v2'; ``` to ```var staticCacheName = 'posting-v3';```

# include
- NodeJS
- Express
- VueJS
- Firebase
- body-parser
- Service worker
- Polyfills
