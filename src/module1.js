
class Module1 {
  constructor(a, b) {
    this.a = a
    this.b = b
    this.array = [a, b]
  }

  print() {
    console.log(this.a, this.b, this.array.includes(this.a))
  }
}
module.exports = Module1
