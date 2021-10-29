# Geocoder API

Express api to manage user using Google Geodecoder.

## Run app manualy

    $ turn on a MySql server in the port 3306
    $ run the Script.sql located in the interfaces folder in your sql console
    $ npm i
    $ export G_KEY=your Google Api Key
    $ npm run dev

## Run app with docker

    $ docker build -t express-geocoder-api:latest .
	$ docker-compose up -d

### Endpoints:
<details>
<summary>1. Create user</summary>
	URL : `http://localhost:5000/users/new`
    <br>
    Method : `POST`	
    <br>
    Notes : 
    <br/>
      <ul>
          <li>You can add the 'simulate' param to simulate the request if you can't use a billing account. Example: `http://localhost:5000/users/new?simulate=1`</li>
      </ul>
    <br>
    Request body example : 
    <pre>
    {
        "usuario": {
            "nombre": "ejemplo", 
            "apellido": "ejemplo", 
            "direccion": "calle falsa 123", 
            "ciudad": "ejemplo"
        }
    }
    </pre>
    <br>
    Response body example :     

    {
        "id": 2,
        "nombre": "ejemplo",
        "apellido": "ejemplo",
        "direccion": "calle falsa 123",
        "ciudad": "ejemplo",
        "longitud": 37.4224764,
        "latitud": -122.0842499,
        "estadogeo": "A"
    }    
</details>

<details>
	<summary>2. Get users list</summary>
	URL : `http://localhost:5000/users`
    <br>
    Method : `GET`
    <br>
    Response body example :     

    [
        {
            "id": 1,
            "nombre": "sdas S S Sdsds33",
            "apellido": "sadds",
            "direccion": "saddas",
            "ciudad": "dsasds",
            "longitud": 37.4224764,
            "latitud": -122.0842499,
            "estadogeo": "A"
        },
        {
            "id": 2,
            "nombre": "ejemplo",
            "apellido": "ejemplo",
            "direccion": "calle falsa 123",
            "ciudad": "ejemplo",
            "longitud": 37.4224764,
            "latitud": -122.0842499,
            "estadogeo": "A"
        }
    ]
</details>

<details>
	<summary>3. Get user</summary>
	URL : `http://localhost:5000/users/${id}`
    <br>
    Method : `GET`
    <br>    
    Response body example :     

    {
        "id": 2,
        "nombre": "ejemplo",
        "apellido": "ejemplo",
        "direccion": "calle falsa 123",
        "ciudad": "ejemplo",
        "longitud": 37.4224764,
        "latitud": -122.0842499,
        "estadogeo": "A"
    }
</details>

<details>
	<summary>4. Delete user</summary>
	URL : `http://localhost:5000/users/${id}`
    <br>
    Method : `DELETE`
    <br>
    Response body example :     

    {
        "msg": "El usuario ha sido eliminado con exito!"
    }
</details>