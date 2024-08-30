import { useState } from 'react';
import './App.css';
import Terminal from './Terminal';
const images = [
  {
    name: 'Folder',
    img: (
      <img
        src="https://img.icons8.com/color/100/windows-explorer.png"
        alt="windows-explorer"
      />
    ),
  },
  {
    name: 'Bin',
    img: (
      <img
        src="https://img.icons8.com/color/100/full-bin-windows.png"
        alt="full-bin-windows"
      />
    ),
  },
  {
    name: 'Chrome',
    img: (
      <img src="https://img.icons8.com/fluency/50/chrome.png" alt="chrome" />
    ),
  },
  {
    name: 'Settings',
    img: (
      <img src="https://img.icons8.com/color/100/settings.png" alt="settings" />
    ),
  },
  {
    name: 'Wifi',
    img: <img src="https://img.icons8.com/color/100/wifi.png" alt="wifi" />,
  },
  {
    name: 'Notes',
    img: (
      <img src="https://img.icons8.com/color/50/goodnotes.png" alt="notes" />
    ),
  },
  {
    name: 'Music',
    img: <img src="https://img.icons8.com/color/100/music.png" alt="music" />,
  },
  {
    name: 'Clock',
    img: <img src="https://img.icons8.com/color/100/clock.png" alt="clock" />,
  },
  {
    name: 'Bluetooth',
    img: (
      <img
        src="https://img.icons8.com/color/100/bluetooth.png"
        alt="bluetooth"
      />
    ),
  },
  {
    name: 'Calculator',
    img: (
      <img
        src="https://img.icons8.com/color/100/calculator.png"
        alt="alculator"
      />
    ),
  },
];

function App() {
  const [clickedClass, setClickedClass] = useState('');
  return (
    <>
      <Terminal />

      <div className="apps">
        {images.map((i, key: React.Kay) => (
          <div className="tooltip-container">
            <button
              title={i.name}
              className={
                i.name === clickedClass
                  ? ' animate__animated animate__bounce'
                  : ''
              }
              key={key}
              onClick={() => {
                setClickedClass(i.name);
              }}
            >
              <span className="tooltip">{i.name}</span>
              {i.img}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
