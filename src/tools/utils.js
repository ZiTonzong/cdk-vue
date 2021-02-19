export function fillZeroInTime (str) {
  if (typeof str === 'number') {
    str = '' + str
  }
  if (str && typeof str === 'string') {
    str = +str
    if (str >= 0 && str < 10) {
      return '0' + str
    }
  }
  return str
}
