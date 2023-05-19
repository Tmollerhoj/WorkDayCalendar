
var dt = new Date();
var currentHour = dt.getHours();
var schedule = [$('#hour-9'), $('#hour-10'), $('#hour-11'), $('#hour-12'), $('#hour-1'), $('#hour-2'), $('#hour-3'), $('#hour-4'), $('#hour-5')];
var dayEl = $('#currentDay');

// uncomment the following line and change the time to check
// currentHour = 14;
console.log(currentHour);
console.log(dt);

dayEl.text = dt;



// loop to assign classes based on currentHour
for (var i = 0; i < schedule.length; i++) {
  console.log(schedule[i]);
  if (i+9 === currentHour) {
    schedule[i].addClass("present");
  } else if (i+9 < currentHour) {
    schedule[i].addClass("past");
  } else {
    schedule[i].addClass("future");
  }
}