import app from "./app";

app.listen(app.get('port'), "0.0.0.0");
console.log('Server on port', app.get('port'));