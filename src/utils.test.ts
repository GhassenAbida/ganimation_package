/*
import type { Svg, SvgPath, AnimationSvgs } from '../src/types.js';

const dummyAttrs = {
  width: '10',
  height: '10',
  viewBox: '0 0 10 10',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
};

describe('mergePaths', () => {
  it('collects unique SvgPath entries by id, preserving first occurrence', () => {
    const svgs: AnimationSvgs = [
      {
        filename: 'one',
        svgAttrs: dummyAttrs,
        paths: [
          { id: 'A', d: 'M0', fill: '#000' },
          { id: 'B', d: 'M1', fill: '#111' },
        ],
      },
      {
        filename: 'two',
        svgAttrs: dummyAttrs,
        paths: [
          { id: 'B', d: 'M2', fill: '#222' },
          { id: 'C', d: 'M3', fill: '#333' },
        ],
      },
    ];

    const result = mergePaths(svgs);
    expect(Object.keys(result)).toEqual(expect.arrayContaining(['A', 'B', 'C']));
    expect(result['A']).toEqual({ id: 'A', d: 'M0', fill: '#000' });
    expect(result['B']).toEqual({ id: 'B', d: 'M1', fill: '#111' });
    expect(result['C']).toEqual({ id: 'C', d: 'M3', fill: '#333' });
  });
});

describe('createInterpolators', () => {
  it('returns an array of maps of interpolation functions for each transition', () => {
    const svgs: AnimationSvgs = [
      {
        filename: 'start',
        svgAttrs: dummyAttrs,
        paths: [{ id: 'X', d: 'M0', fill: '#000' }],
      },
      {
        filename: 'end',
        svgAttrs: dummyAttrs,
        paths: [{ id: 'X', d: 'M10', fill: '#000' }],
      },
    ];

    const list = createInterpolators(svgs);
    expect(Array.isArray(list)).toBe(true);
    expect(list).toHaveLength(2);

    const map0 = list[0];
    expect(typeof map0['X']).toBe('function');
    const fn = map0['X']!;
    expect(fn(0)).toBe('M0');
    expect(fn(1)).toBe('M10');
  });
});
*/
