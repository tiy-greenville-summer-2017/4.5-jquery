(function($){
  'use strict';

  $('#search-form').on('submit', function(e){
    e.preventDefault();
    var $searchResults = $('.search-results');

    $.ajax('https://swapi.co/api/planets/').then(function(data){
      var planets = data.results;

      planets.forEach(function(planet){
        $searchResults.prepend(`<li>${planet.name}</li>`);
      });

      forEach(planets, function(planet, index, array){
        console.log(planet);
      });

      function forEach(array, callback){
        for(var i=0; i < array.length; i++){
          callback(array[i], i, array);
        }
      }

      // for(var i=0; i < planets.length; i++){
      //   var planet = planets[i];
      //   $searchResults.prepend(`<li>${planet.name}</li>`);
      // }
    });
  });

  $('.btn').on('click', function(){
    var $button = $(this);
    $button.removeClass('btn-primary').addClass('btn-danger');
    $('.container').trigger('changeColor', ['green', 3]);
  });

  $('.container').on('changeColor', function(e, color, num){
    var $container = $(document.querySelector('.container'));
    console.log(color, num);
    $container.css('background-color', color);
  });

  $('.testing li').not('.leave-me-alone').each(function(){
    var $item = $(this);
    $item.hide();
  });


}(jQuery));
