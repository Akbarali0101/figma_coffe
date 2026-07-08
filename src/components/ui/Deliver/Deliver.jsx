import { useState } from 'react';
import './Deliver.css';

const Deliver = () => {
  const sections = [
    {
      id: 'pref',
      title: 'How often should we deliver?',
      options: [
        { title: 'Every week', desc: '$7.20 per shipment. Includes free first-class shipping.' },
        { title: 'Every two weeks', desc: '$19.20 per shipment. Includes free first-class shipping.' },
        { title: 'Every month', desc: '$24.00 per shipment. Includes free first-class shipping.' }
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

export default Deliver;