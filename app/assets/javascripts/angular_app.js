// app/assets/javascripts/angular_app.js
var app = angular.module('artistsApp', ['ngRoute', 'ngResource']);

app.factory('Album', function ($resource) {
  return $resource('/api/albums/:album_id', 
    {album_id: '@id'}
  );
});

app.factory('Artist', function ($resource) {
  return $resource('/api/artists/:artist_id', 
    {artist_id: '@id'}
  );
});

app.controller('ArtistCtrl', function ($scope, $routeParams, Artist, Album) {
  $scope.test_string = 'here is a test string';

  Artist.get({}, function (data) {
    $scope.artists = data.artists;
    // console.log(data.artists);
  });

  $scope.get_albums = function (artist_id) {
    Album.get({artist_id: artist_id}, function (data) {
      $scope.show_albums = true;
      $scope.albums = data.albums;
    });
  }
  
});

