# RESTful Rails with AngularJS

Example app implementing [Matthew Sullivan](https://github.com/msull92)'s [excellent article](https://github.com/msull92) on creating a Rails API using some *sweet* Ruby metaprogramming - with a little AngularJS sugar on top.

## What?! What did you do?!

Written from scratch on `Rails 4.2.0.rc2` with the default cherries and stones of the `rails new` command, using Mr. Sullivan's article as a guide. 

Then added a Dashboard controller as the AngularJS-driven UI with rails using the [angularjs-rails gem](https://github.com/hiravgandhi/angularjs-rails) for AngularJS inclusion. 

## Why?! Why did you do this?!!

Basically, I don't like the over production of controllers, views, etc. with Rails - never felt very DRY when your basically doing the same thing over and over. Matt's Metaprogramming approach sat a lot better with me. 

I then wanted to complete the circle a simple NG-UI. 

## So where are the Tests, you degenerate Muppet!!?!

![Lumberg](http://i.imgur.com/rKUYnYo.gif)

I'll get to the TPS reports later - this was just a proof of concept. 

Test first, people!

## Where are the keys??!

To get started `clone`, `bundle install` and `rails c` adding a bit of data to the Artist and Album models. Then `rails s`.

## LICENSE

There is none other than the defaults that come with the dependancies. All credit to Matt S for the metaprogramming example. Don't expect this to be production ready. 