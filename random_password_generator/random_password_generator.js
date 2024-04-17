function generatePassword() {
    const uppercaseCheckbox = document.getElementById('uppercaseCheckbox');
    const lowercaseCheckbox = document.getElementById('lowercaseCheckbox');
    const specialCheckbox = document.getElementById('specialCheckbox');
    const minLengthInput = document.getElementById('minLengthInput');
    const passwordOutput = document.getElementById('passwordOutput');

    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeSpecial = specialCheckbox.checked;
    const minLength = parseInt(minLengthInput.value);

    let characters = '';
    let password = '';

    if (includeUppercase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeLowercase) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeSpecial) {
        characters += '!@#$%^&*()_+-={}[]|;:,.<>?';
    }

    for (let i = 0; i < minLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordOutput.value = password;
}

function copyToClipboard() {
    const passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}
