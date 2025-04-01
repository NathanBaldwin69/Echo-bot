function main() {
    let inputField = document.querySelector("input");
    let outputDiv = document.querySelector("#output"); // Select output div
    let abortController = new AbortController(); // Create a controller for fetch requests

    inputField.addEventListener("change", () => {
        // Abort previous request
        abortController.abort();
        abortController = new AbortController(); // Reset controller

        console.log("Sending:", inputField.value);
        fetchData(inputField.value, abortController.signal, outputDiv);
    });
}

function fetchData(query, signal, outputDiv) {
    fetch("https://echo-bot-shy-sea-4425.fly.dev/echo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: query }),
        signal: signal, // Attach the abort signal
    })
        .then(response => response.json())
        .then(data => {
            console.log("Response:", data);
            outputDiv.textContent = data.text; // Write response to output div
        })
        .catch(error => {
            if (error.name === "AbortError") {
                console.log("Request aborted");
            } else {
                console.error("Error:", error);
                outputDiv.textContent = "Error fetching data.";
            }
        });
}

document.addEventListener("DOMContentLoaded", main);
