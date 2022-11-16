chrome.commands.onCommand.addListener((command) => {
  // console.log(`Command "${command}" triggered`);
  if(command !== 'picker') return;
  console.log('picker');
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, 'picker');
  });
});