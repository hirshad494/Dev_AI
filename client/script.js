import bot from './assets/bot.svg';
import user from './assets/user.svg';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css'; // Import a CSS theme for highlighting

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    xhtml: false,
});

function loader(element) {
    element.textContent = '';

    loadInterval = setInterval(() => {
        element.textContent += '.';

        if (element.textContent === '....') {
            element.textContent = '';
        }
    }, 300);
}

function typeText(element, text) {
    let index = 0;

    let interval = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 20);
}

function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
}

function chatStripe(isAi, value, uniqueId) {
    return `
    <div class="wrapper ${isAi ? 'ai' : ''}">
      <div class="chat">
        <div class="profile">
          <img 
            src=${isAi ? bot : user} 
            alt="${isAi ? 'bot' : 'user'}" 
          />
        </div>
        <div class="message" id=${uniqueId}></div>
      </div>
    </div>
  `;
}

const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    // user's chatstripe
    chatContainer.innerHTML += chatStripe(false, data.get('prompt'));

    // to clear the textarea input 
    form.reset();

    // bot's chatstripe
    const uniqueId = generateUniqueId();
    chatContainer.innerHTML += chatStripe(true, " ", uniqueId);

    // to focus scroll to the bottom 
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // specific message div 
    const messageDiv = document.getElementById(uniqueId);

    loader(messageDiv);

    try {
        const response = await fetch('https://devai-vyfz.onrender.com/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: data.get('prompt')
            })
        });

        clearInterval(loadInterval);
        messageDiv.innerHTML = " ";

        if (response.ok) {
            const data = await response.json();
            const parsedData = data.message.trim();

            // Use marked to convert markdown to HTML
            const markdownHtml = marked(parsedData);
            messageDiv.innerHTML = markdownHtml;

            // Highlight all code blocks
            messageDiv.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });
        } else {
            const err = await response.text();

            messageDiv.innerHTML = "Something went wrong";
            alert(err);
        }
    } catch (error) {
        clearInterval(loadInterval);
        messageDiv.innerHTML = "Something went wrong";
        alert('Failed to fetch response from the server.');
    }
};

form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        handleSubmit(e);
    }
});
