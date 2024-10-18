document.addEventListener('DOMContentLoaded', init);

async function init() {
    let appContainer = document.querySelector('.app-container');
    const messageContainer = document.createElement('p');
    const title = document.createElement('h1');
    const errorMessage = document.createElement('h1');
    const url = 'http://127.0.0.1:8000/';

    const result = await fetch(url)
        .then(response => response.json())
        .then(data => data)
        .catch((err) => {
            console.error(err);
            errorMessage.innerHTML = "Ups... server doesn't work";
            appContainer.appendChild(errorMessage);
        });
    title.innerHTML = result.title;
    messageContainer.innerHTML = result.message;
    appContainer.appendChild(title);
    appContainer.appendChild(messageContainer);

    function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    };

    function renderErrorToMessage() {
        const errorMessage = "Sorry AI server is buisy try later."
        convWrapper.insertBefore(errorMessage, convWrapper.nextElementSibling);
    }
}