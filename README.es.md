# PrimengSample

Proyecto para mostrar cómo se haría un sitio web usando componentes de __PrimeNG__ [[1]](#recursos).

Este ejemplo intentaré tenerlo actualizado siempre a la versión más avanzada de Angular y PrimeNG que pueda, en el momento que se cambie de versión, crearé una nueva versión y un tag.

## Contenido

* [Inforamación](#información).
* [Gráficas](#gráficas).
* [Recursos](#recursos).

## Información

Como empiezo con la versión 11 de _Angular_ y de _PrimeNG_, la versión va a ser 11.

Además de PrimeNG, voy a utilizar `@ngx-translate` [[2]](#recursos) para las traducciones de los idiomas (_español_, _inglés_ y _árabe_). Se pueden meter más idiomas, pero con esos tres creo que va sobrado. El _árabe_ se ha introducido para mostrar la peculiaridad de **PrimeNG** que nos permite usar `RTL`. Las traducciones se han realizado con de Google Translate.

Si te descargas o clonas el proyecto proyecto lo primero que debes hacer es instalar los componentes:

```bash
npm install
```

Una vez que se ha instalado, si queremos arrancar esta demo, debes ejecutar:

```bash
npm run start
```

Eso levantará el sitio web de pruebas en la url `http://localhost:4200`.

Por defecto, nos aparecerá la web en el idioma del navegador. Podemos cambiar el idioma con el menú Idioma, de forma que si ponemos el idioma _árabe_, veremos como se cambia todo a _RTL_. y si volvemos a _español_ o _inglés_, se pondrá de nuevo en _LTR_.

Para poder hacer esto, en el `app.component.html` se ha puesto una `div` en la que se indica la dirección del texto y el estilo para que todos los demás estilos de _PrimeNG_ se adapten a la dirección del idioma.

## Gráficas

Para la página de las gráficas, se ha instaldo `Chart.js` tal y como se indica en la documentación de _PrimeNG_ de las gráficas y se han configurado en el `angular.json` [[3]](#recursos). Los datos de las gráficas se han sacado de la página de Datos Abiertos del Ayuntamiento de Málaga [[4]](#recursos).


## Recursos
[1] [Dirección web de PrimeNG](https://www.primefaces.org/primeng/).

[2] [Dirección de @ngx-translate](http://www.ngx-translate.com/).

[3] [Configuración de Chart.js en PrimeNG](https://www.primefaces.org/primeng/showcase/#/chart).

[4] [Página de Datos Abiertos del Ayuntamiento de Málaga](http://datosabiertos.malaga.eu/).
