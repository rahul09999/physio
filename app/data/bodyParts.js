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
  male_front: {
    'head-neck': (
      <>
        {circle(50, 14, 5)} {/* Head */}
        {rect(46.5, 19, 7, 4)} {/* Neck */}
      </>
    ),
    chest: (
      <>
        {path("M36,24 Q50,28 64,24 L62,34 Q50,36 38,34 Z")}
      </>
    ),
    abdomen: (
      <>
        {rect(39, 35, 22, 10)} {/* Upper Abdomen */}
        {rect(39, 46, 22, 8)} {/* Lower Abdomen */}
      </>
    ),
    arms: (
      <>
        {/* Left Arm */}
        {circle(32, 26, 5)} {/* L Shoulder */}
        {path("M28,30 L20,45 L15,54 L21,56 L26,47 L34,32 Z")} {/* L Full Arm */}
        
        {/* Right Arm */}
        {circle(68, 26, 5)} {/* R Shoulder */}
        {path("M72,30 L80,45 L85,54 L79,56 L74,47 L66,32 Z")} {/* R Full Arm */}
      </>
    ),
    hands: (
      <>
        {circle(18, 59, 4.5)} {/* L Hand - Circle */}
        {circle(82, 59, 4.5)} {/* R Hand - Circle */}
      </>
    ),
    'hips-pelvis': (
      <>
        {circle(42, 56, 6)}
        {circle(58, 56, 6)}
      </>
    ),
    legs: (
      <>
        {/* Left Leg */}
        {path("M35,58 Q32,64 33,70 Q33,76 38,77 Q43,76 43,70 Q44,64 42,58 Z")} {/* L Thigh - Oval */}
        {rect(34, 78, 8, 18)} {/* L Shin - Rectangle */}
        
        {/* Right Leg */}
        {path("M58,58 Q55,64 57,70 Q57,76 62,77 Q67,76 67,70 Q68,64 65,58 Z")} {/* R Thigh - Oval */}
        {rect(58, 78, 8, 18)} {/* R Shin - Rectangle */}
      </>
    ),
    feet: (
      <>
        {circle(38, 99, 4)} {/* L Foot - Circle */}
        {circle(62, 99, 4)} {/* R Foot - Circle */}
      </>
    ),
  },
  male_back: {
    'head-neck': (
      <>
        {circle(50, 14, 5)}
        {rect(46.5, 19, 7, 4)}
      </>
    ),
    'upper-back': (
      <>
        {path("M36,24 L64,24 L62,34 L38,34 Z")}
        {path("M39,26 L46,26 L44,32 L39,30 Z")}
        {path("M61,26 L54,26 L56,32 L61,30 Z")}
      </>
    ),
    'lower-back': (
      <>
        {rect(39, 35, 22, 10)}
        {rect(39, 46, 22, 8)}
      </>
    ),
    arms: (
      <>
        {circle(33, 25, 5.5)} {/* L Shoulder */}
        {circle(67, 25, 5.5)} {/* R Shoulder */}
        {path("M28,28 L18,38 L25,38 L33,28 Z")} {/* L Upper Arm - Far Wide */}
        {path("M72,28 L82,38 L75,38 L67,28 Z")} {/* R Upper Arm - Far Wide */}
        {circle(21, 40, 3)} {/* L Elbow - Far Wide */}
        {circle(79, 40, 3)} {/* R Elbow - Far Wide */}
        {path("M20,43 L12,53 L18,53 L23,43 Z")} {/* L Forearm - Far Wide */}
        {path("M80,43 L88,53 L82,53 L77,43 Z")} {/* R Forearm - Far Wide */}
      </>
    ),
    hands: (
      <>
        {circle(14, 56, 2.5)} {/* L Wrist - Far Wide */}
        {circle(86, 56, 2.5)} {/* R Wrist - Far Wide */}
        {path("M12,58 L8,65 L16,65 L18,58 Z")} {/* L Hand - Far Wide */}
        {path("M88,58 L92,65 L84,65 L82,58 Z")} {/* R Hand - Far Wide */}
      </>
    ),
    'hips-pelvis': (
      <>
        {circle(42, 56, 6)}
        {circle(58, 56, 6)}
      </>
    ),
    legs: (
      <>
        {path("M38,60 L34,76 L42,76 L46,60 Z")} {/* L Thigh - Far Wide */}
        {path("M62,60 L66,76 L58,76 L54,60 Z")} {/* R Thigh - Far Wide */}
        {circle(38, 79, 4)} {/* L Knee - Far Wide */}
        {circle(62, 79, 4)} {/* R Knee - Far Wide */}
        {path("M36,83 L34,94 L40,94 L40,83 Z")} {/* L Calf - Far Wide */}
        {path("M64,83 L66,94 L60,94 L60,83 Z")} {/* R Calf - Far Wide */}
      </>
    ),
    feet: (
      <>
        {circle(37, 96, 2.5)} {/* L Ankle - Far Wide */}
        {circle(63, 96, 2.5)} {/* R Ankle - Far Wide */}
        {path("M34,97 L30,99 L40,99 L40,97 Z")} {/* L Foot - Far Wide */}
        {path("M66,97 L70,99 L60,99 L60,97 Z")} {/* R Foot - Far Wide */}
      </>
    ),
  },
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
