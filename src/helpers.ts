function getPrimeNumbers(n: number): number[] {
  const primeNumbers: number[] = [];
  next:
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < primeNumbers.length; j++) {
      if (i % primeNumbers[j] === 0) continue next;
    }
    primeNumbers.push(i);
  }
  return primeNumbers;
}

export function getRandomPrimeNumbers(max: number, numberOfPairs: number): number[] {
  const pr = getPrimeNumbers(max);
  const partOne: number[] = [];
  while(partOne.length < numberOfPairs) {
    partOne.push(pr.splice(Math.floor(Math.random()*pr.length),1)[0])
  }
  const pairs = [...partOne, ...partOne];
  const result: number[] = []
  while(result.length < numberOfPairs*2) {
    let item = pairs.splice(Math.floor(Math.random()*pairs.length),1)[0]
    result.push(item)
  }
  return result
}
