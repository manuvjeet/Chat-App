const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

// Function to create message bubble
function createMessage(message, className) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', className);
    msgDiv.textContent = message;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}

// Handle send button click
sendBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        // Display the user's message
        createMessage(message, 'user');
        
        // Clear the input field
        messageInput.value = '';
        
        // Simulate receiving a reply after a short delay
        setTimeout(() => {
            const botMessage = 'This is a bot reply!'; // Static reply for now
            createMessage(botMessage, 'other');
        }, 1000);
    }
});

// Handle Enter key press for sending message
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});