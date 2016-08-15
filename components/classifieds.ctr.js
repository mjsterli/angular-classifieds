(function() {

  "use strict";

  angular.module("ngClassifieds").controller("classifiedsCtrl", function($scope) {

    $scope.classifieds = [
      {
        id: "1",
        title: "Beautiful Home",
        description: "I love the feel of this interior. So open, yet warm and cozy. #interiordesign #design #modern #homedesign #productdesign #decoration #interiordesign #decor #home﻿",
        price: "1000000",
        posted: "2015-10-24",
        contact: {
          name: "Pokemon Go",
          phone: "(800) 254-8796",
          email: "nutritionfacts@facts.org"
        },
        categories: [
          "Home", "Furniture"
        ],
        image: "http://avatarfiles.alphacoders.com/251/25183.png",
        views: 546
      }, {
        id: "2",
        title: " Another Beautiful Home",
        description: "Lakeside Cabin",
        price: "14400000",
        posted: "2005-05-14",
        contact: {
          name: "Susie Reynolds",
          phone: "(800) 147-5428",
          email: "foodtv@foodnetwork.org"
        },
        categories: [
          "Home", "Log Cabin"
        ],
        image: "http://avatarfiles.alphacoders.com/273/27371.png",
        views: 489
      }, {
        id: "3",
        title: "Federation",
        description: "This is the Federation of planets",
        price: "4894",
        posted: "1998-11-04",
        contact: {
          name: "Mama",
          phone: "(800) 547-4568",
          email: "rio@brazil.org"
        },
        categories: [
          "Home", "Furniture", "Animal"
        ],
        image: "http://avatarfiles.alphacoders.com/421/42176.jpg",
        views: 359
      }, {
        id: "4",
        title: "Nutrie Rat",
        description: "Louisiana Proud",
        price: "7895432",
        posted: "2016-01-01",
        contact: {
          name: "Backwoods Joe",
          phone: "(800) 4568",
          email: "swamp@mybackyard.la.gov"
        },
        categories: [
          "Home", "Animal"
        ],
        image: "http://avatarfiles.alphacoders.com/251/25192.jpg",
        views: 789
      }];

      $scope.message = "Hello, World!";
    })
  })();
