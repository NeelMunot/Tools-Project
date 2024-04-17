function encode() {
    const inputText = document.getElementById('inputText').value;
    const selectAlgorithm = document.getElementById('selectAlgorithm').value;
    let outputText = '';

    switch (selectAlgorithm) {
        case 'base64':
            outputText = btoa(inputText);
            break;
        case 'url':
            outputText = encodeURIComponent(inputText);
            break;
        case 'rot13':
            outputText = rot13(inputText);
            break;
        // Add cases for other encoding algorithms if needed
    }

    document.getElementById('outputText').value = outputText;
}

function decode() {
    const inputText = document.getElementById('inputText').value;
    const selectAlgorithm = document.getElementById('selectAlgorithm').value;
    let outputText = '';

    switch (selectAlgorithm) {
        case 'base64':
            outputText = atob(inputText);
            break;
        case 'url':
            outputText = decodeURIComponent(inputText);
            break;
        case 'rot13':
            outputText = rot13(inputText);
            break;
        // Add cases for other decoding algorithms if needed
    }

    document.getElementById('outputText').value = outputText;
}

function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}

function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Text copied to clipboard!');
}
