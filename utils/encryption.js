// Example for Caesar Cipher
exports.caesarEncrypt = (text, shift) => {
    return text
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + shift))
        .join('');
};

exports.caesarDecrypt = (text, shift) => {
    return text
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) - shift))
        .join('');
};

// Add more encryption methods as needed
