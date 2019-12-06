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

  /**
   * @method get
   * @param  {string} path
   * @returns string
   */

  get(path: string): string {
    const query = qs.stringify(this.params)
    return `${this.baseUrl}/${path}?${query}`
  }

  /**
   * @method brightness
   * @param {number} x
   * @returns {Imgix}
   */

  brightness(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.bri = x
      return this
    }

    throw Error(`Brightness value must be a number between -100 and 100.`)
  }

  /**
   * @method contrast
   * @param {number} x
   * @returns {Imgix}
   */

  contrast(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.con = x
      return this
    }

    throw Error(`Contrast value must be a number between -100 and 100.`)
  }

  /**
   * @method exposure
   * @param {number} x
   * @returns {Imgix}
   */

  exposure(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.exp = x
      return this
    }

    throw Error(`Exposure value must be a number between -100 and 100.`)
  }

  /**
   * @method gamma
   * @param {number} x
   * @returns {Imgix}
   */

  gamma(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.gam = x
      return this
    }

    throw Error(`Gamma value must be a number between -100 and 100.`)
  }

  /**
   * @method highlight
   * @param {number} x
   * @returns {Imgix}
   */

  highlight(x: number): Imgix {
    const valid = this.between(-100, 0)

    if (valid(x)) {
      this.params.high = x
      return this
    }

    throw Error(`Highlight value must be a number between -100 and 0.`)
  }

  /**
   * @method hueShift
   * @param {number} x
   * @returns {Imgix}
   */

  hueShift(x: number): Imgix {
    const valid = this.between(0, 359)

    if (valid(x)) {
      this.params.hue = x
      return this
    }

    throw Error(`Hue Shift value must be a number between 0 and 359.`)
  }

  /**
   * @method invert
   * @param {boolean} x
   * @returns {Imgix}
   */

  invert(x: boolean): Imgix {
    if (x) this.params.invert = x
    return this
  }

  /**
   * @method saturation
   * @param {number} x
   * @returns {Imgix}
   */

  saturation(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.sat = x
      return this
    }

    throw Error(`Saturation value must be a number between -100 and 100.`)
  }

  /**
   * @method shadow
   * @param {number} x
   * @returns {Imgix}
   */

  shadow(x: number): Imgix {
    const valid = this.between(0, 100)

    if (valid(x)) {
      this.params.shad = x
      return this
    }

    throw Error(`Shadow value must be a number between 0 and 100.`)
  }

  /**
   * @method sharpen
   * @param {number} x
   * @returns {Imgix}
   */

  sharpen(x: number): Imgix {
    const valid = this.between(0, 100)

    if (valid(x)) {
      this.params.sharp = x
      return this
    }

    throw Error(`Sharpen value must be a number between 0 and 100.`)
  }

  /**
   * @method unsharpMask
   * @param {number} x
   * @returns {Imgix}
   */

  unsharpMask(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.usm = x
      return this
    }

    throw Error(`Unsharp Mask value must be a number between -100 and 100.`)
  }

  /**
   * @method unsharpMaskRadius
   * @param {number} x
   * @returns {Imgix}
   */

  unsharpMaskRadius(x: number): Imgix {
    const valid = this.between(-100, 100)

    if (valid(x)) {
      this.params.usmrad = x
      return this
    }

    throw Error(`Unsharp Mask Radius value must be a number between -100 and 100.`)
  }

  /**
   * @method vibrance
   * @param {number} x
   * @returns {Imgix}
   */

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

  /**
   * @method blend
   * @param {string} x
   * @returns {Imgix}
   */

  blend(x: string): Imgix {
    this.params.blend = x
    return this
  }

  /**
   * @method blendAlign
   * @param {[fullCardinal]} x
   * @returns {Imgix}
   */

  blendAlign(x: [fullCardinal]): Imgix {
    this.params.blendAlign = x
    return this
  }

  /**
   * @method blendAlpha
   * @param {number} x
   * @returns {Imgix}
   */

  blendAlpha(x: number): Imgix {
    const valid = this.between(0, 100)

    if (valid(x)) {
      this.params.blendAlpha = x
      return this
    }

    throw Error(`Blend Alpha value must be a number between 0 and 100.`)
  }

  /**
   * @method blendCrop
   * @param {[cardinal | 'faces']} x
   * @returns {Imgix}
   */

  blendCrop(x: [cardinal | 'faces']): Imgix {
    this.params.blendCrop = x
    return this
  }

  /**
   * @method aspectRatio
   * @param {string} x
   * @returns {Imgix}
   */

  aspectRatio(x: string): Imgix {
    this.params.ar = x
    return this
  }

  /**
   * @method fit
   * @param {fit} x
   * @returns {Imgix}
   */

  fit(x: fit): Imgix {
    this.params.fit = x
    return this
  }

  /**
   * @method width
   * @param {number} x
   * @returns {Imgix}
   */

  width(x: number): Imgix {
    this.params.w = x
    return this
  }

  /**
   * @method height
   * @param {number} x
   * @returns {Imgix}
   */

  height(x: number): Imgix {
    this.params.h = x
    return this
  }

  /**
   * @method format
   * @param {format} x
   * @returns {Imgix}
   */

  format(x: format): Imgix {
    this.params.fm = x
    return this
  }

  /**
   * @method quality
   * @param {number} x
   * @returns {Imgix}
   */

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
