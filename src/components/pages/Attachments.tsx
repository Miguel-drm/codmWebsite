import { useState } from 'react';
import AttachmentsLayout from './layouts/AttachmentsLayout';
import GunCard from './card/GunCard';
import { AnimatePresence, motion } from 'framer-motion';
import sg from '../../assets/images/attachments/Miguel/shotgun.jpg';

const gunCategories = [
  'Assault',
  'Sniper',
  'LMG',
  'SMG',
  'Shotgun',
  'Marksman',
];

const gunsData: Record<string, { name: string; image: string }[]> = {
  Assault: [
    { name: 'AK-47', image: 'https://static.wikia.nocookie.net/codm/images/2/2d/AK-47.png' },
    { name: 'M4', image: 'https://static.wikia.nocookie.net/codm/images/7/7e/M4.png' },
  ],
  Sniper: [
    { name: 'DL Q33', image: 'https://static.wikia.nocookie.net/codm/images/2/2a/DL_Q33.png' },
    { name: 'Arctic .50', image: 'https://static.wikia.nocookie.net/codm/images/2/2e/Arctic_50.png' },
  ],
  LMG: [
    { name: 'RPD', image: 'https://static.wikia.nocookie.net/codm/images/7/7d/RPD.png' },
    { name: 'M4LMG', image: 'https://static.wikia.nocookie.net/codm/images/2/2a/M4LMG.png' },
  ],
  SMG: [
    { name: 'QQ9', image: 'https://static.wikia.nocookie.net/codm/images/2/2d/QQ9.png' },
    { name: 'RUS-79U', image: 'https://static.wikia.nocookie.net/codm/images/2/2d/RUS-79U.png' },
  ],
  Shotgun: [
    { name: 'KRM', image: sg },
  ],
  Marksman: [
    { name: 'SKS', image: 'https://static.wikia.nocookie.net/codm/images/2/2d/SKS.png' },
    { name: 'SP-R 208', image: 'https://static.wikia.nocookie.net/codm/images/2/2d/SP-R_208.png' },
  ],
};

const Attachments = () => {
  const [selected, setSelected] = useState<string>('Assault');
  const [modal, setModal] = useState<{ image: string; name: string } | null>(null);

  return (
    <>
      <AttachmentsLayout
        leftContent={
          <ul className="flex flex-col gap-3">
            {gunCategories.map((cat) => (
              <li key={cat}>
                <button
                  className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition-colors
                    ${selected === cat ? 'bg-blue-600 text-white shadow' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                  onClick={() => setSelected(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        }
        rightContent={
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">{selected} Guns</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {gunsData[selected]?.map((gun) => (
                <div key={gun.name} onClick={() => setModal(gun)}>
                  <GunCard image={gun.image} name={gun.name} />
                </div>
              ))}
            </div>
          </div>
        }
      />
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              className="bg-black/90 rounded-xl shadow-2xl p-0 flex flex-col items-center relative max-w-4xl w-full"
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white text-2xl bg-black/40 rounded-full px-3 py-2 hover:bg-white/20 z-10"
                onClick={() => setModal(null)}
                aria-label="Close"
              >
                ×
              </button>
              <img src={modal.image} alt={modal.name} className="w-full h-auto max-h-[90vh] object-contain rounded" />
              <h3 className="text-xl font-bold text-white mb-2">{modal.name}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Attachments; 