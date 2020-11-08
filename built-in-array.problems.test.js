describe('URLify a string', () => {
  const urlify = (string) => {
    let newString = ''
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        newString+= '%20'
      } else {
        newString += string[i]
      }
    }
    return newString
  }

  test('tauhida parveen', () => {
    expect(urlify('tauhida parveen')).toBe('tauhida%20parveen')
  })

  test('www.thinkful.com /tauh ida parv een', () => {
    expect(urlify('www.thinkful.com /tauh ida parv een')).toBe('www.thinkful.com%20/tauh%20ida%20parv%20een')
  })
})

describe('filtering an array', () => {
  test('filters values greater than 5', () => {
    const removeValuesGreaterThan5 = (arr) => {
      const newArr = []
      for (let i = 0; i < arr.length ; i++) {
        if (arr[i] < 5) {
          newArr.push(arr[i])
        }
      }
      return newArr
    }

    expect(removeValuesGreaterThan5([3,6,7,8,4])).toEqual([3,4])
  })
})

test('max sum', () => {
  const maxSum = (arr) => {
    let _maxSum = arr[0] + arr[1]
    for (let i = 0; i < arr.length ; i++) {
      for (let j = 0; j < arr.length; j++) {
        const sum = arr[i] + arr[j]
          if (sum > _maxSum) {
            _maxSum = sum
          }
      }
    }

    return _maxSum
  }

  expect(maxSum([4, 6, -3, 5, -2, 1])).toBe(12)
})

test('merge arrays', () => {
  const mergeArrays = (arr1, arr2) => {
    const merged = []
    while (arr1.length + arr2.length > 0) {
      if (!arr1.length) {
        merged.push(arr2.shift())
        continue;
      }

      if (!arr2.length) {
        merged.push(arr1.shift())
        continue;
      }

      if (arr1[0] < arr2[0]) {
        merged.push(arr1.shift())
      } else {
        merged.push(arr2.shift())
      }

    }
    return merged
  }

  expect(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10])).toEqual([1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11])
})











