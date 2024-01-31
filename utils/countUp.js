export const countUp = (dom, participate, second, term) => {
    const INCREMENT_VALUE = Math.floor((participate / second) * (term / 1000));
    let count = 0;

    const Interval = setInterval(() => {
        if (count + INCREMENT_VALUE > participate) {
            count = participate;
            clearInterval(Interval);
        }
        else {
            count += INCREMENT_VALUE;
        }
        dom.innerHTML = count;
    }, term);
}
