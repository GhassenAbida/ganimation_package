import React from 'react';
import ReactDOM from 'react-dom/client';
import { InterpolatedSvgsAnimation } from './components/InterpolatedSvgsAnimation';
import { svgs } from './sample/sampleSvgs';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Ganimation Test</h1>
      <p>Verifying smooth interpolation and performance.</p>
      
      <div style={{ 
        width: 300, 
        height: 300, 
        background: 'white', 
        borderRadius: 16, 
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: 20,
        margin: '20px auto'
      }}>
        <InterpolatedSvgsAnimation 
          svgs={svgs} 
          duration={3} 
          loop={true} 
          fill="#3B82F6" 
        />
      </div>

      <div style={{ marginTop: 20, fontSize: '0.9rem', color: '#666' }}>
        Animation Duration: 3s | Loop: Enabled
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
