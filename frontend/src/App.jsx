import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <header className="navbar">
        <h1>FitVision AI</h1>
        <nav>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("dashboard")}>Dashboard</button>
          <button onClick={() => setPage("workout")}>Workout</button>
          <button onClick={() => setPage("progress")}>Progress</button>
        </nav>
      </header>

      <main className="container">
        {page === "home" && (
          <section className="hero">
            <h2>AI-Based Fitness Monitoring</h2>
            <p>
              Monitor exercise posture, count repetitions and receive
              real-time feedback.
            </p>
            <button className="primary" onClick={() => setPage("dashboard")}>
              Get Started
            </button>
          </section>
        )}

        {page === "dashboard" && (
          <section>
            <h2>Dashboard</h2>
            <div className="cards">
              <div className="card">
                <h3>Exercises</h3>
                <p>Squat, Push-up, Lunge</p>
              </div>
              <div className="card">
                <h3>Today's Workout</h3>
                <p>Start your exercise session.</p>
              </div>
            </div>
            <button className="primary" onClick={() => setPage("workout")}>
              Start Workout
            </button>
          </section>
        )}

        {page === "workout" && (
          <section>
            <h2>Workout</h2>
            <div className="camera-box">
              <p>Camera / MediaPipe module will be connected here.</p>
            </div>
            <p className="feedback">Feedback: Ready to start</p>
          </section>
        )}

        {page === "progress" && (
          <section>
            <h2>Progress</h2>
            <div className="cards">
              <div className="card"><h3>Total Reps</h3><p>0</p></div>
              <div className="card"><h3>Workouts</h3><p>0</p></div>
              <div className="card"><h3>Progress</h3><p>Start your first workout.</p></div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
