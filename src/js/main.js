
// Main script

// NOTICE:
// - This file has access to the window variable
// - This file has access to import statements
const eyeDropper = new EyeDropper();
const abortController = new AbortController();

window.addEventListener('keydown', e => {
  if(e.key === '~' && e.ctrlKey && e.shiftKey) {
    eyeDropper.open({ signal: abortController.signal }).then((result) => {
      console.log(result);
    }).catch((e) => { })
  }
  // if(e.key === 'Escape') abortController.abort();
})