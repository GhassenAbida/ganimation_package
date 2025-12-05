import React from 'react';
import ReactDOM from 'react-dom/client';
import { InterpolatedSvgsAnimation } from './components/InterpolatedSvgsAnimation';
import { simpleShapes, iconTransition, loader, organicBlob } from './sample/sampleSvgs';

const Card = ({ title, children, desc }: { title: string, children: React.ReactNode, desc: string }) => (
  <div style={{ 
    background: 'white', 
    borderRadius: 16, 
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16
  }}>
    <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#1F2937' }}>{title}</h2>
    <div style={{ width: 150, height: 150 }}>
      {children}
    </div>
    <p style={{ margin: 0, fontSize: '0.85rem', color: '#6B7280' }}>{desc}</p>
  </div>
);

const App = () => {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 40 }}>
      <header style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: 10, color: '#111' }}>Ganimation Showcase</h1>
        <p style={{ color: '#666' }}>High-performance SVG interpolation for React</p>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: 24 
      }}>
        <Card title="Shape Morphing" desc="Smoothly morphs between Circle, Rect, and Triangle.">
          <InterpolatedSvgsAnimation 
            svgs={simpleShapes} 
            duration={4} 
            ease="easeInOut" 
          />
        </Card>

        <Card title="Icon Transition" desc="Multi-path morphing with opacity handling (Menu → Close).">
          <InterpolatedSvgsAnimation 
            svgs={iconTransition} 
            duration={1.5} 
            ease="circInOut" 
            loop={true}
          />
        </Card>

        <Card title="Loading State" desc="Independent path animation for complex loaders.">
          <InterpolatedSvgsAnimation 
            svgs={loader} 
            duration={1} 
            ease="linear" 
          />
        </Card>

        <Card title="Organic Blob" desc="Fluid background element with custom path data.">
          <InterpolatedSvgsAnimation 
            svgs={organicBlob} 
            duration={6} 
            ease="easeInOut" 
          />
        </Card>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
