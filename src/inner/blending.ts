import { between } from "./utils";

export type cardinal =
  "top"
  | "bottom"
  | "left"
  | "right"

export type fullCardinal =
  cardinal
  | "middle"
  | "center"

export default class ImgixBlending {

  _blend?:      string;
  _blendAlign?: [fullCardinal];
  _blendAlpha?: number;
  _blendCrop?:  [cardinal | "faces"];

  blend(x: string): ImgixBlending {
    this._blend = x;
    return this;
  }

  blendAlign(x: [fullCardinal]): ImgixBlending {
    this._blendAlign = x;
    return this;
  }

  blendAlpha(x: number): ImgixBlending {
    const valid = between(0, 100);

    if (valid(x)) {
      this._blendAlpha = x;
      return this;
    }

    throw Error(`Blend Alpha value must be a number between 0 and 100.`);
  }

  blendCrop(x: [cardinal | "faces"]): ImgixBlending {
    this._blendCrop = x;
    return this;
  }

}
