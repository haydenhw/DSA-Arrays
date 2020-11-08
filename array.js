const Memory = require('./memory')
const memory = new Memory()

const RESIZE_MULTIPLIER  = 2;


class Array {
  constructor(capacity=8) {
    this.capacity = capacity
    this.length = 0
    this.ptr = memory.allocate(capacity)
  }

  _resize(size) {
    const oldPtr = this.ptr
    this.ptr = memory.allocate(size)
    memory.copy(this.ptr, oldPtr, this.length)
    this.capacity = size
  }

  push(val) {
    if (this.length === this.capacity) {
      this._resize(this.capacity * RESIZE_MULTIPLIER)
    }

    memory.set(this.ptr + this.length, val)
    this.length++
  }

  get(index) {
    return memory.get(this.ptr + index)
  }

  insert(index, val) {
    if (this.length === this.capacity) {
      this._resize(this.capacity * RESIZE_MULTIPLIER)
    }

    // copy values to the right of index one over
    memory.copy(this.ptr + index + 1, this.ptr + index + 1, this.length - index)
    memory.set(this.ptr + index, val)
    this.length++
  }

  remove(index) {
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - (index + 1))
  }
}

module.exports = { Array, memory }
