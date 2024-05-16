# DGusta

## Tecnologias utilizadas

### Despliegue

-   Docker

### Server

-   Node JS
-   Express
-   Sequelize (ORM)
-   PostgreSQL

### Cliente

-   React

---

## Prerequisitos para la instalación

-   Docker (wsl opcional)
-   Node min 18.19.1v
-   NPM

---

## Packages

El proyecto DGusta se compone de tres paquetes:

-   **/app**: Contiene la parte de cliente de la aplicació y el servidor.

    -   **/client**: Frontend cliente
    -   **/server**: Backend. Api

-   **/widget**: Paquete para generar los archivos para construir el widget.

---

## Deploy

### Deploy en local

Se tienen que deployar los tres paquetes que componen por separado.

#### 1. SERVER

-   1.- Arrancar docker

```
cd server
docker compose down && docker compose up
```

-   2.- Arrancar servidor

```
cd app/server
npx nodemon src/server.js
```

Si todo es correcto el servidor se habra levantado en:

```
https://localhost:9000/
```

-   **PGAdmin**: Administrador del gestor de BBDD Postgre  
    [http://localhost:8082/browser/](http://localhost:8082/browser/)

-   **Uso**
    Podemos acceder a cualquier endpoint, por ejemplo:

```
http://localhost:9000/api/restaurant
```

#### 2. CLIENTE

-   1.- Instalar dependencias

```
cd app/client
npm update
```

-   2.- Arrancar proyecto React

```
npm run dev
```

Si no tenemos arrancado ningún otro proyecto se levantara en:

```
http://localhost:5173/
```

#### 3. WIDGET

-   1.- Instalar dependencias

```
cd widget
npm update
```

-   2.- Arrancar proyecto React

```
npm run dev
```

Si no tenemos arrancado ningún otro proyecto se levantara en:

```
http://localhost:5174/
```

### Deploy en semiproducción

Solamente tendremos que seguir los pasos para deployar la parte de servidor y asegurarnos que se haya levantado en `localhost:9000`.

-   La parte de cliente esta alojada en [https://dgusta.netlify.app/](https://dgusta.netlify.app/)
-   La parte del widget, tendremos que colocar el codigo proporcionado por la aplicación en nuestro espacio web.

---

## Funcionamiento

-   1.- Acceder a la aplicación [https://dgusta.netlify.app/]
-   2.- Contratar un plan, clicando en cualquier de los precios
-   3.- Acceder a la configuración del restaurante `/configuracion/restaurante` y configurar la opciones del restaurante
-   4.- Acceder a la configuración del widget `/configuracion/widget`.
    -   El dominio es requisito indispensable para la utilización del widget y debe coincidir donde se encuentre alojado el widget.
    -   Copiar el código del widget
-   5.- Pegar el código del widget donde se quiera utilizar.
