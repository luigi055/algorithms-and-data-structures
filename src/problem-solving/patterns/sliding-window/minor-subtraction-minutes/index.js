function getMinorMinutesSubtraction(strArr) { 
  const minutes = strArr.map(convertFormattedTimeToMinutes)
  const sortAscending = (a,b) => a-b

  return strArr
            .map(convertFormattedTimeToMinutes)
            .sort(sortAscending)
            .reduce((current, next, i , array) =>  {
              const thirdNumber = array[i+1]
              if (thirdNumber === undefined) return Math.min(0-current, next)
              return Math.min(next-current, next-thirdNumber)
            }, 0)
}

function convertFormattedTimeToMinutes (formattedHour) {
  const splittedTime = formattedHour.split(":")
  const splittedHour = parseInt(splittedTime[0])
  const compensatedHour = formattedHour.includes("pm") ? splittedHour + 12 : splittedHour
  const hour = (compensatedHour === 12 && formattedHour.includes("am")) ? 24 : compensatedHour
  const minute = parseInt(splittedTime[1])

  return hour * 60 + minute
}

export default getMinorMinutesSubtraction
