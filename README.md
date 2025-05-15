# 🌀 ganimation_package

A lightweight, type-safe TypeScript package for animating SVG path transitions using [flubber](https://github.com/veltman/flubber) and [framer-motion](https://www.framer.com/motion/) in React. Interpolate smoothly between any number of SVG states with minimal setup.

---

## ✨ Key Features

- **Smooth path interpolation**  
  Transition seamlessly between multiple SVG shapes.

- **Type-safe models**  
  `AnimationSvgs`, `Svg`, `SvgPath` ensure correct data structures.

- **One-liner React component**  
  `<InterpolatedSvgsAnimation />` handles timing, interpolation, and rendering.

- **Modular hooks & utilities**  
  `useMergedPaths`, `useInterpolators`, plus helper functions for custom flows.

---

## 📦 Installation

```bash
npm install ganimation_package
# ensure peer dependencies are installed:
npm install react react-dom framer-motion flubber

 ---

##  🚀 Quick Start:

import React from "react";
import { InterpolatedSvgsAnimation } from "ganimation_package";
import { svgs } from "./sampleSvgs";

export function App() {
  return (
    <div style={{ width: 200, height: 200 }}>
      <InterpolatedSvgsAnimation
        svgs={svgs}
        fill="#1E40AF"
        className="rounded-2xl shadow-lg"
      />
    </div>
  );
}

---

## 🛠️ API Reference
| Prop        | Type            | Required | Description                                 |
| ----------- | --------------- | :------: | ------------------------------------------- |
| `svgs`      | `AnimationSvgs` |     ✅    | Array of SVG states to interpolate between. |
| `fill`      | `string`        |     –    | Override for every path’s fill color.       |
| `className` | `string`        |     –    | CSS classes for the wrapper `<div>`.        |

---



## Hooks & Utilities:
    useMergedPaths(svgs: AnimationSvgs): Record<string,SvgPath>
    Returns a map of every unique path by id, using the first occurrence.

    useInterpolators(svgs: AnimationSvgs): Array<Record<string,(t:number)=>string>>
    Pre-computes flubber interpolation functions for each transition segment.

    Helpers in src/utils/svgHelpers.ts:

    mergePaths(svgs: AnimationSvgs)

    createInterpolators(svgs: AnimationSvgs)
```
