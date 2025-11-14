**Samples**

Sample projects for both TypeScript and JavaScript are provided in the `/samples` folder.


Start the JavaScript sample: 

```bash
cd ./samples/javascript-sample
npm i
npm run dev
```

Or the TypeScript sample: 

```bash
cd ./samples/typescript-sample
npm i
npm run dev
```

The application should now be running on `http://localhost:5173`.

**Backend**

```bash
cd backend
npm i
npm run devStart
```

The server should now be running on `http://localhost:3000`, have fun!

**Database** <br> The application uses MongoDB to store file system changes (folders and images).

1. Install MongoDB if not already installed.
2. Ensure MongoDB service is running (default port: 27017).
3. Create a database named `fileManagerDB` (or as specified in `backend/.env`).

Check `backend/.env.example` for database configuration details.

> Note: `backend` here is just an example implementation of react-file-manager into your
> application. You may use any database and server combination of your choice.