<img src="/misc/cover.png" width="100%" />

[![Build Status](https://travis-ci.com/Hackdoor-io/imgix.svg?branch=master)](https://travis-ci.com/Hackdoor-io/imgix)
![Codecov](https://img.shields.io/codecov/c/github/hackdoor-io/imgix)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@hackdoor/imgix)
![npm](https://img.shields.io/npm/v/@hackdoor/imgix?color=blue)
![npm](https://img.shields.io/npm/dt/@hackdoor/imgix?logo=npm)

Query builder for [Imgix](https://www.imgix.com). <br />

# Installation

```bash
npm i -S @hackdoor/imgix
#or
yarn add @hackdoor/imgix
```

# Usage

```ts
import Imgix from '@hackdoor/imgix'

const imgix = new Imgix('https://my-imgix-server-url.com')
const myImage = imgix
  .build()
  .width(300)
  .height(500)
  .fit('crop')
  .get('/my-image-path')

console.log(myImage)
// => "https://my-imgix-server-url.com/my-image-path?fit=crop&w=300&h=500"
```

# Methods Legenda

- [Adjustments](#adjustments)
- [Blending](#blending)
- [Size](#size)
- [Format](#format)
- [Rotation](#rotation)
- [Color Palette](#color-palette)

# Available Methods

Currently available methods. Let's pretend whe have the following **Imgix** instance:

```ts
import Imgix from '@hackdoor/imgix'

const imgix = new Imgix('https://my-endpoint.imgix.net')
```

## Converting S3 URL to Imgix Url

```ts
import Imgix from '@hackdoor/imgix'

const imgix = new Imgix('https://my-endpoint.imgix.net')
const myImage = imgix
  .build()
  .width(300)
  .height(500)
  .fit('crop')
  .fromS3('https://my-s3-bucket.s3.amazonaws.com/foo/bar/baz.png')

console.log(myImage)
// => "https://my-endpoint.imgix.net/foo/bar/baz.png?w=500&h=600&fit=crop"
```

## Adjustments

#### [Brightness](https://docs.imgix.com/apis/url/adjustment/bri)

A number between `-100` and `100`

```ts
imgix.brightness(50)
```

#### [Contrast](https://docs.imgix.com/apis/url/adjustment/con)

A number between `-100` and `100`

```ts
imgix.contrast(50)
```

#### [Exposure](https://docs.imgix.com/apis/url/adjustment/exp)

A number between `-100` and `100`

```ts
imgix.exposure(50)
```

#### [Gamma](https://docs.imgix.com/apis/url/adjustment/gam)

A number between `-100` and `100`

```ts
imgix.gamma(50)
```

#### [Highlight](https://docs.imgix.com/apis/url/adjustment/high)

A number between `-100` and `0`

```ts
imgix.highlight(-50)
```

#### [Hue Shift](https://docs.imgix.com/apis/url/adjustment/hue)

A number between `0` and `359`

```ts
imgix.hueShift(50)
```

#### [Invert](https://docs.imgix.com/apis/url/adjustment/invert)

A `boolean` value

```ts
imgix.invert(true)
```

#### [Saturation](https://docs.imgix.com/apis/url/adjustment/sat)

A number between `-100` and `100`

```ts
imgix.saturation(50)
```

#### [Shadow](https://docs.imgix.com/apis/url/adjustment/shad)

A number between `0` and `100`

```ts
imgix.shadow(50)
```

#### [Sharpen](https://docs.imgix.com/apis/url/adjustment/sharp)

A number between `0` and `100`

```ts
imgix.sharpen(50)
```

#### [Unsharp Mask](https://docs.imgix.com/apis/url/adjustment/usm)

A number between `-100` and `100`

```ts
imgix.unsharpMask(50)
```

#### [Unsharp Mask Radius](https://docs.imgix.com/apis/url/adjustment/usmrad)

A number between `-100` and `100`

```ts
imgix.unsharpMaskRadius(50)
```

#### [Vibrance](https://docs.imgix.com/apis/url/adjustment/vib)

A number between `-100` and `100`

```ts
imgix.vibrance(50)
```

## Blending

#### [Blend](https://docs.imgix.com/apis/url/blending/blend)

A string representing an hex color (`#000`) or an image url (`https://example.com/img.jpg`)

```ts
imgix.blend('#F500F0')
```

#### [Blend Align](https://docs.imgix.com/apis/url/blending/blend-align)

One of the following values: `top`, `middle`, `bottom`, `left`, `center`, `right`

```ts
imgix.blendAlign('top')
```

#### [Blend Crop](https://docs.imgix.com/apis/url/blending/blend-crop)

One of the following values: `top`, `middle`, `bottom`, `left`, `center`, `right`, `faces`

```ts
imgix.blendCrop('faces')
```

## Size

#### [Aspect Ratio](https://docs.imgix.com/apis/url/size/ar)

A string in the form of `W:H` (width, height)

```ts
imgix.aspectRatio('16:9')
```

#### [Width](https://docs.imgix.com/apis/url/size/w)

A number

```ts
imgix.width(1920)
```

#### [Width](https://docs.imgix.com/apis/url/size/h)

A number

```ts
imgix.height(1080)
```

## Format

#### [Output Format](https://docs.imgix.com/apis/url/format/fm)

A string, one of: `gif`, `jp2`, `jpg`, `json`, `jxr`, `pjpg`, `mp4`, `png`, `png8`, `png32`, `webm`, `webp`

```ts
imgix.format('png')
```

#### [Output Quality](https://docs.imgix.com/apis/url/format/q)

A number between `0` and `100`

```ts
imgix.quality(75)
```

## Rotation

#### [Flip](https://docs.imgix.com/apis/url/rotation/flip)

A string, one of: `v`, `h` and `vh`

```ts
imgix.flip('v')
```

#### [Orient](https://docs.imgix.com/apis/url/rotation/orient)

A number between `1` and `8` or `90`, `180`, `270`

```ts
imgix.orient(90)
```

#### [Rotation](https://docs.imgix.com/apis/url/rotation/rot)

A number between `0` and `359`

```ts
imgix.rotation(180)
```

## Color Palette

#### [Colors](https://docs.imgix.com/apis/url/color-palette/colors)

A number between `0` and `16`

```ts
imgix.colors(5)
```

#### [Palette](https://docs.imgix.com/apis/url/color-palette/palette)

A string, one of: `css`, `json`

```ts
imgix.palette('json')
```

# License

[!FSF](https://static.fsf.org/nosvn/associate/crm/3861816.png)

Licensed under the [GPLv3](/LICENSE.md) license.
