import Imgix from '../src/imgix'

describe('Testing Imgix Color palette', () => {
  const myImgix = new Imgix('https://example.com')
  const myImage = myImgix
    .width(500)
    .height(600)
    .fit('crop')
    .quality(45)
    .colors(5)
    .palette('css')

  it('Should correctly set color palette', () => {
    expect(myImage.params?.w).toBe(500)
    expect(myImage.params?.h).toBe(600)
    expect(myImage.params?.fit).toBe('crop')
    expect(myImage.params?.q).toBe(45)
    expect(myImage.params?.palette).toBe('css')
    expect(myImage.params.colors).toBe(5)
  })
})
