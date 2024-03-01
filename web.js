document.getElementById('downloadCV').addEventListener('click', function() {
    var cvPath = './resume.html';
        var link = document.createElement('a');
    link.href = cvPath;
    link.target = '_blank';
    link.download = 'Download CV.pdf'; 

    // Append the anchor element to the document
    document.body.appendChild(link);

    // Trigger a click event to start the download
    link.click();

    // Remove the anchor element from the document
    document.body.removeChild(link);
});
