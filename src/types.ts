export type cardinal = 'top' | 'bottom' | 'left' | 'right'

export type fullCardinal = cardinal | 'middle' | 'center'

export type fit =
  | 'clamp'
  | 'clip'
  | 'crop'
  | 'facearea'
  | 'fill'
  | 'fillmax'
  | 'max'
  | 'min'
  | 'and'
  | 'scale'

export type format =
  | 'gif'
  | 'jp2'
  | 'jpg'
  | 'json'
  | 'jxr'
  | 'pjpg'
  | 'mp4'
  | 'png'
  | 'png8'
  | 'png32'
  | 'webm'
  | 'webp'

export type auto = 'format' | 'compress' | 'enhance' | 'redeye'

export type flip = 'v' | 'h' | 'hv'

export type orient = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 90 | 180 | 270

export type palette = 'css' | 'json'
