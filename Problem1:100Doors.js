function getFinalOpenedDoors(numDoors) {
    let doors = new Array(numDoors).fill(false)
    let result = []

    for (let i = 1; i <= 100; i++) {
        for (let j = 0; j < doors.length; j++) {
            if ((j + 1) % i === 0) {
                doors[j] = !doors[j]
            }
        }
    }

    for (let i = 0; i < doors.length; i++) {
        if (doors[i])
            result.push(i + 1)
    }

    return result
}

getFinalOpenedDoors(100)
