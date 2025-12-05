import type { AnimationSvgs } from '../types.js';

// 1. Simple Shape Morphing
export const simpleShapes: AnimationSvgs = [
  {
    filename: 'circle.svg',
    svgAttrs: {
      viewBox: '0 0 100 100',
      width: '100',
      height: '100',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    paths: [
      {
        id: 'shape',
        d: 'M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10',
        fill: '#3B82F6',
      },
    ],
  },
  {
    filename: 'rect.svg',
    svgAttrs: {
      viewBox: '0 0 100 100',
      width: '100',
      height: '100',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    paths: [
      { id: 'shape', d: 'M10,10 L90,10 L90,90 L10,90 Z', fill: '#EF4444' },
    ],
  },
  {
    filename: 'triangle.svg',
    svgAttrs: {
      viewBox: '0 0 100 100',
      width: '100',
      height: '100',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    paths: [{ id: 'shape', d: 'M50,10 L90,90 L10,90 Z', fill: '#10B981' }],
  },
];

// 2. Icon Transition (Hamburger -> X)
export const iconTransition: AnimationSvgs = [
  {
    filename: 'menu.svg',
    svgAttrs: {
      viewBox: '0 0 24 24',
      width: '24',
      height: '24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    paths: [
      { id: 'top', d: 'M3 6h18v2H3V6z', fill: '#1F2937' },
      { id: 'middle', d: 'M3 11h18v2H3v-2z', fill: '#1F2937' },
      { id: 'bottom', d: 'M3 16h18v2H3v-2z', fill: '#1F2937' },
    ],
  },
  {
    filename: 'close.svg',
    svgAttrs: {
      viewBox: '0 0 24 24',
      width: '24',
      height: '24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    paths: [
      { id: 'top', d: 'M4 4l16 16-1.4 1.4L2.6 5.4 4 4z', fill: '#DC2626' }, // Rotated line 1
      // Middle line missing -> fades out
      {
        id: 'bottom',
        d: 'M20 4L4 20l-1.4-1.4L18.6 2.6 20 4z',
        fill: '#DC2626',
      }, // Rotated line 2
    ],
  },
];

// 3. Loading Animation (Multi-path bars)
export const loader: AnimationSvgs = [
  {
    filename: 'frame1.svg',
    svgAttrs: {
      viewBox: '0 0 100 100',
      width: '100',
      height: '100',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    paths: [
      { id: 'b1', d: 'M20 20 h10 v60 h-10 z', fill: '#8B5CF6' },
      { id: 'b2', d: 'M45 40 h10 v20 h-10 z', fill: '#8B5CF6' },
      { id: 'b3', d: 'M70 20 h10 v60 h-10 z', fill: '#8B5CF6' },
    ],
  },
  {
    filename: 'frame2.svg',
    svgAttrs: {
      viewBox: '0 0 100 100',
      width: '100',
      height: '100',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    paths: [
      { id: 'b1', d: 'M20 40 h10 v20 h-10 z', fill: '#EC4899' },
      { id: 'b2', d: 'M45 20 h10 v60 h-10 z', fill: '#EC4899' },
      { id: 'b3', d: 'M70 40 h10 v20 h-10 z', fill: '#EC4899' },
    ],
  },
];

// 4. Organic Blob
export const organicBlob: AnimationSvgs = [
  {
    filename: 'blob1.svg',
    svgAttrs: {
      viewBox: '0 0 200 200',
      width: '200',
      height: '200',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    paths: [
      {
        id: 'blob',
        d: 'M45.7,-76.3C58.9,-69.3,69.1,-59.1,76.3,-47.2C83.5,-35.3,87.7,-21.7,86.4,-8.6C85.1,4.5,78.3,17.1,70.3,28.8C62.3,40.5,53.1,51.3,42.2,59.8C31.3,68.3,18.7,74.5,5.3,75.4C-8.1,76.3,-22.3,71.9,-35.3,64.8C-48.3,57.7,-60.1,47.9,-69.3,35.8C-78.5,23.7,-85.1,9.3,-83.8,-4.5C-82.5,-18.3,-73.3,-31.5,-62.7,-42.2C-52.1,-52.9,-40.1,-61.1,-27.8,-68.6C-15.5,-76.1,-2.9,-82.9,8.9,-81.4L20.7,-79.9',
        fill: '#F59E0B',
      },
    ],
  },
  {
    filename: 'blob2.svg',
    svgAttrs: {
      viewBox: '0 0 200 200',
      width: '200',
      height: '200',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    paths: [
      {
        id: 'blob',
        d: 'M38.9,-64.4C50.8,-58.6,61,-50.2,69.3,-39.9C77.6,-29.6,84,-17.4,82.8,-5.8C81.6,5.8,72.8,16.8,63.9,26.8C55,36.8,46,45.8,35.8,53.3C25.6,60.8,14.2,66.8,1.9,63.5C-10.4,60.2,-23.6,47.6,-35.8,37.3C-48,27,-59.2,19,-64.6,8.2C-70,-2.6,-69.6,-16.2,-63.1,-27.8C-56.6,-39.4,-44,-49,-31.7,-54.6C-19.4,-60.2,-7.4,-61.8,3.8,-68.4L15,-75',
        fill: '#F59E0B',
      },
    ],
  },
];
