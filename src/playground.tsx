import React from 'react';
import ReactDOM from 'react-dom/client';
import { InterpolatedSvgsAnimation } from './components/InterpolatedSvgsAnimation';

const App = () => {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 40 }}>
      <header style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: 10, color: '#111' }}>
          Ganimation Playground
        </h1>
      </header>

      <div className="p-10 grid grid-cols-2 gap-10">
        <div
          className="border p-4 rounded"
          style={{ border: '1px solid #ddd', padding: 20, borderRadius: 8 }}
        >
          <h2>Menu Interaction (Stroke)</h2>
          <div style={{ width: 100, height: 100, margin: '20px auto' }}>
            <InterpolatedSvgsAnimation
              svgs={[
                {
                  filename: 'menu.svg',
                  svgAttrs: {
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                  },
                  paths: [
                    { id: 'top', d: 'M3 12h18', fill: '#60a5fa' },
                    { id: 'top-bar', d: 'M3 6h18', fill: '#60a5fa' },
                    { id: 'bottom-bar', d: 'M3 18h18', fill: '#60a5fa' },
                  ],
                },
                {
                  filename: 'close.svg',
                  svgAttrs: { viewBox: '0 0 24 24', fill: 'none' },
                  paths: [
                    { id: 'top', d: 'M18 6L6 18', fill: '#ef4444' },
                    { id: 'top-bar', d: 'M6 6l12 12', fill: '#ef4444' },
                    { id: 'bottom-bar', d: 'M0 0h0', fill: 'transparent' },
                  ],
                },
              ]}
              duration={2}
              ease="easeInOut"
              loop={true}
              className="w-full h-full text-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
