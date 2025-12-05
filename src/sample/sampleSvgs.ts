import type { AnimationSvgs } from '../types.js';

export const svgs: AnimationSvgs = [
  {
    filename: 'circle.svg',
    svgAttrs: {
      width: '100',
      height: '100',
      viewBox: '0 0 100 100',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    paths: [
      {
        id: 'shape',
        d: 'M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10', // Circle
        fill: '#FFD259',
      },
    ],
  },
  {
    filename: 'rect.svg',
    svgAttrs: {
      width: '100',
      height: '100',
      viewBox: '0 0 100 100',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    paths: [
      {
        id: 'shape',
        d: 'M10,10 L90,10 L90,90 L10,90 Z', // Rectangle
        fill: '#FFD259',
      },
    ],
  },
  {
    filename: 'triangle.svg',
    svgAttrs: {
      width: '100',
      height: '100',
      viewBox: '0 0 100 100',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    paths: [
      {
        id: 'shape',
        d: 'M50,10 L90,90 L10,90 Z', // Triangle
        fill: '#FFD259',
      },
    ],
  },
];
