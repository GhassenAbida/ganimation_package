export interface SvgPath {
  id: string;
  d: string;
  fill: string;
  rule?: string;
}

export interface Svg {
  filename: string;
  svgAttrs: {
    width: string;
    height: string;
    viewBox: string;
    fill: string;
    xmlns: string;
  };
  paths: SvgPath[];
}

export type AnimationSvgs = Svg[];

export interface InterpolatedSvgsAnimationProps {
  fill?: string;
  svgs: AnimationSvgs;
  className?: string;
}
