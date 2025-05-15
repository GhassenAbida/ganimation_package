# 🌀 ganimation\_package

A lightweight, type-safe TypeScript package for animating SVG path transitions using [flubber](https://github.com/veltman/flubber) and [framer-motion](https://www.framer.com/motion/) in React. Interpolate smoothly between any number of SVG states with minimal setup.

---

## ✨ Key Features

* **Smooth path interpolation**
  Transition seamlessly between multiple SVG shapes.

* **Type-safe models**
  `AnimationSvgs`, `Svg`, `SvgPath` ensure correct data structures.

* **One-liner React component**
  `<InterpolatedSvgsAnimation />` handles timing, interpolation, and rendering.

* **Modular hooks & utilities**
  `useMergedPaths`, `useInterpolators`, plus helper functions for custom flows.

---

## 📦 Installation

Install the package and its peers:

```bash
npm install ganimation_package
npm install react react-dom framer-motion flubber
```

---

## 🚀 Quick Start

```tsx
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
```

---

## 🛠️ API Reference

| Prop        | Type            | Required | Description                                 |
| ----------- | --------------- | :------: | ------------------------------------------- |
| `svgs`      | `AnimationSvgs` |     ✅    | Array of SVG states to interpolate between. |
| `fill`      | `string`        |     –    | Override for every path’s fill color.       |
| `className` | `string`        |     –    | CSS classes for the wrapper `<div>`.        |

---

## 🔧 Hooks & Utilities

* **`useMergedPaths(svgs: AnimationSvgs): Record<string, SvgPath>`**
  Returns a map of every unique path by `id`, using the first occurrence.

* **`useInterpolators(svgs: AnimationSvgs): Array<Record<string,(t:number)=>string>>`**
  Pre-computes flubber interpolation functions for each transition segment.

* **Helpers** in `src/utils/svgHelpers.ts`:

  * `mergePaths(svgs: AnimationSvgs)`
  * `createInterpolators(svgs: AnimationSvgs)`

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
