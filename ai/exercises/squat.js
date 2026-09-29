function analyzeSquat(landmarks) {
  // TODO: calculate squat posture from MediaPipe landmarks.
  return {
    correct: true,
    feedback: "Good form",
    landmarks
  };
}

module.exports = { analyzeSquat };
