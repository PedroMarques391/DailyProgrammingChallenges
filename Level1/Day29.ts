const releasesNumbers: number[] = []

function dice (releases: number) {
  for (let i = 0; i < releases; i++) {
    releasesNumbers.push(Math.ceil(Math.random() * 6))
  }
  console.log(releasesNumbers.join(' '))
}

dice(5)
