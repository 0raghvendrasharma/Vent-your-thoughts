let username = "";
let messages = [];

function joinChat() {
    username = document.getElementById("username").value;
    if (username.trim() !== "") {
        document.querySelector(".join-screen").style.display = "none";
        document.querySelector(".chat-screen").style.display = "block";

        // Change the text to "Vent Your Thoughts"
        document.querySelector(".logo").innerText = "Vent Your Thoughts";
    }
}

function exitChat() {
    document.querySelector(".join-screen").style.display = "block";
    document.querySelector(".chat-screen").style.display = "none";
    username = "";
}

function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const messageText = messageInput.value.trim();
    
    if (messageText !== "") {
        const message = {
            username: username,
            text: messageText
        };

        messages.push(message);
        displayMessages();
        
        // Clear the input field
        messageInput.value = "";
    }
}

function displayMessages() {
    const messageContainer = document.getElementById("message-container");
    messageContainer.innerHTML = "";

    messages.forEach(message => {
        const messageDiv = document.createElement("div");
        messageDiv.className = "message";
        messageDiv.innerHTML = `<strong>${message.username}:</strong> ${message.text}`;
        messageContainer.appendChild(messageDiv);
    });

    // Scroll to the bottom to show the latest message
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
