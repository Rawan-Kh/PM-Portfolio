document.addEventListener('DOMContentLoaded', function() {
    const sayHelloButtons = document.querySelectorAll('.say-hello');
    
    sayHelloButtons.forEach(button => {
        button.addEventListener('click', function() {
            const email = 'rawankhsalama@gmail.com';
            const subject = 'Hello from your website';
            const body = 'Hi there,\n\nFeel free to say hello or invite me to a project';
            
            const gmailComposeURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Try to open Gmail first
            const gmailWindow = window.open(gmailComposeURL, '_blank');
            
            // If opening Gmail failed (blocked by popup blocker), fall back to mailto
            if (!gmailWindow || gmailWindow.closed || typeof gmailWindow.closed === 'undefined') {
                const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.location.href = mailtoLink;
            }
        });
    });
});
