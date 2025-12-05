import type { AnimationSvgs, SvgPath } from '../types.js';
import { interpolate } from 'flubber';

export function mergePaths(svgs: AnimationSvgs): Record<string, SvgPath> {
  const map: Record<string, SvgPath> = {};
  svgs.forEach((svg) =>
    svg.paths.forEach((path) => {
      if (!map[path.id]) map[path.id] = { ...path };
    }),
  );
  return map;
}

export function createPathInterpolators(
  svgs: AnimationSvgs,
): Array<Record<string, (t: number) => string>> {
  return svgs.map((current, i) => {
    const next = svgs[(i + 1) % svgs.length];
    const map: Record<string, (t: number) => string> = {};
    const allIds = new Set<string>([
      ...current.paths.map((p) => p.id),
      ...(next?.paths ?? []).map((p) => p.id),
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
          map[id] = () => n.d;
        }
      } catch {
        if (c) map[id] = () => c.d;
        else if (n) map[id] = () => n.d;
      }
    });

    return map;
  });
}

export function createOpacityInterpolators(
  svgs: AnimationSvgs,
): Array<Record<string, (t: number) => number>> {
  return svgs.map((current, i) => {
    const next = svgs[(i + 1) % svgs.length];
    const map: Record<string, (t: number) => number> = {};
    const allIds = new Set<string>([
      ...current.paths.map((p) => p.id),
      ...(next?.paths ?? []).map((p) => p.id),
    ]);

    allIds.forEach((id) => {
      const c = current.paths.find((p) => p.id === id);
      const n = next?.paths.find((p) => p.id === id);

      if (c && n) {
        map[id] = () => 1;
      } else if (c) {
        map[id] = (t) => 1 - t;
      } else if (n) {
        map[id] = (t) => t;
      }
    });

    return map;
  });
}
