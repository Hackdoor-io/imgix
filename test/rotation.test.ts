import Imgix from '../src/imgix'

describe('Testing Imgix Size', () => {
  const myImgix = new Imgix('https://example.com')
  const myImage = myImgix
    .flip('h')
    .orient(2)
    .rotation(50)

  it('Should correctly set size', () => {
    expect(myImage.params?.flip).toBe('h')
    expect(myImage.params?.orient).toBe(2)
    expect(myImage.params?.rot).toBe(50)
  })
})
