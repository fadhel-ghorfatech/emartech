### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_To get started with the project._

1. Clone the repo
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file at application root to set the environment variables and run the server.
```
PORT=<API_PORT>
AUTH_SECRET_KEY=<secret-key>
DB_USERNAME=<postgres-username>
DB_PASS=<postgres-database-password>
DB_NAME=<postgres-database-name>
DB_HOST=<postgres-database-host>
API_BASE_URL=<API_URL>
CLIENT_BASE_URL=<CLIENT_URL>
```
4. Create a database named as test.
5. Start the application
   ```sh
   npm run dev
   ```
<p align="right">(<a href="#top">back to top</a>)</p>

