<img src="/misc/cover.png" width="100%" />

[![Build Status](https://travis-ci.com/Hackdoor-io/imgix.svg?branch=master&style=flat-square)](https://travis-ci.com/Hackdoor-io/imgix)
![Codecov](https://img.shields.io/codecov/c/github/hackdoor-io/imgix?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@hackdoor/imgix?style=flat-square)

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

Status legenda:

| Emoji | Meaning          |
|-------|------------------|
| 🚀    | Deployed         |
| 🚧    | Work in progress |
| ✅    | Tested           |
| ‼️    | Untested         |


## Adjustments

#### Brightness 🚀 ✅
A number between `-100` and `100`
```ts
imgix.brightness(50)
```
#### Contrast 🚀 ✅
A number between `-100` and `100`
```ts
imgix.contrast(50);
```
#### Exposure 🚀 ✅
A number between `-100` and `100`
```ts
imgix.exposure(50);
```
#### Gamma 🚀 ✅
A number between `-100` and `100`
```ts
imgix.gamma(50);
```
#### Highlight 🚀 ✅
A number between `-100` and `0`
```ts
imgix.highlight(-50);
```
#### Hue Shift 🚀 ✅
A number between `0` and `359`
```ts
imgix.hueShift(50);
```
#### Invert 🚀 ✅
A `boolean` value
```ts
imgix.invert(true);
```
#### Saturation 🚀 ✅
A number between `-100` and `100`
```ts
imgix.saturation(50);
```
#### Shadow 🚀 ✅
A number between `0` and `100`
```ts
imgix.shadow(50);
```
#### Sharpen 🚀 ✅
A number between `0` and `100`
```ts
imgix.sharpen(50);
```
  
# License
Licensed under the [GPLv3](/LICENSE.md) license.
