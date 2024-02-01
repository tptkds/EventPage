import { countUp } from "./utils/countUp.js";
import { setTabMenu } from "./module/tabMenu.js";
import { setSelectCards} from "./module/selectCard.js";
/*
 setSelectButton, setResultContainer 
import { setMbtiSection } from "./module/mbtiSelect.js";

import { setShareURLButton } from "./module/share.js";
*/
const data = {
  participate: 1341513412,
};

const participateDOM = document.getElementById('participate-number');
countUp(participateDOM, data.participate, 1, 10);

setTabMenu();
setSelectCards();
/*

setSelectButton();

setResultContainer();

setMbtiSection();

setShareURLButton();
*/