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
  { name: 'Hips & Pelvis', id: 'hips-pelvis' },
  { name: 'Legs', id: 'legs' },
  { name: 'Feet', id: 'feet' },
];

export const bodyPartPaths = {
  // Male body parts now use external SVG overlays (see svgFileMapping below)
  female_front: {
    'head-neck': (
      <>
        {circle(50, 14, 4.5)}
        {rect(47, 19, 6, 3.5)}
      </>
    ),
    chest: (
      <>
        {path("M37,24 Q50,29 63,24 L61,34 Q50,36 39,34 Z")}
      </>
    ),
    abdomen: (
      <>
        {rect(40, 35, 20, 9)}
        {rect(39, 45, 22, 9)}
      </>
    ),
    arms: (
      <>
        {circle(34, 25, 4.5)}
        {circle(66, 25, 4.5)}
        {path("M29,28 L21,39 L27,39 L35,28 Z")} {/* L Upper Arm - Far Wide */}
        {path("M71,28 L79,39 L73,39 L65,28 Z")} {/* R Upper Arm - Far Wide */}
        {circle(24, 41, 2.5)} {/* L Elbow - Far Wide */}
        {circle(76, 41, 2.5)} {/* R Elbow - Far Wide */}
        {path("M23,43 L16,53 L22,53 L26,43 Z")} {/* L Forearm - Far Wide */}
        {path("M77,43 L84,53 L78,53 L74,43 Z")} {/* R Forearm - Far Wide */}
      </>
    ),
    hands: (
      <>
        {circle(19, 55, 2)} {/* L Wrist - Far Wide */}
        {circle(81, 55, 2)} {/* R Wrist - Far Wide */}
        {path("M17,57 L13,63 L21,63 L21,57 Z")} {/* L Hand - Far Wide */}
        {path("M83,57 L87,63 L79,63 L79,57 Z")} {/* R Hand - Far Wide */}
      </>
    ),
    'hips-pelvis': (
      <>
        {circle(41, 54, 6.5)}
        {circle(59, 54, 6.5)}
      </>
    ),
    legs: (
      <>
        {path("M38,60 L35,75 L43,75 L47,60 Z")} {/* L Thigh - Far Wide */}
        {path("M62,60 L65,75 L57,75 L53,60 Z")} {/* R Thigh - Far Wide */}
        {circle(39, 78, 3.5)} {/* L Knee - Far Wide */}
        {circle(61, 78, 3.5)} {/* R Knee - Far Wide */}
        {path("M37,81 L36,92 L41,92 L41,81 Z")} {/* L Calf - Far Wide */}
        {path("M63,81 L64,92 L59,92 L59,81 Z")} {/* R Calf - Far Wide */}
      </>
    ),
    feet: (
      <>
        {circle(39, 94, 2.5)} {/* L Ankle - Far Wide */}
        {circle(61, 94, 2.5)} {/* R Ankle - Far Wide */}
        {path("M37,96 L33,99 L42,99 L41,96 Z")} {/* L Foot - Far Wide */}
        {path("M63,96 L67,99 L58,99 L59,96 Z")} {/* R Foot - Far Wide */}
      </>
    ),
  },
  female_back: {
    'head-neck': (
      <>
        {circle(50, 14, 4.5)}
        {rect(47, 19, 6, 3.5)}
      </>
    ),
    'upper-back': (
      <>
        {path("M37,24 L63,24 L61,34 L39,34 Z")}
        {path("M40,26 L45,26 L44,31 L40,30 Z")}
        {path("M60,26 L55,26 L56,31 L60,30 Z")}
      </>
    ),
    'lower-back': (
      <>
        {rect(40, 35, 20, 9)}
        {rect(39, 45, 22, 9)}
      </>
    ),
    arms: (
      <>
        {circle(34, 25, 4.5)}
        {circle(66, 25, 4.5)}
        {path("M29,28 L21,39 L27,39 L35,28 Z")} {/* L Upper Arm - Far Wide */}
        {path("M71,28 L79,39 L73,39 L65,28 Z")} {/* R Upper Arm - Far Wide */}
        {circle(24, 41, 2.5)} {/* L Elbow - Far Wide */}
        {circle(76, 41, 2.5)} {/* R Elbow - Far Wide */}
        {path("M23,43 L16,53 L22,53 L26,43 Z")} {/* L Forearm - Far Wide */}
        {path("M77,43 L84,53 L78,53 L74,43 Z")} {/* R Forearm - Far Wide */}
      </>
    ),
    hands: (
      <>
        {circle(19, 55, 2)} {/* L Wrist - Far Wide */}
        {circle(81, 55, 2)} {/* R Wrist - Far Wide */}
        {path("M17,57 L13,63 L21,63 L21,57 Z")} {/* L Hand - Far Wide */}
        {path("M83,57 L87,63 L79,63 L79,57 Z")} {/* R Hand - Far Wide */}
      </>
    ),
    'hips-pelvis': (
      <>
        {circle(41, 54, 6.5)}
        {circle(59, 54, 6.5)}
      </>
    ),
    legs: (
      <>
        {path("M38,60 L35,75 L43,75 L47,60 Z")} {/* L Thigh - Far Wide */}
        {path("M62,60 L65,75 L57,75 L53,60 Z")} {/* R Thigh - Far Wide */}
        {circle(39, 78, 3.5)} {/* L Knee - Far Wide */}
        {circle(61, 78, 3.5)} {/* R Knee - Far Wide */}
        {path("M37,81 L36,92 L41,92 L41,81 Z")} {/* L Calf - Far Wide */}
        {path("M63,81 L64,92 L59,92 L59,81 Z")} {/* R Calf - Far Wide */}
      </>
    ),
    feet: (
      <>
        {circle(39, 94, 2.5)} {/* L Ankle - Far Wide */}
        {circle(61, 94, 2.5)} {/* R Ankle - Far Wide */}
        {path("M37,96 L33,99 L42,99 L41,96 Z")} {/* L Foot - Far Wide */}
        {path("M63,96 L67,99 L58,99 L59,96 Z")} {/* R Foot - Far Wide */}
      </>
    ),
  },
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
};
