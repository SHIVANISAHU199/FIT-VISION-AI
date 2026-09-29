function createRepCounter() {
  let reps = 0;

  return {
    getReps: () => reps,
    increment: () => {
      reps += 1;
      return reps;
    },
    reset: () => {
      reps = 0;
    }
  };
}

module.exports = { createRepCounter };
