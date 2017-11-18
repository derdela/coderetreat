import test from 'ava'

class DeadCell {
  evolve (aliveNeighbors) {
    return aliveNeighbors === 3
            ? new AliveCell()
            : new DeadCell()
  }
}

class AliveCell {
  evolve (aliveNeighbors) {
    return (aliveNeighbors === 2 || aliveNeighbors === 3)
            ? new AliveCell()
            : new DeadCell()
  }
}

test('an alive cell dies with less than 2 alive neighbors', t => {
  const cell = new AliveCell()

  const result = cell.evolve(1)

  t.deepEqual(result, new DeadCell())
})

test('an alive cell lives with 3 alive neighbors', t => {
  const cell = new AliveCell()

  const result = cell.evolve(3)

  t.deepEqual(result, new AliveCell())
})

test('a dead cell lives with 3 alive neighbors', t => {
  const cell = new DeadCell()

  const result = cell.evolve(3)

  t.deepEqual(result, new AliveCell())
})

test('an alive cell lives with 2 alive neighbors', t => {
  const cell = new AliveCell()

  const result = cell.evolve(2)

  t.deepEqual(result, new AliveCell())
})
