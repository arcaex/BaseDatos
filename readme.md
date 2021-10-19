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
db.Coleccion.updateMany({{"key":"value"}}, {$set: {"keyReemplazo","valueReemplazo"}})

# Para Buscar Registros
https://docs.mongodb.com/manual/tutorial/query-documents/

db.Coleccion.find({"key":"value"})
db.Coleccion.find({"key":"value"},{"key2","value2"})
db.Coleccion.find($or:[{"key":"value"},{"key":"value"}])

# Para Borrar Registros
https://docs.mongodb.com/manual/tutorial/remove-documents/

db.Coleccion.deleteOne({"key":"value"})
db.Coleccion.deleteMany({"key":"value"})
