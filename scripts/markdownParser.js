document.addEventListener("DOMContentLoaded", function () {
    fetch('/pages/sample.md') // Ensure the path to your Markdown file is correct
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = marked(data); // Ensure marked.js is included
        })
        .catch(error => console.error('Error fetching Markdown:', error));
});
