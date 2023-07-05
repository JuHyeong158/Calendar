// 현재 날짜 객체 생성
var currentDate = new Date();

// 현재 년도와 월을 가져옴
var year = currentDate.getFullYear();
var month = currentDate.getMonth();

// 해당 월의 말일을 계산
var lastDay = new Date(year, month + 1, 0).getDate();

// 1부터 lastDay까지의 값을 저장할 배열
var arr = [];

// 1부터 lastDay까지의 값을 배열에 저장
for (var i = 1; i <= lastDay; i++) {
  arr.push(i);
}




var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 앞에 6개의 공백 추가
for (var i = 0; i < 6; i++) {
  arr.unshift("");
}

// 뒤에 6개의 공백 추가
for (var i = 0; i < 6; i++) {
  arr.push("");
}
