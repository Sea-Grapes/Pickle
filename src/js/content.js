
// Append the main script to access the window variable
// Set the type to module to allow import statements

const script = document.createElement('script');
script.setAttribute('type', 'module');
script.setAttribute('src', chrome.runtime.getURL('src/js/main.js'));
document.documentElement.append(script);