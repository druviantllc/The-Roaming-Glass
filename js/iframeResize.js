function resizeIframe(iframe) {
    // Wait for the iframe content to load fully before resizing
    iframe.onload = function() {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    };
}
