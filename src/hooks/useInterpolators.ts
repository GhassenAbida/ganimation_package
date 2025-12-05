import { useMemo } from 'react';
import type { AnimationSvgs } from '../types.js';
import {
  createPathInterpolators,
  createOpacityInterpolators,
} from '../utils/svgHelpers.js';

export function useInterpolators(svgs: AnimationSvgs) {
  return useMemo(() => {
    return {
      paths: createPathInterpolators(svgs),
      opacities: createOpacityInterpolators(svgs),
    };
  }, [svgs]);
}
