function main() {
    let inputField = document.querySelector("input");

    inputField.addEventListener("change", () => {
        console.log(inputField.value); 
        fetchData(inputField.value);
    });
}

function fetchData(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
}

document.addEventListener("DOMContentLoaded", main);
