## Symfony and webpack for live reloading PHP applications

Inspired by [Symfony and webpack for live reloading PHP applications](https://medium.com/imjustsaying/symfony-and-webpack-for-live-reloading-php-applications-fba3180b39ca)

### Run 

- Start php server
```
$ php bin/console server:run 
``` 

- start webpacke 

```
$ npm run dev
```

### Test

Now you can access [http://localhost:8000/lucky/number](http://localhost:8000/lucky/number) to see the output. And when you edit `main.css/base.css/main.js/base.js`, you can find the web browser will auto refresh.
