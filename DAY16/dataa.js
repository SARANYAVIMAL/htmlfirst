const userData = {id: 101,name: "sumathi",preferences: {theme: "dark",notifications: true},permissions: ["read", "write"]};

// 2. Use JSON.stringify(userData) to simulate preparing data
const sentDataString = JSON.stringify(userData);
console.log("Sent Data:", sentDataString);

// 3. Define a simple JSON string that a server might send back
const serverResponse = '{"status": "success", "code": 200}';

// 4. Use JSON.parse(serverResponse)
const statusObject = JSON.parse(serverResponse);

// 5. Use an if statement to check statusObject.status
if (statusObject.status === "success") {
    console.log("Data transfer verified!");
}