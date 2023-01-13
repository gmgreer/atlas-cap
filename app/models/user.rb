class User < ApplicationRecord
  has_many :routines
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

         validates :age, numericality: { greater_than_or_equal_to: 0 }
         validates :height, numericality: { greater_than_or_equal_to: 0 }
         validates :weight, numericality: { greater_than_or_equal_to: 0 }
end
