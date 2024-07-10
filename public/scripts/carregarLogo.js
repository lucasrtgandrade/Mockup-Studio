document.getElementById('enviarLogo').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the first file (expecting one file)

    if (file.type === "image/png") {
        const reader = new FileReader();

        reader.onload = function(e) {
            const div = document.getElementById('carregarLogo');
            div.innerHTML = ''; // Clear previous content if any
            const img = document.createElement('img'); // Create an img element
            img.src = e.target.result; // Set the source of the image to the file
            div.appendChild(img); // Append the image to the div
        };

        reader.readAsDataURL(file); // Read the file as a data URL
    } else {
        alert('Please upload a valid PNG file.');
    }
});