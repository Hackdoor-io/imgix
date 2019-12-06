<img src="/misc/cover.png" width="100%" />

[![Build Status](https://travis-ci.com/Hackdoor-io/imgix.svg?branch=master)](https://travis-ci.com/Hackdoor-io/imgix)
![Codecov](https://img.shields.io/codecov/c/github/hackdoor-io/imgix)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@hackdoor/imgix)

Query builder for [Imgix](https://www.imgix.com/). <br />

🚧 **Under active development, highly unstable.** 🚧

# Installation

```bash
npm i -S @hackdoor/imgix
#or
yarn add @hackdoor/imgix
```

# Usage

```ts
import Imgix from "@hackdoor/imgix";

const imgix   = new Imgix("https://my-imgix-server-url.com");
const myImage = imgix.width(300).height(500).fit("crop").get("/my-image-path");

console.log(myImage);
// => "https://my-imgix-server-url.com/my-image-path?fit=crop&w=300&h=500"
```

# Available Methods

Currently available methods. Let's pretend whe have the following **Imgix** instance:

```ts
import Imgix from "@hackdoor/imgix";

const imgix = new Imgix("https://my-endpoint.imgix.net");
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
imgix.contrast(50);
```
#### [Exposure](https://docs.imgix.com/apis/url/adjustment/exp)
A number between `-100` and `100`
```ts
imgix.exposure(50);
```
#### [Gamma](https://docs.imgix.com/apis/url/adjustment/gam)
A number between `-100` and `100`
```ts
imgix.gamma(50);
```
#### [Highlight](https://docs.imgix.com/apis/url/adjustment/high)
A number between `-100` and `0`
```ts
imgix.highlight(-50);
```
#### [Hue Shift](https://docs.imgix.com/apis/url/adjustment/hue)
A number between `0` and `359`
```ts
imgix.hueShift(50);
```
#### [Invert](https://docs.imgix.com/apis/url/adjustment/invert)
A `boolean` value
```ts
imgix.invert(true);
```
#### [Saturation](https://docs.imgix.com/apis/url/adjustment/sat)
A number between `-100` and `100`
```ts
imgix.saturation(50);
```
#### [Shadow](https://docs.imgix.com/apis/url/adjustment/shad)
A number between `0` and `100`
```ts
imgix.shadow(50);
```
#### [Sharpen](https://docs.imgix.com/apis/url/adjustment/sharp)
A number between `0` and `100`
```ts
imgix.sharpen(50);
```

#### [Unsharp Mask](https://docs.imgix.com/apis/url/adjustment/usm)
A number between `-100` and `100`
```ts
imgix.unsharpMask(50);
```

#### [Unsharp Mask Radius](https://docs.imgix.com/apis/url/adjustment/usmrad)
A number between `-100` and `100`
```ts
imgix.unsharpMaskRadius(50);
```

#### [Vibrance](https://docs.imgix.com/apis/url/adjustment/vib)
A number between `-100` and `100`
```ts
imgix.vibrance(50);
```
  
# License
Licensed under the [GPLv3](/LICENSE.md) license.
