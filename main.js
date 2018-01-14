function countDays(d){
  var currentDate = new Date();
  if (d.getFullYear() < currentDate.getFullYear()) {
    return "The day is in the past!";
  } else if (d.getDate() == currentDate.getDate()) {
    return "Today is the day!";
  } else {
    return Math.round((d.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)) + " days";
  }
}

console.log(countDays(new Date("February 28, 2016")));
