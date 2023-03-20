console.log('worker')

let settings = {
  enabled: true
}

chrome.storage.local.get('settings').then(data => {
  settings = {...settings, ...data}
})

chrome.runtime.onMessage.addListener(([name, ...args], callback, reply) => {
  // console.log(name)
  // if(Array.isArray(message)

  switch (name) {
    case 'settings':
      if(args.length) {
        settings = { ...settings, ...args[0] };
        chrome.storage.local.set('settings', settings)
      }
      else chrome.storage.local.get('settings').then(res => { reply(res)})
  }

})