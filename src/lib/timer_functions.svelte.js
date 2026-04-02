// these were internal functions for Timer.svelte
// they are external for the unit tests

// rounds to the lower number
export function floor(number) {
  return number - (number % 1)
}

export function msToHr(ms) {
  return floor(ms / 3600000);
}

export function msToMin(ms){
  const min = floor((ms % 3600000) / 60000);
  return min < 10 ? `0${min}` : min; // '0{}' is to keep 2 digit formatting

}
export function msToSec(ms){
  const sec = floor((ms % 60000) / 1000);
  return sec < 10 ? `0${sec}` : sec; // '0{}' is to keep 2 digit formatting
}

