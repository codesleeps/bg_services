// Critical JavaScript that needs to run immediately
function loadDeferredStyles() {
  const addStylesNode = document.getElementById('deferred-styles');
  if (addStylesNode) {
    const replacement = document.createElement('div');
    replacement.innerHTML = addStylesNode.textContent;
    document.body.appendChild(replacement);
    addStylesNode.remove();
  }
}

// Load non-critical resources
function loadNonCriticalResources() {
  // Load main stylesheet
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'styles.css';
  document.head.appendChild(stylesheet);
  
  // Load main script with defer
  const script = document.createElement('script');
  script.src = 'script.js';
  script.defer = true;
  document.head.appendChild(script);
}

// Run critical functions
if (['interactive', 'complete'].includes(document.readyState)) {
  loadDeferredStyles();
  loadNonCriticalResources();
} else {
  window.addEventListener('DOMContentLoaded', () => {
    loadDeferredStyles();
    loadNonCriticalResources();
  });
}
