# umedev

## References

- Typescript: <https://vuejs.org/v2/guide/typescript.html>
- Vuetify: <https://vuetifyjs.com/en/>
- Firebase: <https://firebase.google.com/>
- Vuefire: <https://vuefire.vuejs.org/vuefire/>
- Firebase functions samples: <https://github.com/firebase/functions-samples>

## Project setup

Install [Firebase cli](https://firebase.google.com/docs/cli), e.g.

```bash
npm install -g firebase-tools
```

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your tests

```bash
npm run test
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Deploy to firebase

Make sure you have logged in to firebase (`firebase login`) then run

1. `npm run build`
2. `firebase deploy`
3. `firebase deploy --only hosting`
