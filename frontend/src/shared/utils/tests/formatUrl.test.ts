import { describe, expect, it } from 'vitest'

import { formatUrl } from '..'

describe('formatUrl', () => {
  it('should remove "https://" and "www" prefix from URL', () => {
    expect(formatUrl('https://www.example.com')).toBe('example.com')
    expect(formatUrl('https://example.com')).toBe('example.com')
    expect(formatUrl('https://example.com/some-path')).toBe(
      'example.com/some-path',
    )
  })
  it('should remove "http://" and "www" prefix from URL', () => {
    expect(formatUrl('http://www.example.com')).toBe('example.com')
    expect(formatUrl('http://example.com')).toBe('example.com')
    expect(formatUrl('http://example.com/some-path')).toBe(
      'example.com/some-path',
    )
  })
  it('should remove "www" prefix from URL without protocol', () => {
    expect(formatUrl('www.example.com')).toBe('example.com')
    expect(formatUrl('www.example.com/some-path')).toBe('example.com/some-path')
  })

  it('should return original URL if it does not contain protocol and "www" prefix', () => {
    expect(formatUrl('example.com')).toBe('example.com')
    expect(formatUrl('example.com/some-path')).toBe('example.com/some-path')
  })

  it('should handle URL with inserts "www" prefix or "http/https" in the middle of URL', () => {
    expect(formatUrl('https://www.http.example.com')).toBe('http.example.com')
    expect(formatUrl('https://www.example.http.com')).toBe('example.http.com')

    expect(formatUrl('https://www.example.www.com')).toBe('example.www.com')
    expect(formatUrl('https://www.www.example.com')).toBe('www.example.com')
  })

  it('should return empty string for if URL is empty', () => {
    expect(formatUrl('')).toBe('')
  })

  it('should handle invalid input', () => {
    expect(formatUrl('123')).toBe('123')
    expect(formatUrl('!@#$%^&*')).toBe('!@#$%^&*')
  })
})
