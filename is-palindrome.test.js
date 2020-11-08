const isPalindrome = (string) => {
  string = string.trim()

  if (!string) {
    return false
  }

  for (let i = 0; i < string.length / 2 ; i++) {
      if (string[i] !== string[string.length - 1 - i]) {
        return false
      }
  }

   return true
}
test('', () => {
  expect(isPalindrome('   ')).toBe(false)
})

test('spam', () => {
  expect(isPalindrome('spam')).toBe(false)
})

test('mom', () => {
  expect(isPalindrome('mom')).toBe(true)
})

test('racecar', () => {
  expect(isPalindrome('racecar')).toBe(true)
})
