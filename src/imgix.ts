import * as qs from 'querystring'

import { cardinal, fullCardinal, fit, format } from './types'

export default class Imgix {
  readonly baseUrl: string

  params: {
    /**
     * Adjustments
     */

    bri?: number
    con?: number
    exp?: number
    gam?: number
    high?: number
    hue?: number
    invert?: boolean
    sat?: number
    shad?: number
    sharp?: number
    usm?: number
    usmrad?: number
    vib?: number

    /**
     * Blending
     */

    blend?: string
    blendAlign?: [fullCardinal]
    blendAlpha?: number
    blendCrop?: [cardinal | 'faces']

    /**
     * Size
     */

    h?: number
    w?: number
    ar?: string
    fit?: fit

    /**
     * Format
     */

    fm?: format
    q?: number
  }

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.params = {}
  }

  get(path: string): string {
    const query = qs.stringify(this.params)
    return `${this.baseUrl}/${path}?${query}`
  }

  brightness(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.bri = x
      return this
    }

    throw Error(`Brightness value must be a number between -100 and 100.`)
  }

  contrast(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.con = x
      return this
    }

    throw Error(`Contrast value must be a number between -100 and 100.`)
  }

  exposure(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.exp = x
      return this
    }

    throw Error(`Exposure value must be a number between -100 and 100.`)
  }

  gamma(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.gam = x
      return this
    }

    throw Error(`Gamma value must be a number between -100 and 100.`)
  }

  highlight(x: number): Imgix {
    const valid = this.between(-100, 0)

    if (valid(x)) {
      this.params.high = x
      return this
    }

    throw Error(`Highlight value must be a number between -100 and 0.`)
  }

  hueShift(x: number): Imgix {
    const valid = this.between(0, 359)

    if (valid(x)) {
      this.params.hue = x
      return this
    }

    throw Error(`Hue Shift value must be a number between 0 and 359.`)
  }

  invert(x: boolean): Imgix {
    if (x) this.params.invert = x
    return this
  }

  saturation(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.sat = x
      return this
    }

    throw Error(`Saturation value must be a number between -100 and 100.`)
  }

  shadow(x: number): Imgix {
    const valid = this.between(0, 100)

    if (valid(x)) {
      this.params.shad = x
      return this
    }

    throw Error(`Shadow value must be a number between 0 and 100.`)
  }

  sharpen(x: number): Imgix {
    const valid = this.between(0, 100)

    if (valid(x)) {
      this.params.sharp = x
      return this
    }

    throw Error(`Sharpen value must be a number between 0 and 100.`)
  }

  unsharpMask(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.usm = x
      return this
    }

    throw Error(`Unsharp Mask value must be a number between -100 and 100.`)
  }

  unsharpMaskRadius(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.usmrad = x
      return this
    }

    throw Error(`Unsharp Mask Radius value must be a number between -100 and 100.`)
  }

  vibrance(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.vib = x
      return this
    }

    throw Error(`Vibrance value must be a number between -100 and 100.`)
  }

  /**
   * ===========================================================================
   * BLENDING
   * ===========================================================================
   */

  blend(x: string): Imgix {
    this.params.blend = x
    return this
  }

  blendAlign(x: [fullCardinal]): Imgix {
    this.params.blendAlign = x
    return this
  }

  blendAlpha(x: number): Imgix {
    const valid = this.between(0, 100)

    if (valid(x)) {
      this.params.blendAlpha = x
      return this
    }

    throw Error(`Blend Alpha value must be a number between 0 and 100.`)
  }

  blendCrop(x: [cardinal | 'faces']): Imgix {
    this.params.blendCrop = x
    return this
  }

  aspectRatio(x: string): Imgix {
    this.params.ar = x
    return this
  }

  fit(x: fit): Imgix {
    this.params.fit = x
    return this
  }

  width(x: number): Imgix {
    this.params.w = x
    return this
  }

  height(x: number): Imgix {
    this.params.h = x
    return this
  }

  format(x: format): Imgix {
    this.params.fm = x
    return this
  }

  quality(x: number): Imgix {
    const valid = this.between(0, 100)

    if (valid(x)) {
      this.params.q = x
      return this
    }

    throw Error(`Quality value must be a number between -100 and 100.`)
  }

  private between(x: number, y: number): (z: number) => boolean {
    return (z: number) => z >= x && z <= y
  }
}
