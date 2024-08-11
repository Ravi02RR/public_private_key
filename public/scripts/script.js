document.getElementById('generate-keys').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/keys/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        document.getElementById('public-key').textContent = data.publicKey;
        document.getElementById('private-key').textContent = data.privateKey;
    } catch (error) {
        console.error('Error generating key pair:', error);
    }
});
