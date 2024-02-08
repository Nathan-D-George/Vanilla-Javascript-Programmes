function humanReadable (seconds) {
  let hours = seconds/(60*60);
  seconds = seconds - Math.floor(hours)*3600;
  let minutes = seconds/(60);
  seconds = seconds - Math.floor(minutes)*60; 

  if ( hours < 10 && minutes < 10 && seconds < 10){
    return `0${Math.floor(hours)}:0${Math.floor(minutes)}:0${seconds}`;
  }
  else if (hours < 10 && minutes < 10){
    return `0${Math.floor(hours)}:0${Math.floor(minutes)}:${seconds}`;
  }
  else if (hours < 10 && seconds < 10){
    return `0${Math.floor(hours)}:${Math.floor(minutes)}:0${seconds}`;
  }
  else if (minutes < 10 && seconds < 10) {
    return `${Math.floor(hours)}:0${Math.floor(minutes)}:0${seconds}`;
  }
  else if (hours < 10){
    return `0${Math.floor(hours)}:${Math.floor(minutes)}:${seconds}`;
  }
  else if (minutes < 10){
    return `${Math.floor(hours)}:0${Math.floor(minutes)}:${seconds}`;
  }
  else if (seconds < 10){
    return `${Math.floor(hours)}:${Math.floor(minutes)}:0${seconds}`;
  }
  else {
    return `${Math.floor(hours)}:${Math.floor(minutes)}:${seconds}`;
  }
}