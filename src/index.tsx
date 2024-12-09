import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './util/ER_Software_Solutions.png';
import MatrixBackground from './matrixBackrount';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
    {/* Matrix Arka Plan */}
    <MatrixBackground />

    {/* Logo */}
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <a href="https://github.com/ertugrulsaliher" target="_blank" rel="noopener noreferrer">
        <img
          src={logo}
          alt="ER Software Solutions Logo"
          style={{
            maxWidth: '300px',
            borderRadius: '50px',
            maxHeight: '300px',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.7)',
          }}
        />
      </a>
    </div>
  </div>
);
