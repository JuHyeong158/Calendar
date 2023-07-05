const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const stringmonth = now.toLocaleString('en-US', { month: 'short' })

document.querySelector('.year').textContent = `${year}`
document.querySelector('.month').textContent = `${stringmonth}`

const prevlast_day = new Date(year, month, 0).getDay();
const prevlast_date = new Date(year, month, 0).getDate();
const lastdates = new Date(year, month + 1, 0).getDate();
const lastdates_day = new Date(year, month + 1, 0).getDay();

document.querySelector('.dates').textContent = `${lastdates}`

const prevDates = [];
const dates = [...Array(lastdates + 1).keys()].slice(1);
const nextDates = [];

if (prevlast_day !== 6) {
    for (let i = 0; i < prevlast_day + 1; i++) {
        prevDates.unshift("");
    }
}

for (let j = 0; j < 6 - lastdates_day; j++) {
    nextDates.unshift("");
}

const dates1 = prevDates.concat(dates, nextDates);

dates1.forEach((date, i) => {
    dates1[i] = `<div class="date">${date}</div>`;
})

document.querySelector('.dates').innerHTML = dates1.join('');
