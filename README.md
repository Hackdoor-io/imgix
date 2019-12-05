<img src="/misc/cover.png" width="100%" />

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

# License
Licensed under the [GPLv3](/LICENSE.md) license.
