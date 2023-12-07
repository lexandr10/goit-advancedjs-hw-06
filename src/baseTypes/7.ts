/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfTheWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: string): boolean {
  if (
    day.toLocaleLowerCase() === "saturday" ||
    day.toLocaleLowerCase() === "sunday"
  ) {
    return true;
  } else {
    return false;
  }
}
