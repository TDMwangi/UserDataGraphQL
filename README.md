# User Data GraphQL

Creates an Apollo GraphQL endpoint to manipulate fake user data.

## _Stack_

Front end
ReactJS
Apollo client
GraphQL
Back end
NodeJS
ExpressJS
GraphQL
Express-GraphQL

## _How to run:_

Start a local copy of Redis

```sh
redis-server --port 6380
redis-cli -p 6380
keys *
get dspace_legacy_offset
```

Start a local copy of OpenSearch

```sh
cd opensearch-server
./opensearch-tar-install.sh
cd opensearch-dashboard
./bin/opensearch-dashboards
```

Navigate to

- [http://localhost:5601][df1]
- Username (admin)
- Password (admin)

Startup the project

```sh
npm run build
npm start
```
