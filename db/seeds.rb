# Create users
user1 = User.create(email: "user1@example.com", password: "password", age: 25, height: 180, weight: 75, gender: "female")
user2 = User.create(email: "user2@example.com", password: "password", age: 30, height: 170, weight: 80, gender: "male")

# Create exercises
exercise1 = Exercise.create(name: "Squats", description: "A compound, full body exercise that primarily targets the quadriceps.", category: "Strength", difficulty: "Intermediate" image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.svg" )
exercise2 = Exercise.create(name: "Push-ups", description: "A compound exercise that primarily targets the chest, triceps, and shoulders.", category: "Strength", difficulty: "Beginner" image: "https://www.fitnesseducation.edu.au/wp-content/uploads/2017/03/Pushups.jpg")
exercise3 = Exercise.create(name: "Running", description: "A cardio exercise that improves cardiovascular fitness and endurance.", category: "Cardio", difficulty: "Intermediate" image: "https://res.cloudinary.com/im2015/image/upload/w_1200,h_1200,c_fill,g_center//blog/running_cover_1.jpg")

# Create routines
routine1 = Routine.create(name: "Full Body Workout", user: user1.id)
routine2 = Routine.create(name: "Upper Body Workout", user: user2.id)

# Create exercise_routines
er1 = ExerciseRoutine.create(exercise: exercise1, routine: routine1.id, sets: 3, reps: 12, weight: 100, day: "Monday")
er2 = ExerciseRoutine.create(exercise: exercise2, routine: routine1.id, sets: 3, reps: 10, weight: 150,day: "Monday")
er3 = ExerciseRoutine.create(exercise: exercise3, routine: routine2.id, sets: 3, reps: 30, weight: 200,day: "Tuesday")

# Create completed_routines
CompletedRoutine.create(exercise_routine: er1, user: user1.id, completed_at: Date.today)
CompletedRoutine.create(exercise_routine: er2, user: user2.id, completed_at: Date.today)
