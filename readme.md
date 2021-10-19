# Comandos MongoDB

# Enlace MongoDB Community Server
https://www.mongodb.com/try/download/community?tck=docs_server

# Enlace Compass
https://docs.mongodb.com/compass/current/install/

# Crear una Colección
db.NombreColecciónNueva.insertOne({CualquierObjeto})

# Para insertar Registros
https://docs.mongodb.com/manual/tutorial/insert-documents/

db.Coleccion.insertOne({Objeto})
db.Coleccion.insertMany([{Objeto},{Objeto},{Objeto}])

# Para hacer update de Registros
https://docs.mongodb.com/manual/tutorial/update-documents/

db.Coleccion.updateOne({{"key":"value"}}, {$set: {"keyReemplazo","valueReemplazo"}})
db.Coleccion.updateMany({{"key":{filtro}}}, {$set: {"keyReemplazo","valueReemplazo"}})

# Para Buscar Registros
https://docs.mongodb.com/manual/tutorial/query-documents/

db.Coleccion.find({"key":"value"})
db.Coleccion.find({"key":"value"},{"key2","value2"})
db.Coleccion.find($or:[{"key":"value"},{"key":"value"}])

# Para Borrar Registros
https://docs.mongodb.com/manual/tutorial/remove-documents/

db.Coleccion.deleteOne({"key":"value"})
db.Coleccion.deleteMany({"key":{ filtro }})

# Operadores para Filtros
$eq	Encuentra los valores que son iguales al valor de búsqueda
$gt	Encuentra los valores que son mayores al valor de búsqueda
$gte	Encuentra los valores que son mayores o iguales al valor de búsqueda
$in	Encuentra cualquiera de los valores que coinciden con los elementos del array de búsqueda.
$lt	Encuentra los valores que son menores al valor de búsqueda
$lte	Encuentra los valores que son menores o iguales al valor de búsqueda.
$ne	Encuentra los valores que no son iguales al valor de búsqueda.
$nin	Encuentra cualquiera de los valores que no coinciden con los elementos del array de búsqueda.
