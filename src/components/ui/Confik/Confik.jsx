import React, { useState } from 'react';
import './Confik.css';

const Confik = () => {
  const sections = [
    {
      id: 'pref',
      title: 'How do you drink your coffee?',
      options: [
        { title: 'Wholebean', desc: 'Best choice if you cherish the full sensory experience' },
        { title: 'Filter', desc: 'For pour over or drip methods like Aeropress, Chemex, and V60' },
        { title: 'Cafetiére', desc: 'Course ground beans specially suited for french press coffee' }
      ]
    },
    
  ];

  const [open, setOpen] = useState({ pref: true, type: true, qty: true, grind: true });
  const [selected, setSelected] = useState({});

  const toggle = (id) => setOpen({ ...open, [id]: !open[id] });

  return (
    <div className="confik-container">
      {sections.map((s) => (
        <div key={s.id} className="section">
          <div className="header" onClick={() => toggle(s.id)}>
            <h2>{s.title}</h2>
            <span className={`arrow ${open[s.id] ? 'open' : ''}`}>▲</span>
          </div>
          {open[s.id] && (
            <div className="grid">
              {s.options.map((opt) => (
                <div
                  key={opt.title}
                  className={`card ${selected[s.id] === opt.title ? 'active' : ''}`}
                  onClick={() => setSelected({ ...selected, [s.id]: opt.title })}
                >
                  <h3>{opt.title}</h3>
                  <p>{opt.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Confik;