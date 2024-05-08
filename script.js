function changePreview(url) {
    document.getElementById('previewFrame').src = url;
}

function changePreviewFromInput() {
    var url = document.getElementById('urlInput').value;
    if (url) {
        document.getElementById('previewFrame').src = url;
    } else {
        alert('Please enter a valid URL.');
    }
}
