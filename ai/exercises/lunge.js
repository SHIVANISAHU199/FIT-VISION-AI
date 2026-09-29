function analyzeLunge(landmarks) {
  // TODO: calculate lunge posture.
  return {
    correct: true,
    feedback: "Good form",
    landmarks
  };
}

module.exports = { analyzeLunge };
