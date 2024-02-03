const mbtiQuestionList = [
    '짠 과자가 단 과자보다 좋다',
    '봉지 과자가 박스 과자보다 좋다',
    '과자를 뜯으면 한 번에 다 먹는다'
]

const getMbtiResult = (resultValue) => {
    switch (resultValue) {
        case 0:
            return {
                title: '과자 어린이 A유형',
                 description: '과자 어린이 A유형 설명'
            }
        case 1:
            return {
                title: '과자 어린이 B유형',
                 description: '과자 어린이 B유형 설명'
            }
        case 2:
            return {
                title: '과자 어린이 C유형',
                 description: '과자 어린이 C유형 설명'
            }
        case 3:
            return {
                title: '과자 어린이 D유형',
                 description: '과자 어린이 D유형 설명'
            }
    }
}

const mbtiQuestion = document.querySelector('.mbti-question');
const [yesButton,noButton] = document.querySelector('.mbti-select').children;
const[mbtiContainerBefore, mbtiContainerPending, mbtiContainerResult] = document.getElementsByClassName('mbti-container');
const mbtiResult = mbtiContainerResult.children[0];
const mbtiDescription = mbtiContainerResult.children[1];
let k = 1;
let score = 0;
export const setMbtiSection = () => {
    console.log(yesButton)
    yesButton.addEventListener('click', () => setScore(yesButton));
    noButton.addEventListener('click', () => setScore(noButton));
}

function setScore(element) {
    mbtiQuestion.innerHTML = mbtiQuestionList[k++];
    if (element.outerText == "YES") score++;
    if (k > 3) {
        const result = getMbtiResult(score);
        console.log(result)
        mbtiResult.innerHTML = result.title;
        mbtiDescription.innerHTML = result.description;
        mbtiContainerBefore.style.display = 'none';
        mbtiContainerPending.style.display = 'block';
        const timeout = setTimeout(() => {
            mbtiContainerPending.style.display = 'none';
            mbtiContainerResult.style.display = 'block';
        },3000)
    }
}