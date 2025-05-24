# Legalmate Server

This is the backend for Legalmate, a lawyer-client communication platform. It handles authentication, user management, case management, messaging, and payment processing.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** Bcrypt, JWT
- **Real-time Communication:** Socket.io
- **Payment Gateway:** SSLCommerz

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Bakhtiar2000/Legalmate-Server.git
    ```
2. Navigate into the project directory:
    ```bash
    cd legalmate-server
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root directory and configure your environment variables:
    ```env
    SERVER_PORT=5000
    MONGODB_URL=mongodb+srv://<db_user>:<db_password>@mongodb.net/legalmateDb
    JWT_ACCESS_TOKEN=<access token>
    ```
5. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

The server exposes the following routes:

### **User Routes** (`/users`)
- `POST /` - Register a new user  
- `GET /` - Get all users  
- `GET /email/:email` - Get a user by email  
- `GET /id/:id` - Get a user by ID  

### **Lawyer Routes** (`/attorney`)
- `POST /` - Add a new lawyer  
- `POST /many/` - Add multiple lawyers  
- `GET /` - Get all lawyers  
- `GET /email/:email` - Get a lawyer by email  
- `GET /:id` - Get a lawyer by ID  
- `DELETE /delete/:id` - Delete a lawyer  
- `PATCH /basic` - Update lawyer profile  
- `PATCH /status` - Update lawyer status  
- `PATCH /license` - Update lawyer license  
- `PATCH /document` - Upload a lawyer’s document  
- `PATCH /deleteDoc` - Delete a lawyer’s document  
- `PATCH /review` - Update lawyer reviews  
- `PATCH /education` - Update lawyer education  
- `PATCH /deleteEdu` - Delete lawyer education  
- `PATCH /experience` - Update lawyer experience  
- `PATCH /deleteExp` - Delete lawyer experience  
- `PATCH /awards` - Update lawyer awards  
- `PATCH /deleteAwd` - Delete lawyer awards  
- `PATCH /profilePhoto/:id` - Update lawyer profile photo  

### **Client Routes** (`/client`)
- `POST /` - Register a new client  
- `GET /` - Get all clients  
- `GET /id/:id` - Get a client by ID  
- `GET /email/:email` - Get a client by email  
- `PATCH /status` - Update client status  
- `PATCH /details` - Update client details  
- `PATCH /profilePhoto` - Update client profile photo  

### **Case Routes** (`/case`)
- `POST /` - Create a new case  
- `GET /approved` - Get approved cases  
- `GET /` - Get all cases  
- `GET /id/:id` - Get a case by ID  
- `GET /email/:email` - Get a case by client email  
- `DELETE /delete/:id` - Delete a case  
- `PATCH /update/:id` - Update case details  
- `PATCH /status/:id` - Update case status  

### **Practice Area Routes** (`/practiceArea`)
- `POST /` - Add a new practice area  
- `POST /many` - Add multiple practice areas  
- `GET /` - Get all practice areas  
- `GET /:id` - Get a practice area by ID  

### **Chat Routes** (`/chat`)
- `POST /` - Create a new chat  
- `GET /:userId` - Get chats for a specific user  
- `GET /` - Get all chats  
- `GET /find/:firstId/:secondId` - Find a chat between two users  
- `DELETE /delete/:chatId` - Delete a chat  

### **Message Routes** (`/message`)
- `POST /` - Send a message  
- `GET /` - Get all messages  
- `GET /:chatId` - Get messages from a specific chat  

### **Client Review Routes** (`/clientReview`)
- `POST /` - Add a client review  
- `GET /` - Get all client reviews  
- `PATCH /updateStatus/:id` - Update client review status  

### **Awareness Routes** (`/awareness`)
- `POST /` - Add a new awareness post  
- `POST /many` - Add multiple awareness posts  
- `GET /` - Get all awareness posts  
- `GET /:id` - Get an awareness post by ID 

## Running in Development Mode

For development, use Nodemon for automatic restarts:

```bash
npm install -g nodemon
nodemon index.js
 ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.
