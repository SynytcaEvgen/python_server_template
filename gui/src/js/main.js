document.addEventListener('DOMContentLoaded', init);

function init() {
    let appContainer = document.querySelector('app-container');
    

    function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    };


 
    function renderErrorToMessage() {
        const errorMessage = "Sorry AI server is buisy try later."
        convWrapper.insertBefore(errorMessage, convWrapper.nextElementSibling);
    }
}