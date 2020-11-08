const { Array, memory } = require('./array')

const resetMemory = () => {
  memory.memory = new Float64Array(1024);
  memory.head = 0;
}

const printMemory = (start=0, end=start+8) => {
  console.log(memory.memory.slice(start, end))
}

describe('remove method', () => {
  test('removes a new value by shifting old values', () => {
    const array = new Array()
    array.push(1)
    array.push(2)
    array.push(3)
    array.push(4)

    array.remove(1)

    expect(array.get(1)).toBe(3)
  })
})

describe('insert method', () => {
  test('adds a new value by shifting old values', () => {
    resetMemory()
    const array = new Array(2)
    array.push(1)
    array.push(2)
    array.push(3)
    array.push(4)
    array.push(5)

    array.insert(2, 5)

    expect(array.get(2)).toBe(5)
  })

  test('2 adds a new value by shifting old values', () => {
    resetMemory()
    const array = new Array(5)
    array.push(1)
    array.push(2)
    array.push(3)
    array.push(4)
    array.push(5)

    array.insert(1, 5)

    expect(array.get(1)).toBe(5)
  })

  test('increases length by 1', () => {
    resetMemory()
    const array = new Array(2)
    array.push(1)
    array.push(2)

    array.insert(1, 5)

    expect(array.length).toBe(3)
  })
})

describe('push method', ()=> {
  test('should increase length by 1', () => {
    const array = new Array()
    array.push(3)
    expect(array.length).toBe(1)
  })

  test('should be able to retrieve push value from memory', () => {
    const array = new Array()
    const val = 3
    array.push(val)
    expect(array.get(0)).toBe(val)
  })


  test('should resize if pushed past capacity', () => {
    resetMemory()
    const array = new Array(2)
    array.push(3)
    array.push(4)
    array.push(5)
    expect(array.get(array.ptr)).toBe(array.get(array.length-1))
  })
})













