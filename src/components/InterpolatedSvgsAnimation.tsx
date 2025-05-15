'use client';

import React from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState, useRef, useCallback } from 'react';
import { twMerge } from 'tailwind-merge';
import type { InterpolatedSvgsAnimationProps } from '../types.js';
import { useMergedPaths } from '../hooks/useMergedPaths.js';
import { useInterpolators } from '../hooks/useInterpolators.js';

export function InterpolatedSvgsAnimation({
  fill,
  svgs,
  className,
}: InterpolatedSvgsAnimationProps) {
  const progress = useMotionValue(0);
  const [currentPaths, setCurrentPaths] = useState(svgs[0]?.paths || []);
  const initialized = useRef(false);
  const viewBox = svgs[0]?.svgAttrs?.viewBox || '0 0 100 100';
  const merged = useMergedPaths(svgs);
  const interpolators:
    | Array<Record<string, (frac: number) => string>>
    | undefined = useInterpolators(svgs);

  useEffect(() => {
    if (!initialized.current) {
      setCurrentPaths(Object.values(merged));
      initialized.current = true;
    }

    const update = (val: number) => {
      const idx = Math.floor(val) % svgs.length;
      const frac = val - Math.floor(val);
      const paths = Object.values(merged).map((p) => {
        const fn = interpolators?.[idx]?.[p.id] ?? ((frac: number) => p.d);
        return { ...p, d: fn ? fn(frac) : p.d };
      });
      setCurrentPaths(paths);
    };

    const controls = animate(progress, svgs.length, {
      duration: 5,
      ease: 'linear',
      repeat: Infinity,
      onUpdate: update,
    });

    return () => controls.stop();
  }, [progress, svgs, merged, interpolators]);

  const getBase = useCallback(
    (p: number) => {
      const seg = 1 / svgs.length;
      const norm = p === 1 ? 0 : p;
      const idx = Math.floor(norm / seg) % svgs.length;
      return svgs[idx]?.paths?.find((x) => x.id === 'Base');
    },
    [svgs],
  );

  const basePath = useMotionValue<(typeof currentPaths)[0] | undefined>(
    undefined,
  );

  useEffect(() => {
    const fn = () => basePath.set(getBase(progress.get()));
    const off = progress.onChange(fn);
    fn();
    return () => off();
  }, [progress, basePath, getBase]);

  return (
    <div className={twMerge('relative', className)}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: '100%' }}
      >
        {basePath.get() && (
          <motion.path
            key="Base"
            d={basePath.get()?.d}
            fill={fill || basePath.get()?.fill}
            fillRule="evenodd"
          />
        )}
        {currentPaths
          .filter((p) => p.id !== 'Base')
          .map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              fill={fill || path.fill}
              fillRule={path.rule === 'evenodd' ? 'evenodd' : undefined}
            />
          ))}
      </motion.svg>
    </div>
  );
}
