
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
        this.currentTab = i
      })
      button.setAttribute('tabindex', '-1')
    })

    addEventListener('keydown', e => {
      if(e.key == 'Tab') this.currentTab += e.shiftKey ? -1 : 1
    })

    const [picker, history, settings] = this.tabs
    const options = settings.querySelectorAll('input[type=checkbox]')
    options.forEach(check => check.addEventListener('change', e => {
      console.log(check)
    }))
  }

  #current;
  set currentTab(id) {
    this.#current = (id > this.tabs.length - 1) ? 0 : (id < 0) ? this.tabs.length - 1 : id

    this.buttons.forEach(button => button.classList = '')
    this.tabs.forEach(tab => tab.style.display = 'none')
    
    this.buttons[this.currentTab].classList += 'active'
    this.tabs[this.currentTab].style.display = 'block'
  }

  get currentTab() {
    return this.#current
  }
}