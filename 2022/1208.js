const date = new Date();

const firstDay =
new Date(date.getFullYear(),date.getMonth(),1);
const lastDay =
new Date(date.getFullYear(),date.getMonth()+1,0);
const twoDayslater = new Date(now.getFullYear(),now.getMonth(),now.getDate() +2);
twoDayslater.toDateString();