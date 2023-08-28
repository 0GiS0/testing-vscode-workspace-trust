# testing-vscode-workspace-trust

This repo helps you demonstrate why the Workspace trust feature of Visual Studio Code is important for your security.

To make this work you have to create a MongoDB database. You can do this locally using Docker:

```bash

# Create a network
docker network create some-network

# Create a MongoDB database
docker run -d --network some-network --name some-mongo \
    -p 27017:27017 \
	-e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
	-e MONGO_INITDB_ROOT_PASSWORD=secret \
	mongo
```

You can test the connection using the following command:

```bash
# connect to mongodb
docker run -it --rm --network some-network mongo \
	mongosh --host some-mongo \
		-u mongoadmin \
		-p secret \
		--authenticationDatabase admin \
		some-db

db.getName();
exit
```

Rename the `.env.example` file to `.env` and fill in the connection string to your MongoDB database.

Then you can run the app using `npm start` and open it in your browser at http://localhost:3000.