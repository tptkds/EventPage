const participateSection = document.querySelector('#participate-section');
const resultSection = document.querySelector('#result-section');
const mbtiSection = document.querySelector('#mbti-section');
const anchorToSelect = document.querySelector('#anchor-to-select');
const anchorToResult = document.querySelector('#anchor-to-result');
const anchorToMbti = document.querySelector('#anchor-to-mbti');
const anchorList = [anchorToSelect, anchorToResult, anchorToMbti];
const sectionList = [participateSection, resultSection, mbtiSection];
export const setTabMenu = () => {
    anchorList.forEach((anchor, idx) => {
        anchor.addEventListener('click', () => {
            const destination = sectionList[idx].offsetTop;
            window.scrollTo({ top: destination, behavior: 'smooth' });
        })
    }) 
}