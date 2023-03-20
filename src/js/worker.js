console.log('worker')

chrome.runtime.onMessage.addListener((message, callback, reply) => {
  // console.log(name)
  // if(Array.isArray(message))
  let name;
  if(Array.isArray(message)) {
    name = message[0]
  }
  else {
    name = message
  }

  switch (name) {
    case 'settings':
      chrome.storage.local.get('settings').then(res => reply(res))
  }
})