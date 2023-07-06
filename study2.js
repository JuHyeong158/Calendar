var now = new Date();
var now2 = new Date();
var calendar = () => {
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var stringmonth = now.toLocaleString('en-US', { month: 'short' })

    document.querySelector('.year').textContent = `${year}`
    document.querySelector('.month').textContent = `${stringmonth}`

    //�̹� ���� ù���� ������ ������ ���ϰ� �̹� ���� �� ��ĥ���� ����.
    var current_lastDate = new Date(year, month + 1, 0).getDate();
    var current_lastDay = new Date(year, month + 1, 0).getDay();
    var current_firstDay = new Date(year, month, 1).getDay();

    var current_dates = [];

    //�̹� �� ������ 31���̸� 1���� 31���� �迭�� ��.
    for (let i = 0; i < current_lastDate; i++) {
        current_dates.push(i + 1);
    }

    //ù���� �Ͽ����� �ƴϸ� �迭�տ� ��ĭ����.
    if (current_firstDay != 0) {
        for (let j = 0; j < current_firstDay; j++) {
            current_dates.unshift("");
        }
    }

    //������ ������� �ƴϸ� �迭�ڿ� ��ĭ����. (current_lastDay�� 0�̸� 6���� �����ؾ���.)
    if (current_lastDay != 6) {
        for (let k = 0; k < (6 - current_lastDay); k++) {
            current_dates.push("");
        }
    }

    current_dates.forEach((value, i) => {
        current_dates[i] = `<div class="date">${value}</div>`;
    })

    document.querySelector('.dates').innerHTML = current_dates.join('');

    //���� ��¥ ���ϱ�
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

//��ư 
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

