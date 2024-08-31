import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 8080;

const server = app.listen(port, () => {
    console.log("Server is listening...");
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
    ws.on("message", (data) => {
        console.log("Data from client:", data.toString());
        ws.send("Thanks buddy!");
    });
});

/*
// Grab the tools we need
import express from "express";
import { WebSocketServer } from "ws";

// Create a new app (like setting up a lemonade stand)
const app = express();
// Pick a number for our app's address
const port = 8080;

// Start our app and make it listen for customers
const server = app.listen(port, () => {
    console.log("Hey, our lemonade stand is open for business!");
});

// Set up a special messaging system on top of our lemonade stand
const wss = new WebSocketServer({ server });

// When someone connects to our messaging system...
wss.on("connection", (ws) => {
    console.log("Woohoo! Someone joined our chat!");

    // If they send us a message...
    ws.on("message", (data) => {
        // Let's see what they said
        console.log("Our friend says:", data.toString());

        // Send them a friendly message back
        ws.send("Thanks buddy!");
    });

    // If they leave the chat...
    ws.on("close", () => {
        console.log("Aw, someone left the chat.");
    });
});



// Import required modules
import express from "express";
import { WebSocketServer } from "ws";

// Create an Express application
const app = express();
// Define the port number for the server
const port = 8080;

// Start the Express server and make it listen on the specified port
const server = app.listen(port, () => {
    console.log("Server is listening on port", port);
});

// Create a new WebSocket server instance, attaching it to the Express server
const wss = new WebSocketServer({ server });

// Event listener for new WebSocket connections
wss.on("connection", (ws) => {
    console.log("New WebSocket connection established");

    // Event listener for incoming messages from the client
    ws.on("message", (data) => {
        // Convert the received data (usually a Buffer) to a string and log it
        console.log("Data received from client:", data.toString());

        // Send a response back to the client
        ws.send("Thanks buddy!");
    });

    // Event listener for when the WebSocket connection is closed
    ws.on("close", () => {
        console.log("WebSocket connection closed");
    });
});

*/