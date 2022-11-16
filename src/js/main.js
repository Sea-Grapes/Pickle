const eyeDropper = new EyeDropper();

window.addEventListener('keydown', e => {
  if(e.key === '~' && e.ctrlKey && e.shiftKey) {
    eyeDropper.open().then((result) => {
      console.log(result);
      navigator.clipboard.writeText(result.sRGBHex);
    }).catch((e) => { })
  }
})