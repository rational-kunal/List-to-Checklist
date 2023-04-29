import { isURLPathSimilar } from '../URLUtils'

describe('isURLPathSimilar', () => {
  it('should return true if the URLs are identical', () => {
    const aURL = 'https://www.example.com/foo/bar'
    const bURL = 'https://www.example.com/foo/bar'

    expect(isURLPathSimilar(aURL, bURL)).toBe(true)
  })

  it('should return true if the URLs are identical, even if they have trailing slashes and queries', () => {
    const aURL = 'https://www.example.com/foo/bar/?foo=bar'
    const bURL = 'https://www.example.com/foo/bar'

    expect(isURLPathSimilar(aURL, bURL)).toBe(true)
  })

  it('should return false if the URL host names are different', () => {
    const aURL = 'https://www.example.com/foo/bar'
    const bURL = 'https://www.example1.com/foo/bar'

    expect(isURLPathSimilar(aURL, bURL)).toBe(false)
  })

  it('should return false if the URL paths are different', () => {
    const aURL = 'https://www.example.com/foo/bar'
    const bURL = 'https://www.example.com/foo/bar/baz'

    expect(isURLPathSimilar(aURL, bURL)).toBe(false)
  })
})
