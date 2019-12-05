import { between } from "./utils";

export default interface ImgixAdjustments {
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
}
