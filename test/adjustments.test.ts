import Imgix from '../src/imgix'

describe('Testing Imgix Adjustments', () => {
  const myImgix = new Imgix('https://example.com')

  it('Should correctly set brightness', () => {
    expect(myImgix.brightness(10)).toBeInstanceOf(Imgix)
  })

  it('Should throw an error', () => {
    try {
      myImgix.brightness(500)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('Should correctly set contrast', () => {
    expect(myImgix.contrast(50)).toBeInstanceOf(Imgix)
  })

  it('Should throw an error', () => {
    try {
      myImgix.contrast(900)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('Should correctly set exposure', () => {
    expect(myImgix.exposure(25)).toBeInstanceOf(Imgix)
  })

  it('Should throw an error', () => {
    try {
      myImgix.exposure(101)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('Should correctly set gamma', () => {
    expect(myImgix.gamma(25)).toBeInstanceOf(Imgix)
  })

  it('Should throw an error', () => {
    try {
      myImgix.gamma(101)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('Should throw an error', () => {
    try {
      myImgix.exposure(101)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('Should correctly set highlight', () => {
    expect(myImgix.highlight(-15)).toBeInstanceOf(Imgix)
  })

  it('Should throw an error', () => {
    try {
      myImgix.highlight(1)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('Should correctly set hueShift', () => {
    expect(myImgix.hueShift(359)).toBeInstanceOf(Imgix)
  })

  it('Should throw an error', () => {
    try {
      myImgix.hueShift(360)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('Should correctly set invertColors', () => {
    expect(myImgix.invertColors(true)).toBeInstanceOf(Imgix)
  })

  it('Should correctly set saturation', () => {
    expect(myImgix.saturation(0)).toBeInstanceOf(Imgix)
  })

  it('Should throw an error', () => {
    try {
      myImgix.saturation(9319)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('Should correctly set shadow', () => {
    expect(myImgix.shadow(1)).toBeInstanceOf(Imgix)
  })

  it('Should throw an error', () => {
    try {
      myImgix.shadow(-20)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('Should correctly set sharpen', () => {
    expect(myImgix.sharpen(9)).toBeInstanceOf(Imgix)
  })

  it('Should throw an error', () => {
    try {
      myImgix.sharpen(-111)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('Should correctly set unsharpMask', () => {
    expect(myImgix.unsharpMask(100)).toBeInstanceOf(Imgix)
  })

  it('Should throw an error', () => {
    try {
      myImgix.unsharpMask(102)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('Should correctly set unsharpMaskRadius', () => {
    expect(myImgix.unsharpMaskRadius(100)).toBeInstanceOf(Imgix)
  })

  it('Should throw an error', () => {
    try {
      myImgix.unsharpMaskRadius(102)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('Should correctly set vibrance', () => {
    expect(myImgix.vibrance(100)).toBeInstanceOf(Imgix)
  })

  it('Should throw an error', () => {
    try {
      myImgix.vibrance(102)
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })
})
