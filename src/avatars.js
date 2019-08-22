import Girl1 from './Girl1.png';
import Girl2 from './Girl2.png';
import Girl3 from './Girl3.png';
import Boy1 from './Boy1.png';
import Boy2 from './Boy2.png';
import Boy3 from './Boy3.png';

const avatars = [Girl1, Girl2, Girl3, Boy1, Boy2, Boy3];
const randomIndex1 = Math.floor(Math.random() * avatars.length);
let avatar1 = avatars.splice(randomIndex1, 1);
const randomIndex2 = Math.floor(Math.random() * avatars.length);
let avatar2 = avatars.splice(randomIndex2, 1);

export {avatar1, avatar2}