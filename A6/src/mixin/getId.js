export default {
  methods: {
    getId() {
      const length = 30
      return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
    }
  }
}
