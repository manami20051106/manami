function isLeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
       return true; // うるう年
   } else {
       return false; // 平年
   }
}
// ユーザーから年を入力してもらう
let year = prompt("西暦年を入力してください:");
year = parseInt(year); // 数字に変換
if (isNaN(year)) {
   alert("正しい年を入力してください。");
} else {
   if (isLeapYear(year)) {
       alert(year + "年はうるう年です。");
   } else {
       alert(year + "年は平年です。");
   }
}
