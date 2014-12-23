class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :title
      t.belongs_to :artist, index: true

      t.timestamps null: false
    end
    add_foreign_key :albums, :artists
  end
end
