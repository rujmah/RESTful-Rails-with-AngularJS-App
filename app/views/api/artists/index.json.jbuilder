json.artists @artists do |artist|
  json.id   artist.id
  json.name artist.name
  json.album_count artist.albums.count
end
