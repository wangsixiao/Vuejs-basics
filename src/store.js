const LISTEN_KEY = 'listenkey'
export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem(LISTEN_KEY) || '[]')
  },
  save (items) {
    window.localStorage.setItem(LISTEN_KEY, JSON.stringify(items))
  }
}
