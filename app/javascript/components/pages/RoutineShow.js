import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const RoutineShow = ({
  routines,
  exercises,
  exerciseRoutines,
  completedRoutines,
  logged_in,
}) => {
  const { id } = useParams();
  const currentRoutine = routines?.find((routine) => routine.id === +id);
  console.log(exerciseRoutines);
  return (
    <div className="px-10 flex flex-col items-center gap-5 lg:flex-row flex-wrap lg:items-start lg:justify-center">
      {logged_in && (
        <NavLink
          to={`/exerciseroutinenew/${id}`}
          className="text-black border rounded-2xl border-black bg-[#D9D9D9] bg-opacity-40 p-3 mt-5"
        >
          Create New Exercise Routine
        </NavLink>
      )}
      <div className="flex flex-col justify-center items-center gap-6 ">
        {exerciseRoutines
          ?.filter((item) => item.routine_id === +id)
          .filter((item) => item.day === "Monday").length > 0 && (
          <h1 className="text-2xl underline">Monday</h1>
        )}
        {exerciseRoutines
          ?.filter((item) => item.routine_id === +id)
          .filter((item) => item.day === "Monday")
          .map((item, index) => (
            <div key={index} className="flex gap-6">
              {exercises
                ?.filter((ex) => ex.id === item.exercise_id)
                .map((exerc, index) => (
                  <div className="flex flex-col gap-2 items-center">
                    <h4 key={index}>{exerc.name}</h4>
                    <img
                      src={
                        exerc.image
                          ? exerc.image
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                      }
                      alt={exerc.name}
                      height={200}
                      width={200}
                    />
                  </div>
                ))}
              <div className="flex flex-col justify-center items-center gap-2">
                <p>Sets: {item.sets}</p>
                <p>Reps: {item.reps}</p>
                <p>Weight: {item.weight}</p>
                <button class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        {exerciseRoutines
          ?.filter((item) => item.routine_id === +id)
          .filter((item) => item.day === "Tuesday").length > 0 && (
          <h1 className="text-2xl underline">Tuesday</h1>
        )}
        {exerciseRoutines
          ?.filter((item) => item.routine_id === +id)
          .filter((item) => item.day === "Tuesday")
          .map((item, index) => (
            <div key={index} className="flex gap-6">
              {exercises
                ?.filter((ex) => ex.id === item.exercise_id)
                .map((exerc, index) => (
                  <div className="flex flex-col gap-2 items-center">
                    <h4 key={index}>{exerc.name}</h4>
                    <img
                      src={
                        exerc.image
                          ? exerc.image
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                      }
                      alt={exerc.name}
                      height={200}
                      width={200}
                    />
                  </div>
                ))}
              <div className="flex flex-col justify-center items-center gap-2">
                <p>Sets: {item.sets}</p>
                <p>Reps: {item.reps}</p>
                <p>Weight: {item.weight}</p>
                <button class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        {exerciseRoutines
          ?.filter((item) => item.routine_id === +id)
          .filter((item) => item.day === "Wednesday").length > 0 && (
          <h1 className="text-2xl underline">Wednesday</h1>
        )}
        {exerciseRoutines
          ?.filter((item) => item.routine_id === +id)
          .filter((item) => item.day === "Wednesday")
          .map((item, index) => (
            <div key={index} className="flex gap-6">
              {exercises
                ?.filter((ex) => ex.id === item.exercise_id)
                .map((exerc, index) => (
                  <div className="flex flex-col gap-2 items-center">
                    <h4 key={index}>{exerc.name}</h4>
                    <img
                      src={
                        exerc.image
                          ? exerc.image
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                      }
                      alt={exerc.name}
                      height={200}
                      width={200}
                    />
                  </div>
                ))}
              <div className="flex flex-col justify-center items-center gap-2">
                <p>Sets: {item.sets}</p>
                <p>Reps: {item.reps}</p>
                <p>Weight: {item.weight}</p>
                <button class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        {exerciseRoutines
          ?.filter((item) => item.routine_id === +id)
          .filter((item) => item.day === "Thursday").length > 0 && (
          <h1 className="text-2xl underline">Thursday</h1>
        )}
        {exerciseRoutines
          ?.filter((item) => item.routine_id === +id)
          .filter((item) => item.day === "Thursday")
          .map((item, index) => (
            <div key={index} className="flex gap-6">
              {exercises
                ?.filter((ex) => ex.id === item.exercise_id)
                .map((exerc, index) => (
                  <div className="flex flex-col gap-2 items-center">
                    <h4 key={index}>{exerc.name}</h4>
                    <img
                      src={
                        exerc.image
                          ? exerc.image
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                      }
                      alt={exerc.name}
                      height={200}
                      width={200}
                    />
                  </div>
                ))}
              <div className="flex flex-col justify-center items-center gap-2">
                <p>Sets: {item.sets}</p>
                <p>Reps: {item.reps}</p>
                <p>Weight: {item.weight}</p>
                <button class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        {exerciseRoutines
          ?.filter((item) => item.routine_id === +id)
          .filter((item) => item.day === "Friday").length > 0 && (
          <h1 className="text-2xl underline">Friday</h1>
        )}
        {exerciseRoutines
          ?.filter((item) => item.routine_id === +id)
          .filter((item) => item.day === "Friday")
          .map((item, index) => (
            <div key={index} className="flex gap-6">
              {exercises
                ?.filter((ex) => ex.id === item.exercise_id)
                .map((exerc, index) => (
                  <div className="flex flex-col gap-2 items-center">
                    <h4 key={index}>{exerc.name}</h4>
                    <img
                      src={
                        exerc.image
                          ? exerc.image
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                      }
                      alt={exerc.name}
                      height={200}
                      width={200}
                    />
                  </div>
                ))}
              <div className="flex flex-col justify-center items-center gap-2">
                <p>Sets: {item.sets}</p>
                <p>Reps: {item.reps}</p>
                <p>Weight: {item.weight}</p>
                <button class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        {exerciseRoutines
          ?.filter((item) => item.routine_id === +id)
          .filter((item) => item.day === "Saturday").length > 0 && (
          <h1 className="text-2xl underline">Saturday</h1>
        )}
        {exerciseRoutines
          ?.filter((item) => item.routine_id === +id)
          .filter((item) => item.day === "Saturday")
          .map((item, index) => (
            <div key={index} className="flex gap-6">
              {exercises
                ?.filter((ex) => ex.id === item.exercise_id)
                .map((exerc, index) => (
                  <div className="flex flex-col gap-2 items-center">
                    <h4 key={index}>{exerc.name}</h4>
                    <img
                      src={
                        exerc.image
                          ? exerc.image
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                      }
                      alt={exerc.name}
                      height={200}
                      width={200}
                    />
                  </div>
                ))}
              <div className="flex flex-col justify-center items-center gap-2">
                <p>Sets: {item.sets}</p>
                <p>Reps: {item.reps}</p>
                <p>Weight: {item.weight}</p>
                <button class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        {exerciseRoutines
          ?.filter((item) => item.routine_id === +id)
          .filter((item) => item.day === "Sunday").length > 0 && (
          <h1 className="text-2xl underline">Sunday</h1>
        )}
        {exerciseRoutines
          ?.filter((item) => item.routine_id === +id)
          .filter((item) => item.day === "Sunday")
          .map((item, index) => (
            <div key={index} className="flex gap-6">
              {exercises
                ?.filter((ex) => ex.id === item.exercise_id)
                .map((exerc, index) => (
                  <div className="flex flex-col gap-2 items-center">
                    <h4 key={index}>{exerc.name}</h4>
                    <img
                      src={
                        exerc.image
                          ? exerc.image
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
                      }
                      alt={exerc.name}
                      height={200}
                      width={200}
                    />
                  </div>
                ))}
              <div className="flex flex-col justify-center items-center gap-2">
                <p>Sets: {item.sets}</p>
                <p>Reps: {item.reps}</p>
                <p>Weight: {item.weight}</p>
                <button class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RoutineShow;
