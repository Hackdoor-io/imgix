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

describe('Testing getS3 generator', () => {
  const myImgix = new Imgix('https://example.com')
  const myImage = myImgix
    .width(500)
    .height(600)
    .fit('crop')
    .auto('format')
    .fromS3('https://my-s3-bucket.s3.amazonaws.com/foo/bar/baz.png')

  it('Should return a correct query string', () => {
    expect(myImage).toBe('https://example.com/foo/bar/baz.png?w=500&h=600&fit=crop&auto=format')
  })
})
