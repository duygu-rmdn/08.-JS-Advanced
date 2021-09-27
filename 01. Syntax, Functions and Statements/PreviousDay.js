function Previous(year, month, day) {
 let dateString = year + '-' + month + '-' + day;
 let date = new Date(dateString);
 date.setDate(day-1);
 console.log(date.getFullYear() + '-' + (Number(date.getMonth()) + 1) + '-' + date.getDate())
}
Previous(2016, 9, 30);
Previous(2016, 9, 20);
Previous(2016, 1, 30);