import { makeDOMwithProperties, appendChildrenList } from "../utils/dom.js";

const snackList = [
    {
    id: 1,
    imgSrc: '/public/assets/초코꼬북칩.jpeg',
    name: '초코꼬북칩',
    description: '맛있는 초코꼬북칩'
    },
    {
    id: 2,
    imgSrc: '/public/assets/나쵸.jpeg',
    name: '나쵸',
    description: '맛있는 나쵸'
    },
    {
    id: 3,
    imgSrc: '/public/assets/허니버터칩.jpeg',
    name: '허니버터칩',
    description: '맛있는 허니버터칩'
    },
    {
    id: 4,
    imgSrc: '/public/assets/홈런볼.jpeg',
    name: '홈런볼',
    description: '맛있는 홈런볼'
    },

];
const snackCardList = document.querySelector('.snack-card-list');
export const setSelectCards = () => {
    for (let i = 0; i < 4; i++) {
        const snackCard = makeDOMwithProperties('button', { id: `select-${i + 1}`, className: 'snack-card' });
        snackCard.addEventListener('click', () => {
            const snackCardSelected = document.querySelector('.select');
            snackCardSelected.classList.remove('select');
            snackCard.classList.add('select');
        })
        const snackImg = makeDOMwithProperties('img', { src: `${snackList[i].imgSrc}`, alt: `${snackList[i].name}` });
        const snackDescription = makeDOMwithProperties('div', { className: 'snack-description'});
        const snackName = makeDOMwithProperties('div', { innerHTML: `${snackList[i].name}`});
        const snackDetail = makeDOMwithProperties('div', { innerHTML: `${snackList[i].description}` });
        appendChildrenList(snackDescription, [snackName, snackDetail]);
        appendChildrenList(snackCard, [snackImg, snackDescription]);
        snackCardList.appendChild(snackCard);
    }
}