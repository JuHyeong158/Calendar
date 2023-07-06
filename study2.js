var now = new Date();
var now2 = new Date();
var calendar = () => {
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var stringmonth = now.toLocaleString('en-US', { month: 'short' })

    document.querySelector('.year').textContent = `${year}`
    document.querySelector('.month').textContent = `${stringmonth}`

    //이번 달의 첫날과 말일의 요일을 구하고 이번 달이 총 며칠인지 구함.
    var current_lastDate = new Date(year, month + 1, 0).getDate();
    var current_lastDay = new Date(year, month + 1, 0).getDay();
    var current_firstDay = new Date(year, month, 1).getDay();

    var current_dates = [];

    //이번 달 말일이 31일이면 1부터 31까지 배열에 들어감.
    for (let i = 0; i < current_lastDate; i++) {
        current_dates.push(i + 1);
    }

    //첫날이 일요일이 아니면 배열앞에 빈칸생성.
    if (current_firstDay != 0) {
        for (let j = 0; j < current_firstDay; j++) {
            current_dates.unshift("");
        }
    }

    //말일이 토요일이 아니면 배열뒤에 빈칸생성. (current_lastDay가 0이면 6개를 생성해야함.)
    if (current_lastDay != 6) {
        for (let k = 0; k < (6 - current_lastDay); k++) {
            current_dates.push("");
        }
    }

    current_dates.forEach((value, i) => {
        current_dates[i] = `<div class="date">${value}</div>`;
    })

    document.querySelector('.dates').innerHTML = current_dates.join('');

    //오늘 날짜 구하기
    if (month === now2.getMonth() && year === now2.getFullYear()) {
        for (let today_date of document.querySelectorAll('.date')) {
            if (+today_date.innerText === date) {
                today_date.classList.add('today');
                break;
            }
        }

    }
}
calendar();

//버튼 
var prevMonth = () => {  
    now.setMonth(now.getMonth() - 1);
    calendar();
}

var nextMonth = () => {   
    now.setMonth(now.getMonth() + 1);
    calendar();
}

var prevYear = () => {
    now.setFullYear(now.getFullYear() - 1);
    calendar();
}

var nextYear = () => {
    now.setFullYear(now.getFullYear() + 1);
    calendar();
}

