# 🌀 ganimation_package

A lightweight, type-safe TypeScript package for animating SVG path transitions using [flubber](https://github.com/veltman/flubber) and [framer-motion](https://www.framer.com/motion/) in React. Interpolate smoothly between any number of SVG states with minimal setup.

---

## ✨ Key Features

- **Smooth Shape Morphing**: Automatically interpolates (morphs) between different SVG paths using `flubber`.
- **Smart Transitions**: Handles paths appearing and disappearing gracefully by animating opacity.
- **Fully Customizable**: Control `duration`, `ease`, and `loop` settings.
- **High Performance**: Uses `framer-motion`'s `useTransform` to animate outside the React render cycle.
- **Type-Safe**: Written in TypeScript with strict definitions.

---

## 📦 Installation

Install the package and its peers:

```bash
npm install @ghassen_abida/svg_animation
npm install react react-dom framer-motion flubber tailwind-merge
```

---

## 🚀 Quick Start

```tsx
import React from 'react';
import { InterpolatedSvgsAnimation } from '@ghassen_abida/svg_animation';
import { svgs } from './mySvgs';

export function App() {
  return (
    <div style={{ width: 200, height: 200 }}>
      <InterpolatedSvgsAnimation
        svgs={svgs}
        duration={3}
        ease="easeInOut"
        loop={true}
        fill="#1E40AF"
        className="rounded-2xl shadow-lg"
      />
    </div>
  );
}
```

---

## 🛠️ API Reference

| Prop        | Type                   |  Default   | Description                                                          |
| ----------- | ---------------------- | :--------: | -------------------------------------------------------------------- |
| `svgs`      | `AnimationSvgs`        |     ✅     | Array of SVG states (frames) to interpolate between.                 |
| `duration`  | `number`               |    `5`     | Total duration of one full animation cycle in seconds.               |
| `ease`      | `string` \| `number[]` | `"linear"` | Easing function (e.g., `"easeInOut"`, `"circOut"`, or bezier array). |
| `loop`      | `boolean`              |   `true`   | Whether the animation should loop infinitely.                        |
| `fill`      | `string`               |     –      | Override fill color for all paths.                                   |
| `className` | `string`               |     –      | CSS classes for the wrapper `<div>`.                                 |

---

## 🔧 Hooks & Utilities

- **`useMergedPaths(svgs: AnimationSvgs): Record<string, SvgPath>`**
  Returns a map of every unique path by `id`, using the first occurrence.

- **`useInterpolators(svgs: AnimationSvgs): Array<Record<string,(t:number)=>string>>`**
  Pre-computes flubber interpolation functions for each transition segment.

- **Helpers** in `src/utils/svgHelpers.ts`:

  - `mergePaths(svgs: AnimationSvgs)`
  - `createInterpolators(svgs: AnimationSvgs)`

---

## 📂 Project Structure

```text
ganimation_package/
├─ src/
│  ├─ components/
│  │   └─ InterpolatedSvgsAnimation.tsx
│  ├─ hooks/
│  │   ├─ useMergedPaths.ts
│  │   └─ useInterpolators.ts
│  ├─ types.ts
│  ├─ utils/
│  │   └─ svgHelpers.ts
│  └─ index.ts
├─ sample/
│   └─ sampleSvgs.ts
├─ README.md
├─ package.json
├─ tsconfig.json
└─ .npmignore
```

---

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b my-feature`)
3. Commit your changes (`git commit -m "feat: ..."`)
4. Push to your branch (`git push origin my-feature`)
5. Open a Pull Request

---

## 📜 License

MIT © Ghassen Abida && WAHIB MKADMI
