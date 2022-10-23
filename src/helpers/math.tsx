export const getRandomNumber = (min: number, max: number) => {
  const newMin = Math.ceil(min)
  const newMax = Math.floor(max)
  return Math.floor(Math.random() * (newMax - newMin + 1) + newMin)
}

export const getRandomNumbers = (min: number, max: number, amount: number) => {
  const randomNumbers: number[] = []

  while (randomNumbers.length < amount) {
    const randomNumber = getRandomNumber(min, max)
    if (!randomNumbers.some(number => number === randomNumber)) {
      randomNumbers.push(randomNumber)
    }
  }

  return randomNumbers
}
