'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import type { InterpolatedSvgsAnimationProps } from '../types.js';
import { useMergedPaths } from '../hooks/useMergedPaths.js';
import { useInterpolators } from '../hooks/useInterpolators.js';

const InterpolatedPath = ({
  pathId,
  initialPath,
  progress,
  interpolators,
  opacityInterpolators,
  fill,
  totalFrames,
}: {
  pathId: string;
  initialPath: any;
  progress: any;
  interpolators: any;
  opacityInterpolators: any;
  fill?: string;
  totalFrames: number;
}) => {
  const d = useTransform(progress, (val: number) => {
    const idx = Math.floor(val) % totalFrames;
    const frac = val - Math.floor(val);
    const fn = interpolators?.[idx]?.[pathId];
    return fn ? fn(frac) : initialPath.d;
  });

  const opacity = useTransform(progress, (val: number) => {
    const idx = Math.floor(val) % totalFrames;
    const frac = val - Math.floor(val);
    const fn = opacityInterpolators?.[idx]?.[pathId];
    // If no interpolator exists for this transition, it means the path is not involved in current or next frame.
    // Thus it should be invisible.
    return fn ? fn(frac) : 0;
  });

  return (
    <motion.path
      d={d}
      fill={fill || initialPath.fill}
      fillRule={initialPath.rule === 'evenodd' ? 'evenodd' : undefined}
      opacity={opacity}
    />
  );
};

export function InterpolatedSvgsAnimation({
  fill,
  svgs,
  className,
  duration = 5,
  ease = 'linear',
  loop = true,
}: InterpolatedSvgsAnimationProps) {
  const progress = useMotionValue(0);
  const viewBox = svgs[0]?.svgAttrs?.viewBox || '0 0 100 100';
  const merged = useMergedPaths(svgs);
  const { paths: pathInterpolators, opacities: opacityInterpolators } =
    useInterpolators(svgs);

  useEffect(() => {
    const controls = animate(progress, svgs.length, {
      duration,
      ease,
      repeat: loop ? Infinity : 0,
      repeatType: 'loop',
    });
    return () => controls.stop();
  }, [progress, svgs.length, duration, ease, loop]);

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
        {Object.values(merged).map((path) => (
          <InterpolatedPath
            key={path.id}
            pathId={path.id}
            initialPath={path}
            progress={progress}
            interpolators={pathInterpolators}
            opacityInterpolators={opacityInterpolators}
            fill={fill}
            totalFrames={svgs.length}
          />
        ))}
      </motion.svg>
    </div>
  );
}
