import { useMemo } from 'react';
import type { AnimationSvgs, SvgPath } from '../types.js';

export function useMergedPaths(svgs: AnimationSvgs): Record<string, SvgPath> {
  return useMemo(() => {
    const map: Record<string, SvgPath> = {};
    svgs.forEach((svg) =>
      svg.paths.forEach((path) => {
        if (!map[path.id]) map[path.id] = { ...path };
      }),
    );
    return map;
  }, [svgs]);
}
