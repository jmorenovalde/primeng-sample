# PrimengSample

Project to show how a website would be made using components of __PrimeNG__ [[1]](#resources).

This example will try to always have it updated to the most advanced version of Angular and PrimeNG that I can, at the moment the version is changed, I will create a new version and a tag.

## Content

* [Information](#information).
* [Graphics](#graphics).
* [Resources](#resources).

## Information

Since I start with version 11 of _Angular_ and _PrimeNG_, the version is going to be 11.

Besides PrimeNG, I am going to use `@ngx-translate` [[2]](#resources) for the translations of the languages ​​(_Spanish_, _English_ and _Arabic_). You can put more languages, but with those three I think there is plenty. _Arabic_ has been introduced to show the **PrimeNG** quirk that allows us to use `RTL`. The translations have been made with Google Translate.

If you download or clone the project, the first thing you should do is install the components:

```bash
npm install
```

Once it has been installed, if we want to start this demo, you must run:

```bash
npm run start
```

That will bring up the test website at the url `http: // localhost: 4200`.

By default, the website will appear in the browser language. We can change the language with the Language menu, so that if we put the _Arabic_ language, we will see how everything is changed to _RTL_. and if we go back to _Spanish_ or _English_, it will go back to _LTR_.

In order to do this, in the `app.component.html` a` div` has been put in which the direction of the text and the style are indicated so that all the other styles of _PrimeNG_ adapt to the direction of the language.

## Graphics

For the charts page, `Chart.js` has been installed as indicated in the _PrimeNG_ documentation for the charts and they have been configured in the` angular.json` [[3]](#resources). The data of the graphs have been taken from the Open Data page of the Malaga Town Hall [[4]](#resources).

## Resources
[1] [PrimeNG web address](https://www.primefaces.org/primeng/).

[2] [Address of @ngx-translate](http://www.ngx-translate.com/).

[3] [Chart.js Settings in PrimeNG](https://www.primefaces.org/primeng/showcase/#/chart).

[4] [Open Data Page of the Malaga Town Hall](http://datosabierto.malaga.eu/).
