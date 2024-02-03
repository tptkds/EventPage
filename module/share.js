const urlShareButton = document.querySelector('#url-share-button');
export const setShareURLButton = () => {
    urlShareButton.addEventListener('click', () => {
        navigator.clipboard.writeText(location.href);
    });
}