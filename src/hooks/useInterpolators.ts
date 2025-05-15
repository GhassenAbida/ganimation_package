import { useMemo } from 'react';
import { interpolate } from 'flubber';
import type { AnimationSvgs } from '../types.js';

export function useInterpolators(svgs: AnimationSvgs) {
  return useMemo(() => {
    const total = svgs.length;
    return svgs.map((current, i) => {
      const next = svgs[(i + 1) % total];
      const map: Record<string, (t: number) => string> = {};
      const allIds = new Set<string>([
        ...current.paths.map((p) => p.id),
        ...(next?.paths.map((p) => p.id) || []),
      ]);
      allIds.forEach((id) => {
        const c = current.paths.find((p) => p.id === id);
        const n = next?.paths.find((p) => p.id === id);
        try {
          if (c && n) {
            map[id] = interpolate(c.d, n.d, { maxSegmentLength: 1 });
          } else if (c) {
            map[id] = () => c.d;
          } else if (n) {
            map[id] = interpolate(n.d, n.d, { maxSegmentLength: 1 });
          }
        } catch {
          if (c) map[id] = () => c.d;
        }
      });
      return map;
    });
  }, [svgs]);
}
