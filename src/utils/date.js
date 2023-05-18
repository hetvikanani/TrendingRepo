export function getDatesFromToday(days) {
  var currentDate = new Date();
  var targetDate = new Date(currentDate.getTime() - days * 24 * 60 * 60 * 1000);

  return formatDate(targetDate);
}

export function formatDate(date) {
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 1).toString().padStart(2, "0");
  var day = date.getDate().toString().padStart(2, "0");
  return year + "-" + month + "-" + day;
}

export function convertTimestamp(timestamp) {
  const currentTime = new Date();
  const targetTime = new Date(timestamp);

  const timeDifference = currentTime - targetTime;
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));

  if (minutesDifference < 1) {
    return "Just now";
  } else if (minutesDifference === 1) {
    return "1 minute ago";
  } else if (minutesDifference === 2) {
    return "2 minutes ago";
  } else if (minutesDifference < 60) {
    return minutesDifference + " minutes ago";
  } else if (hoursDifference === 1) {
    return "1 hour ago";
  } else if (hoursDifference < 24) {
    return hoursDifference + " hours ago";
  } else {
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference + " days ago";
  }
}
