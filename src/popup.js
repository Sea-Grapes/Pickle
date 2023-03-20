
// const nav = document.querySelector('.nav')
// const activeTab = 0

// const buttons = Array.from(document.querySelectorAll('.nav > button'))
// buttons.clear = function() {
//   buttons.forEach(e => e.classList)
// }

// buttons.forEach(button => {
//   button.addEventListener('click', e => {

//   })
// })

const tabs = new class {
  constructor() {
    this.buttons = Array.from(document.querySelectorAll('.nav > button'))
    this.tabs = Array.from(document.querySelectorAll('.tabs > div'))
    this.currentTab = 2;
    this.buttons.forEach((button, i) => {
      button.addEventListener('click', e => {
        this.clear()
        this.activate(i)
      })
    })

    this.activate(this.currentTab)
  }

  activate(id) {
    this.buttons[id].classList += 'active'
    this.tabs[id].style.display = 'block'
  }

  clear() {
    this.buttons.forEach(button => button.classList = '')
    this.tabs.forEach(tab => tab.style.display = 'none')
  }

  tabForward() {
    let next = this.currentTab + 1
    if(next > this.tabs.length) this
    // this.activate(())
  }
}

addEventListener('keydown', e => {
  if(e.ctrlKey && e.key == 'Tab') {
    // this.activate()
  }
})