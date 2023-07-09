var now = new Date();

//���� �ֱ�
var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var daysOfWeekKor = ["��", '��', 'ȭ', '��', '��', '��', '��'];
var dayElements = document.querySelectorAll('.day');

document.querySelector(".korean").textContent = `${"Korean"}`
dayElements.forEach(function (element, index) {
    element.textContent = daysOfWeek[index];
});

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
    if (month === (new Date()).getMonth() && year === (new Date()).getFullYear()) {
        for (let today_date of document.querySelectorAll('.date')) {
            if (+today_date.innerText === date) {
                today_date.classList.add('today');
                break;
            }
        }
    }

    //������ ǥ��
    var holidays = ["20230101", "20230121", "20230122", "20230123", "20230301", "20230505", "20230527", "20230606", "20230815", "20230928", "20230929", "20230930", "20231003", "20231009", "20231225"];
    for (let y = 0; y < holidays.length; y++) {
        if (year === parseInt(holidays[y].slice(0, 4)) && month + 1 === parseInt(holidays[y].slice(4, 6))) {
            for (let holiday_date of document.querySelectorAll('.date')) {
                if (parseInt(+holiday_date.innerText) === parseInt(holidays[y].slice(6, 8))) {
                    holiday_date.classList.add('holiday');
                    break
                }
            }
        }
    }

    //Ŭ�� �� �׵θ� ����
    
    var box = document.querySelectorAll(".date");

    box.forEach(function (date) {
        date.addEventListener('click', function () {
            if (this.classList.contains('clicked')) {
                this.classList.remove('clicked');
            } else {
                box.forEach(function (date) {
                    date.classList.remove('clicked');
                });
                this.classList.add('clicked');
                prompt("insert plan");
            }  
        });
    });
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

//select�±׿� ���� �޾Ƽ� ����
var updateYear = () => {
    var yearSelect = document.getElementById('yearSelect');
    var monthSelect = document.getElementById('monthSelect');
    var year2 = parseInt(yearSelect.value);
    var month2 = parseInt(monthSelect.value);
    now.setFullYear(year2);
    now.setMonth(month2-1);
    calendar();  
}

//���ؿ� �̹����� ����Ʈ������ ����
var setDefaultYear = () => {
    var yearSelect = document.getElementById('yearSelect');

    for (let z = 0; z < yearSelect.options.length; z++) {
        var option = yearSelect.options[z];
        if (parseInt(option.value) === (new Date()).getFullYear()) {
            option.selected = true;
            break;
        }
    }
};

var setDefaultMonth = () => {
    var monthSelect = document.getElementById('monthSelect');

    for (var zz = 0; zz < monthSelect.options.length; zz++) {
        var option = monthSelect.options[zz];
        if (parseInt(option.value) === (new Date()).getMonth()+1) {
            option.selected = true;
            break;
        }
    }
};

setDefaultYear();
setDefaultMonth();


//�ѱ���� �ٲٴ� �ڵ�(�ȵ�. ���� ��. �Ƹ� ���ڵ� �����ΰ� ����.)
var isKorean = false;

function korean() {
    isKorean = !isKorean;

    dayElements.forEach(function (element, index) {
        if (isKorean) {
            element.textContent = daysOfWeekKor[index];
        } else {
            element.textContent = daysOfWeek[index];
        }
    });
    if (isKorean) {
        document.querySelector(".korean").textContent = `${"English"}`
    } else {
        document.querySelector(".korean").textContent = `${"Korean"}`
    }

}

