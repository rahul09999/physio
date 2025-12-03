// Helper to create simple rect/circle paths
const rect = (x, y, w, h) => <rect x={x} y={y} width={w} height={h} rx="1" />;
const circle = (cx, cy, r) => <circle cx={cx} cy={cy} r={r} />;
const path = (d) => <path d={d} />;

export const bodyPartsList = [
  { name: 'Head & Neck', id: 'head-neck' },
  { name: 'Shoulders', id: 'shoulders' },
  { name: 'Chest', id: 'chest' },
  { name: 'Abdomen', id: 'abdomen' },
  { name: 'Upper Back', id: 'upper-back' },
  { name: 'Lower Back', id: 'lower-back' },
  { name: 'Arms', id: 'arms' },
  { name: 'Hands', id: 'hands' },
  { name: 'Thighs', id: 'hips-pelvis' },
  { name: 'Legs', id: 'legs' },
  { name: 'Feet', id: 'feet' },
];

export const bodyPartPaths = {
  // All body parts now use external SVG overlays (see svgFileMapping below)
};

// SVG file mapping for external SVG overlays
export const svgFileMapping = {
  male_front: {
    'head-neck': '/male/front/Face and neck.svg',
    'shoulders': '/male/front/Shoulders.svg',
    'chest': '/male/front/chest.svg',
    'abdomen': '/male/front/abdomen.svg',
    'arms': '/male/front/arms.svg',
    'hands': '/male/front/hands.svg',
    'hips-pelvis': '/male/front/thighs.svg', // Using thighs svg for hips-pelvis area
    'legs': '/male/front/Legs.svg',
    'feet': '/male/front/feets.svg',
  },
  male_back: {
    'head-neck': '/male/back/back_face_neck.svg',
    'shoulders': '/male/back/back_shoulders.svg',
    'upper-back': '/male/back/back_upper_back.svg',
    'lower-back': '/male/back/back_lower_back.svg',
    'arms': '/male/back/back_arms.svg',
    'hands': '/male/back/back_hands.svg',
    'hips-pelvis': '/male/back/back_thighs.svg', // Using thighs svg for hips-pelvis area
    'legs': '/male/back/back_legs.svg',
    'feet': '/male/back/back_feets.svg',
  },
  female_front: {
    'head-neck': '/female/front/face_neck.svg',
    'shoulders': '/female/front/shoulders.svg',
    'chest': '/female/front/chest.svg',
    'abdomen': '/female/front/abdomen.svg',
    'arms': '/female/front/arns.svg', // Note: filename is 'arns.svg' not 'arms.svg'
    'hands': '/female/front/hands.svg',
    'hips-pelvis': '/female/front/thighs.svg', // Using thighs svg for hips-pelvis area
    'legs': '/female/front/legs.svg',
    'feet': '/female/front/feets.svg',
  },
  female_back: {
    'head-neck': '/female/back/back_face_neck.svg',
    'shoulders': '/female/back/back_shoulders.svg',
    'upper-back': '/female/back/back_upper_back.svg',
    'lower-back': '/female/back/back_lower_back.svg',
    'arms': '/female/back/back_arms.svg',
    'hands': '/female/back/back_hands.svg',
    'hips-pelvis': '/female/back/back_thighs.svg', // Using thighs svg for hips-pelvis area
    'legs': '/female/back/back_legs.svg',
    'feet': '/female/back/back_feets.svg',
  },
};
