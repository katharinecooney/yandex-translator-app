import Girl1 from './Girl1.png';
import Girl2 from './Girl2.png';
import Girl3 from './Girl3.png';
import Girl4 from './Girl4.png';
import Girl5 from './Girl5.png';
import Girl6 from './Girl6.png';
import Girl7 from './Girl7.png';
import Boy1 from './Boy1.png';
import Boy2 from './Boy2.png';
import Boy3 from './Boy3.png';
import Boy4 from './Boy4.png';
import Boy5 from './Boy5.png';

const avatars = [Girl1, Girl2, Girl3, Girl4, Girl5, Girl6, Girl7, Boy1, Boy2, Boy3, Boy4, Boy5];

const randomIndex1 = Math.floor(Math.random() * avatars.length);
let avatar1 = avatars.splice(randomIndex1, 1);

const randomIndex2 = Math.floor(Math.random() * avatars.length);
let avatar2 = avatars.splice(randomIndex2, 1);

export {avatar1, avatar2}