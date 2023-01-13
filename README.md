# README
## Cloning Setup
- git clone code
- cd code
- bundle
- yarn
- rails db:setup
- bin/dev
- code it up


## CREATE APP
- rails new app-name -d postgresql --css tailwind -T
- cd app-name
- rails db:create

## Adding RSpec
- bundle add rspec-rails
- rails generate rspec:install

## Adding React
- bundle add webpacker
- bundle add react-rails
- rails webpacker:install
- rails webpacker:install:react
- yarn add @babel/preset-react
- yarn add @rails/activestorage
- yarn add @rails/ujs
- rails generate react:install
- rails generate react:component App

## Adding Devise
- bundle add devise
- rails generate devise:install
- rails generate devise User
- rails db:migrate

## file changes
### config/environments/development.rb
```
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```
### config/initializers/devise.rb
```
# Find this line:
config.sign_out_via = :delete
# And replace it with this:
config.sign_out_via = :get
```
### type this in terminal
  rails generate controller Home index
### app/views/home/index.html.erb
```
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path, sign_in_route: new_user_session_path, sign_out_route: destroy_user_session_path
} %>
```
### app/views/layouts/application.html.erb
```
// Find this line:
<%= javascript_importmap_tags %>

// And replace it with this:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```
### config/routes.rb 
```
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root 'home#index'
```
## React Routing
### yarn add react-router-dom
### app/javascript/components/App.js
```
import { BrowserRouter, Routes, Route } from "react-router-dom"
```
## remove default styling
### views/layouts/application.html.erb
remove
``` 
class="container mx-auto mt-28 px-5 flex"
```
from
```
<body>
    <main class="container mx-auto mt-28 px-5 flex">
      <%= yield %>
    </main>
  </body>
</html>
```

## Generate Model
### create database
```
rails generate resource Exercise name:string description:string category:string difficulty:string
rails generate resource Routine name:string user:references
rails generate resource ExerciseRoutine exercise:references routine:references sets:integer reps:integer day:string
rails generate resource CompletedRoutine exercise_routine:references user:references completed_at:datetime
rails generate migration AddAgeHeightWeightToUsers age:integer height:integer weight:integer
rails db:migrate
```

### add validation for user 
```
  validates :age, numericality: { greater_than_or_equal_to: 0 }
  validates :height, numericality: { greater_than_or_equal_to: 0 }
  validates :weight, numericality: { greater_than_or_equal_to: 0 }
```
### add associations in models
```
class User < ApplicationRecord
  has_many :routines
end

class Routine < ApplicationRecord
  belongs_to :user
  has_many :exercise_routines
end

class Exercise < ApplicationRecord
  has_many :exercise_routines
end

class ExerciseRoutine < ApplicationRecord
  belongs_to :exercise
  belongs_to :routine
  has_many :completed_routines
end

class CompletedRoutine < ApplicationRecord
  belongs_to :exercise_routine
  belongs_to :user
end
```

### seeds.rb
```# Create users
user1 = User.create(email: "user1@example.com", password: "password", age: 25, height: 180, weight: 75)
user2 = User.create(email: "user2@example.com", password: "password", age: 30, height: 170, weight: 80)

# Create exercises
exercise1 = Exercise.create(name: "Squats", description: "A compound, full body exercise that primarily targets the quadriceps.", category: "Strength", difficulty: "Intermediate")
exercise2 = Exercise.create(name: "Push-ups", description: "A compound exercise that primarily targets the chest, triceps, and shoulders.", category: "Strength", difficulty: "Beginner")
exercise3 = Exercise.create(name: "Running", description: "A cardio exercise that improves cardiovascular fitness and endurance.", category: "Cardio", difficulty: "Intermediate")

# Create routines
routine1 = Routine.create(name: "Full Body Workout", user: user1)
routine2 = Routine.create(name: "Upper Body Workout", user: user2)

# Create exercise_routines
er1 = ExerciseRoutine.create(exercise: exercise1, routine: routine1, sets: 3, reps: 12, day: "Monday")
er2 = ExerciseRoutine.create(exercise: exercise2, routine: routine1, sets: 3, reps: 10, day: "Monday")
er3 = ExerciseRoutine.create(exercise: exercise3, routine: routine2, sets: 3, reps: 30, day: "Tuesday")

# Create completed_routines
CompletedRoutine.create(exercise_routine: er1, user: user1, completed_at: Date.today)
CompletedRoutine.create(exercise_routine: er2, user: user2, completed_at: Date.today)
```
## App.js
```
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Header from "./components/Header"
const App = (props) => {
  
    return (
      <BrowserRouter>
      <Header  {...props}/>
      <Routes>
      <Route exact path="/" element={<Home {...props} />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    );
  
}

export default App
```