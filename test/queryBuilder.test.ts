import Imgix from '../src/imgix'

describe('Testing URL generator', () => {
  const myImgix = new Imgix('https://example.com')
  const myImage = myImgix
    .width(500)
    .height(600)
    .fit('crop')
    .get('foo.jpg')

  it('Should return a correct query string', () => {
    expect(myImage).toBe('https://example.com/foo.jpg?w=500&h=600&fit=crop')
  })
})
