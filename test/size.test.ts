import Imgix from '../src/imgix'

describe('Testing Imgix Size', () => {
  const myImgix = new Imgix('https://example.com')
  const myImage = myImgix
    .width(500)
    .height(600)
    .fit('crop')

  it('Should correctly set size', () => {
    expect(myImage.params.w).toBe(500)
    expect(myImage.params.h).toBe(600)
    expect(myImage.params.fit).toBe('crop')
  })
})
