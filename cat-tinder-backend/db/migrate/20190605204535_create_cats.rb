class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name
      t.integer :age
      t.string :bio
      t.string :location
      t.string :gender
      t.string :password

      t.timestamps
    end
  end
end
