# get-routes-express

get-routes-express gets all routes from an Express application.

## Installation

```shell
$ npm install @forgdev/get-routes-express
```

## Quick start

First you need to add a reference to get-routes to your application:

```javascript
const { getRoutes } = require('@forgdev/get-routes-express');
```

If you use TypeScript, use the following code instead:

```typescript
import { getRoutes } from '@forgdev/get-routes-express';
```

Then, call the `getRoutes` function with an Express app to get a list of all registered routes:

## Usage

```typescript
import express from 'express';
import { getRoutes } from '@forgdev/get-routes-express';

const app = express();

app.get('/users', (_: any, res: any) => res.send(['Juan']));
app.get('/users/:id', (_: any, res: any) => res.send('Juan'));
app.post('/users', (_: any, res: any) => res.send(['Juan']));

app.get('/roles', (_: any, res: any) => res.send(['admin']));
app.get('/info', (_: any, res: any) => res.send('info'));

app.get('/routes', (_: any, res: any) =>
  res.send(JSON.stringify(getRoutes(app))),
);

app.listen(3000);
```

```json
// GET /routes
[
  {
    "method": "GET",
    "path": "/users"
  },
  {
    "method": "GET",
    "path": "/users/:id"
  },
  {
    "method": "POST",
    "path": "/users"
  },
  {
    "method": "GET",
    "path": "/roles"
  },
  {
    "method": "GET",
    "path": "/info"
  },
  {
    "method": "GET",
    "path": "/routes"
  }
]
```
