function getNextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    return nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate();
}