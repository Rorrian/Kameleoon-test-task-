import { describe, expect, it } from 'vitest'

import { pluralize } from '..'

describe('pluralize', () => {
  const forms: [string, string, string] = ['test', 'tests', 'tests']

  it('should return correct form for count = 1', () => {
    expect(pluralize(1, forms)).toBe('1 test')
  })
  it('should return correct form for 2 < count < 4', () => {
    expect(pluralize(2, forms)).toBe('2 tests')
  })
  it('should return correct form for count > 4', () => {
    expect(pluralize(5, forms)).toBe('5 tests')
  })

  it('should handle zero correctly', () => {
    expect(pluralize(0, forms)).toBe('0 tests')
  })

  it('should throw error for negative numbers', () => {
    expect(() => pluralize(-1, forms)).toThrow('Count cannot be negative')
  })
})
