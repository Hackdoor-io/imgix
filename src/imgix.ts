export type cardinal =
    "top"
  | "bottom"
  | "left"
  | "right"

export type fullCardinal =
    cardinal
  | "middle"
  | "center"

export type fit =
    "clamp"
  | "clip"
  | "crop"
  | "facearea"
  | "fill"
  | "fillmax"
  | "max"
  | "min"
  | "and"
  | "scale"

export type format =
    "gif"
  | "jp2"
  | "jpg"
  | "json"
  | "jxr"
  | "pjpg"
  | "mp4"
  | "png"
  | "png8"
  | "png32"
  | "webm"
  | "webp"

export default class Imgix {

  /**
   * Adjustments
   */

  bri?:    number;
  con?:    number;
  exp?:    number;
  gam?:    number;
  high?:   number;
  hue?:    number;
  invert?: boolean;
  sat?:    number;
  shad?:   number;
  sharp?:  number;
  usm?:    number;
  usmrad?: number;
  vib?:    number;

  /**
   * Blending
   */

  _blend?:      string;
  _blendAlign?: [fullCardinal];
  _blendAlpha?: number;
  _blendCrop?:  [cardinal | "faces"]

  /**
   * Size
   */
  h?:    number;
  w?:    number;
  ar?:   string;
  _fit?: fit

  /**
   * Format
   */
  fm?: format;
  q?:  number;

  brightness(x: number): Imgix {
    const valid = this.between(-100, 100);

    if (valid(x)) {
      this.bri = x;
      return this;
    }

    throw Error(`Brightness value must be a number between -100 and 100.`);
  }

  contrast(x: number): Imgix {
    const valid = this.between(-100, 100);

    if (valid(x)) {
      this.con = x;
      return this;
    }

    throw Error(`Contrast value must be a number between -100 and 100.`);
  }

  exposure(x: number): Imgix {
    const valid = this.between(-100, 100);

    if (valid(x)) {
      this.exp = x;
      return this;
    }

    throw Error(`Exposure value must be a number between -100 and 100.`);
  }

  gamma(x: number): Imgix {
    const valid = this.between(-100, 100);

    if (valid(x)) {
      this.gam = x;
      return this;
    }

    throw Error(`Gamma value must be a number between -100 and 100.`);
  }

  highlight(x: number): Imgix {
    const valid = this.between(-100, 0);

    if (valid(x)) {
      this.high = x;
      return this;
    }

    throw Error(`Highlight value must be a number between -100 and 0.`);
  }

  hueShift(x: number): Imgix {
    const valid = this.between(0, 359);

    if (valid(x)) {
      this.hue = x;
      return this;
    }

    throw Error(`Hue Shift value must be a number between 0 and 359.`);
  }

  invertColors(x: boolean): Imgix {
    if (x) this.invert = x;
    return this;
  }

  saturation(x: number): Imgix {
    const valid = this.between(-100, 100);

    if (valid(x)) {
      this.sat = x;
      return this;
    }

    throw Error(`Saturation value must be a number between -100 and 100.`);
  }

  shadow(x: number): Imgix {
    const valid = this.between(0, 100);

    if (valid(x)) {
      this.shad = x;
      return this;
    }

    throw Error(`Shadow value must be a number between 0 and 100.`);
  }

  sharpen(x: number): Imgix {
    const valid = this.between(0, 100);

    if (valid(x)) {
      this.sharp = x;
      return this;
    }

    throw Error(`Sharpen value must be a number between 0 and 100.`);
  }

  unsharpMask(x: number): Imgix {
    const valid = this.between(-100, 100);

    if (valid(x)) {
      this.usm = x;
      return this;
    }

    throw Error(`Unsharp Mask value must be a number between -100 and 100.`);
  }

  unsharpMaskRadius(x: number): Imgix {
    const valid = this.between(-100, 100);

    if (valid(x)) {
      this.usmrad = x;
      return this;
    }

    throw Error(`Unsharp Mask Radius value must be a number between -100 and 100.`);
  }

  vibrance(x: number): Imgix {
    const valid = this.between(-100, 100);

    if (valid(x)) {
      this.vib = x;
      return this;
    }

    throw Error(`Vibrance value must be a number between -100 and 100.`);
  }

  blend(x: string): Imgix {
    this._blend = x;
    return this;
  }

  blendAlign(x: [fullCardinal]): Imgix {
    this._blendAlign = x;
    return this;
  }

  blendAlpha(x: number): Imgix {
    const valid = this.between(0, 100);

    if (valid(x)) {
      this._blendAlpha = x;
      return this;
    }

    throw Error(`Blend Alpha value must be a number between 0 and 100.`);
  }

  blendCrop(x: [cardinal | "faces"]): Imgix {
    this._blendCrop = x;
    return this;
  }

  aspectRatio(x: string): Imgix {
    this.ar = x;
    return this;
  }

  fit(x: fit): Imgix {
    this._fit = x;
    return this;
  }

  width(x: number): Imgix {
    this.w = x;
    return this;
  }

  height(x: number): Imgix {
    this.h = x;
    return this;
  }

  format(x: format): Imgix {
    this.fm = x;
    return this;
  }

  quality(x: number): Imgix {
    const valid = this.between(0, 100);

    if (valid(x)) {
      this.q = x;
      return this;
    }

    throw Error(`Quality value must be a number between -100 and 100.`);
  }

  private between(x: number, y: number): (z: number) => boolean {
    return (z: number) => z >= x && z <= y;
  }

}
