# PrimengSample

Proyecto para mostrar cómo se haría un sitio web usando componentes de __PrimeNG__.

Este ejemplo intentaré tenerlo actualizado siempre a la versión más avanzada de Angular y PrimeNG que pueda, en el momento que se cambie de versión, crearé una nueva versión y un tag.

Como empiezo con la versión 11 de _Angular_ y de _PrimeNG_, la versión va a ser 11.

Además de PrimeNG, voy a utilizar @ngx-translate para las traducciones de los idiomas (español, inglés y árabe). Se ìedem meter más idiomas, pero con esos tres creo que va sobrado. El árabe se ha introducido para mostrar la peculiaridad de **PrimeNG** que nos permite usar `RTL`. Las traducciones son de Google Translate.

Si te descargas o clonas el proyecto proyecto lo primero que debes hacer es instalar los componentes:

```bash
npm install
```

Una vez que se ha instalado, si queremos arrancar esta demo, debes ejecutar:

```bash
npm run start
```

Eso levantará el sitio web de pruebas en la url `http://localhost:4200`.

Por defecto, nos aparecerá la web en el idioma del navegador. Podemos cambiar el idioma con el menú Idioma, de forma que si ponemos el idioma árabe, veremos como se cambia todo a _RTL_. y si volvemos a español o inglés, se pondrá de nuevo en _LTR_.

Para poder hacer esto, en el `app.component.html` se ha puesto una `div` en la que se indica la dirección del texto y el estilo para que todos los demás estilos de _PrimeNG_ se adapten a la dirección del idioma.


