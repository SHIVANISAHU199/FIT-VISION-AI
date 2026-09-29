function analyzePosture(exercise, landmarks) {
  // TODO: implement exercise-specific posture rules.
  return {
    exercise,
    correct: true,
    feedback: "Posture analysis ready"
  };
}

module.exports = { analyzePosture };
