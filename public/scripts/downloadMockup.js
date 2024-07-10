document.getElementById('downloadMockup').addEventListener('click', function() {
    const exportDiv = document.getElementById('export');
    if (!exportDiv) {
        console.error('The element to export was not found!');
        return;
    }

    const title = document.body.getAttribute('data-title') || 'ExportedImage';
    html2canvas(exportDiv, {
        scale: 2, // Reasonable scale to improve image quality
        useCORS: true, // Enable CORS to handle cross-origin images
        logging: true // Enable logging for better debugging
    }).then(canvas => {
        let link = document.createElement('a');
        link.download = `${title}.png`; // Use the title for the file name
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link); // Optional: Append for debugging
        link.click();
        link.remove(); // Clean up the link element after triggering download
    }).catch(function (error) {
        console.error('Oops, something went wrong!', error);
    });
});