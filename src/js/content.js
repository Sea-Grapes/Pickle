
// Append the main script to access the window variable
// Set the type to module to allow import statements

// const script = document.createElement('script');
// script.setAttribute('type', 'module');
// script.setAttribute('src', chrome.runtime.getURL('src/js/main.js'));
// document.documentElement.append(script);'

console.log('content');

chrome.runtime.onMessage.addListener((req) => {
  addEventListener('keyup', e => {
    const eyeDropper = new EyeDropper();
    eyeDropper.open().then((result) => {
      console.log(result);
    })
  }, { once: true })
});