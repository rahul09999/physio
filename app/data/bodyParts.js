// Helper to create simple rect/circle paths
const rect = (x, y, w, h) => <rect x={x} y={y} width={w} height={h} rx="1" />;
const circle = (cx, cy, r) => <circle cx={cx} cy={cy} r={r} />;
const path = (d) => <path d={d} />;

export const bodyPartsList = [
  { name: 'Head & Neck', id: 'head-neck' },
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
        {circle(50, 6.5, 5)}
        {path("M46,4 Q50,2 54,4 L54,6 L46,6 Z")}
        {circle(47.5, 6.5, 1)}
        {circle(52.5, 6.5, 1)}
        {rect(46.5, 11.5, 7, 3.5)}
        {circle(50, 13.5, 1.5)}
      </>
    ),
    chest: (
      <>
        {path("M35,18 Q50,22 65,18 L63,28 Q50,30 37,28 Z")}
      </>
    ),
    abdomen: (
      <>
        {rect(39, 29, 22, 7)}
        {rect(39, 37, 22, 7)}
        {circle(50, 32, 2.5)}
      </>
    ),
    arms: (
      <>
        {circle(31, 18, 5.5)}
        {circle(69, 18, 5.5)}
        {path("M26,22 L23,34 L30,34 L33,22 Z")}
        {path("M74,22 L77,34 L70,34 L67,22 Z")}
        {circle(26.5, 36, 3)}
        {circle(73.5, 36, 3)}
        {path("M24,39 L22,49 L28,49 L30,39 Z")}
        {path("M76,39 L78,49 L72,49 L70,39 Z")}
      </>
    ),
    hands: (
      <>
        {circle(25, 51, 2.5)}
        {circle(75, 51, 2.5)}
        {path("M22,53 L20,60 L28,60 L28,53 Z")}
        {path("M78,53 L80,60 L72,60 L72,53 Z")}
      </>
    ),
    'hips-pelvis': (
      <>
        {circle(40, 48, 6)}
        {circle(60, 48, 6)}
      </>
    ),
    legs: (
      <>
        {path("M36,54 L38,72 L48,72 L46,54 Z")}
        {path("M64,54 L62,72 L52,72 L54,54 Z")}
        {circle(43, 75, 4)}
        {circle(57, 75, 4)}
        {path("M40,79 L41,92 L47,92 L46,79 Z")}
        {path("M60,79 L59,92 L53,92 L54,79 Z")}
      </>
    ),
    feet: (
      <>
        {circle(44, 94, 2.5)}
        {circle(56, 94, 2.5)}
        {path("M41,96 L38,99 L48,99 L47,96 Z")}
        {path("M59,96 L62,99 L52,99 L53,96 Z")}
      </>
    ),
  },
  male_back: {
    'head-neck': (
      <>
        {circle(50, 6.5, 5)}
        {rect(46.5, 11.5, 7, 3.5)}
      </>
    ),
    'upper-back': (
      <>
        {path("M35,18 L65,18 L63,28 L37,28 Z")}
        {path("M38,20 L45,20 L43,26 L38,24 Z")}
        {path("M62,20 L55,20 L57,26 L62,24 Z")}
      </>
    ),
    'lower-back': (
      <>
        {rect(39, 29, 22, 7)}
        {rect(39, 37, 22, 7)}
      </>
    ),
    arms: (
      <>
        {circle(31, 18, 5.5)}
        {circle(69, 18, 5.5)}
        {path("M26,22 L23,34 L30,34 L33,22 Z")}
        {path("M74,22 L77,34 L70,34 L67,22 Z")}
        {circle(26.5, 36, 3)}
        {circle(73.5, 36, 3)}
        {path("M24,39 L22,49 L28,49 L30,39 Z")}
        {path("M76,39 L78,49 L72,49 L70,39 Z")}
      </>
    ),
    hands: (
      <>
        {circle(25, 51, 2.5)}
        {circle(75, 51, 2.5)}
        {path("M22,53 L20,60 L28,60 L28,53 Z")}
        {path("M78,53 L80,60 L72,60 L72,53 Z")}
      </>
    ),
    'hips-pelvis': (
      <>
        {circle(40, 48, 6)}
        {circle(60, 48, 6)}
      </>
    ),
    legs: (
      <>
        {path("M36,54 L38,72 L48,72 L46,54 Z")}
        {path("M64,54 L62,72 L52,72 L54,54 Z")}
        {circle(43, 75, 4)}
        {circle(57, 75, 4)}
        {path("M40,79 L41,92 L47,92 L46,79 Z")}
        {path("M60,79 L59,92 L53,92 L54,79 Z")}
      </>
    ),
    feet: (
      <>
        {circle(44, 94, 2.5)}
        {circle(56, 94, 2.5)}
        {path("M41,96 L38,99 L48,99 L47,96 Z")}
        {path("M59,96 L62,99 L52,99 L53,96 Z")}
      </>
    ),
  },
  female_front: {
    'head-neck': (
      <>
        {circle(50, 6.5, 4.5)}
        {path("M47,4 Q50,3 53,4 L53,6 L47,6 Z")}
        {circle(48, 6.5, 0.8)}
        {circle(52, 6.5, 0.8)}
        {rect(47, 11.5, 6, 3)}
        {circle(50, 13, 1.5)}
      </>
    ),
    chest: (
      <>
        {path("M36,18 Q50,23 64,18 L62,28 Q50,30 38,28 Z")}
      </>
    ),
    abdomen: (
      <>
        {rect(40, 29, 20, 7)}
        {rect(39, 37, 22, 7)}
        {circle(50, 32, 2.5)}
      </>
    ),
    arms: (
      <>
        {circle(33, 18, 4.5)}
        {circle(67, 18, 4.5)}
        {path("M28,22 L26,33 L32,33 L34,22 Z")}
        {path("M72,22 L74,33 L68,33 L66,22 Z")}
        {circle(29, 35, 2.5)}
        {circle(71, 35, 2.5)}
        {path("M27,37 L26,47 L30,47 L31,37 Z")}
        {path("M73,37 L74,47 L70,47 L69,37 Z")}
      </>
    ),
    hands: (
      <>
        {circle(28, 49, 2)}
        {circle(72, 49, 2)}
        {path("M26,51 L25,57 L31,57 L30,51 Z")}
        {path("M74,51 L75,57 L69,57 L70,51 Z")}
      </>
    ),
    'hips-pelvis': (
      <>
        {circle(39, 48, 6.5)}
        {circle(61, 48, 6.5)}
      </>
    ),
    legs: (
      <>
        {path("M36,54 L38,71 L46,71 L45,54 Z")}
        {path("M64,54 L62,71 L54,71 L55,54 Z")}
        {circle(42, 74, 3.5)}
        {circle(58, 74, 3.5)}
        {path("M40,77 L41,90 L45,90 L44,77 Z")}
        {path("M60,77 L59,90 L55,90 L56,77 Z")}
      </>
    ),
    feet: (
      <>
        {circle(43, 92, 2.5)}
        {circle(57, 92, 2.5)}
        {path("M41,94 L39,97 L46,97 L45,94 Z")}
        {path("M59,94 L61,97 L54,97 L55,94 Z")}
      </>
    ),
  },
  female_back: {
    'head-neck': (
      <>
        {circle(50, 6.5, 4.5)}
        {rect(47, 11.5, 6, 3)}
      </>
    ),
    'upper-back': (
      <>
        {path("M36,18 L64,18 L62,28 L38,28 Z")}
        {path("M39,20 L44,20 L43,25 L39,24 Z")}
        {path("M61,20 L56,20 L57,25 L61,24 Z")}
      </>
    ),
    'lower-back': (
      <>
        {rect(40, 29, 20, 7)}
        {rect(39, 37, 22, 7)}
      </>
    ),
    arms: (
      <>
        {circle(33, 18, 4.5)}
        {circle(67, 18, 4.5)}
        {path("M28,22 L26,33 L32,33 L34,22 Z")}
        {path("M72,22 L74,33 L68,33 L66,22 Z")}
        {circle(29, 35, 2.5)}
        {circle(71, 35, 2.5)}
        {path("M27,37 L26,47 L30,47 L31,37 Z")}
        {path("M73,37 L74,47 L70,47 L69,37 Z")}
      </>
    ),
    hands: (
      <>
        {circle(28, 49, 2)}
        {circle(72, 49, 2)}
        {path("M26,51 L25,57 L31,57 L30,51 Z")}
        {path("M74,51 L75,57 L69,57 L70,51 Z")}
      </>
    ),
    'hips-pelvis': (
      <>
        {circle(39, 48, 6.5)}
        {circle(61, 48, 6.5)}
      </>
    ),
    legs: (
      <>
        {path("M36,54 L38,71 L46,71 L45,54 Z")}
        {path("M64,54 L62,71 L54,71 L55,54 Z")}
        {circle(42, 74, 3.5)}
        {circle(58, 74, 3.5)}
        {path("M40,77 L41,90 L45,90 L44,77 Z")}
        {path("M60,77 L59,90 L55,90 L56,77 Z")}
      </>
    ),
    feet: (
      <>
        {circle(43, 92, 2.5)}
        {circle(57, 92, 2.5)}
        {path("M41,94 L39,97 L46,97 L45,94 Z")}
        {path("M59,94 L61,97 L54,97 L55,94 Z")}
      </>
    ),
  },
};
