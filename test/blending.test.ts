import Imgix from '../src/imgix'

describe('Testing Imgix Blending', () => {
  const myImgix = new Imgix('https://example.com')

  it('Should correctly set blending', () => {
    const myImage = myImgix
      .blend('#000')
      .blendAlign(['center'])
      .blendAlpha(50)
      .blendCrop(['faces'])

    expect(myImage).toBeInstanceOf(Imgix)
    expect(myImage.params.blend).toBe('#000')
  })

  it('Should throw an error', () => {
    try {
      const myImage = myImgix.blend('#050505').blendAlpha(5000)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })
})
