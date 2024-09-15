# Backend Programming Assignment

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/mesubasi/backend-programming-assignment.git .
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm start
   ```

4. **Make a request to the API (Postman etc. tools):**

   ```sh
   HTTP Method : GET
   ----------------------------------------------------------------------
   Request Url: http://localhost:3000/queries/count/2015
   Response:
   {
    "count": 1623420
   }
   ----------------------------------------------------------------------
   Request Url: http://localhost:3000/queries/count/2015-08-01
   Response:
   {
    "count": 432605
   }
   ----------------------------------------------------------------------
   Request Url: http://localhost:3000/queries/count/2015-08-03 23:59:06
   Response:
   {
    "count": 41
   }
   ```
