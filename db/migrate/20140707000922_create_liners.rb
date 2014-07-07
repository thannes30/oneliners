class CreateLiners < ActiveRecord::Migration
  def change
    create_table :liners do |t|
      t.string :oneliner

      t.timestamps
    end
  end
end
