function analyzePushup(landmarks) {
  // TODO: calculate push-up posture.
  return {
    correct: true,
    feedback: "Good form",
    landmarks
  };
}

module.exports = { analyzePushup };
