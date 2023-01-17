import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Routines from "./pages/Routines";
import RoutineShow from "./pages/RoutineShow";
import NewRoutine from "./pages/NewRoutine";
import NewExerciseRoutine from "./pages/NewExerciseRoutine";
const App = (props) => {
  const [routines, setRoutines] = useState();
  const [exercises, setExercises] = useState();
  const [exerciseRoutines, setExerciseRoutines] = useState();
  const [completedRoutines, setCompletedRoutines] = useState();

  useEffect(() => {
    readRoutines();
    readExercises();
    readExerciseRoutines();
    readCompletedRoutines();
  }, []);

  const readRoutines = () => {
    fetch("/routines")
      .then((response) => response.json())
      .then((payload) => {
        setRoutines(payload);
      })
      .catch((error) => console.log(error));
  };

  const readExercises = () => {
    fetch("/exercises")
      .then((response) => response.json())
      .then((payload) => {
        setExercises(payload);
      })
      .catch((error) => console.log(error));
  };
  const readExerciseRoutines = () => {
    fetch("/exercise_routines")
      .then((response) => response.json())
      .then((payload) => {
        setExerciseRoutines(payload);
      })
      .catch((error) => console.log(error));
  };
  const readCompletedRoutines = () => {
    fetch("/completed_routines")
      .then((response) => response.json())
      .then((payload) => {
        setCompletedRoutines(payload);
      })
      .catch((error) => console.log(error));
  };
  const createRoutine = (routine) => {
    fetch("http://localhost:3000/routines", {
      body: JSON.stringify(routine),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readRoutines())
      .catch((errors) => console.log("Routine create errors:", errors));
  };
  const createExerciseRoutine = (exerciseRoutine) => {
    fetch("http://localhost:3000/exercise_routines", {
      body: JSON.stringify(exerciseRoutine),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then(() => readExerciseRoutines())
      .catch((errors) => console.log("Routine create errors:", errors));
  };

  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              {...props}
              routines={routines}
              exercises={exercises}
              exerciseRoutines={exerciseRoutines}
              completedRoutines={completedRoutines}
            />
          }
        />
        <Route
          exact
          path="/routinesindex"
          element={
            <Routines
              {...props}
              routines={routines}
              exercises={exercises}
              exerciseRoutines={exerciseRoutines}
              completedRoutines={completedRoutines}
            />
          }
        />
        <Route
          exact
          path="/routines/:id"
          element={
            <RoutineShow
              {...props}
              routines={routines}
              exercises={exercises}
              exerciseRoutines={exerciseRoutines}
              completedRoutines={completedRoutines}
            />
          }
        />
        <Route
          exact
          path="/routinenew"
          element={
            <NewRoutine
              {...props}
              routines={routines}
              exercises={exercises}
              exerciseRoutines={exerciseRoutines}
              completedRoutines={completedRoutines}
              createRoutine={createRoutine}
            />
          }
        />
        <Route
          exact
          path="/exerciseroutinenew/:id"
          element={
            <NewExerciseRoutine
              {...props}
              routines={routines}
              exercises={exercises}
              exerciseRoutines={exerciseRoutines}
              completedRoutines={completedRoutines}
              createExerciseRoutine={createExerciseRoutine}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
