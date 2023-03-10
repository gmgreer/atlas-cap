# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_13_201950) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "completed_routines", force: :cascade do |t|
    t.bigint "exercise_routine_id", null: false
    t.bigint "user_id", null: false
    t.datetime "completed_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["exercise_routine_id"], name: "index_completed_routines_on_exercise_routine_id"
    t.index ["user_id"], name: "index_completed_routines_on_user_id"
  end

  create_table "exercise_routines", force: :cascade do |t|
    t.bigint "exercise_id", null: false
    t.bigint "routine_id", null: false
    t.integer "sets"
    t.integer "reps"
    t.string "day"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "weight"
    t.index ["exercise_id"], name: "index_exercise_routines_on_exercise_id"
    t.index ["routine_id"], name: "index_exercise_routines_on_routine_id"
  end

  create_table "exercises", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "category"
    t.string "difficulty"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "routines", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_routines_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "age"
    t.integer "height"
    t.integer "weight"
    t.string "gender"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "completed_routines", "exercise_routines"
  add_foreign_key "completed_routines", "users"
  add_foreign_key "exercise_routines", "exercises"
  add_foreign_key "exercise_routines", "routines"
  add_foreign_key "routines", "users"
end
