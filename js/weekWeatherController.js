'use strict';
function weekWeatherController(){
  var data = new weatherData();

  data.weekWeatherData().success(function(res){

    var week = data.getWeekData(res.list);

    init();
    clickEventHandler();

    function init(){
      successHandle();
      painWeekWeatherData();
      painWeatherData(0);
      painWeatherIcon();
      painWeatherActive(1);
    }

    function clickEventHandler(){
      $('#js-forecast-day-1').click(function(){
        painWeatherData(0);
        painWeatherActive(1);
      });
      $('#js-forecast-day-2').click(function(){
        painWeatherData(1);
        painWeatherActive(2);
      });
      $('#js-forecast-day-3').click(function(){
        painWeatherData(2);
        painWeatherActive(3);
      });
      $('#js-forecast-day-4').click(function(){
        painWeatherData(3);
        painWeatherActive(4);
      });
      $('#js-forecast-day-5').click(function(){
        painWeatherData(4);
        painWeatherActive(5);
      });

    }

    function painWeekWeatherData(){
      $('#js-forecast-day-1 .weather-date').text(week[0].date);
      $('#js-forecast-day-2 .weather-date').text(week[1].date);
      $('#js-forecast-day-3 .weather-date').text(week[2].date);
      $('#js-forecast-day-4 .weather-date').text(week[3].date);
      $('#js-forecast-day-5 .weather-date').text(week[4].date);
      $('#js-forecast-day-1 .weather-temp').text(week[0].info[0].weather[0].main);
      $('#js-forecast-day-2 .weather-temp').text(week[1].info[0].weather[0].main);
      $('#js-forecast-day-3 .weather-temp').text(week[2].info[0].weather[0].main);
      $('#js-forecast-day-4 .weather-temp').text(week[3].info[0].weather[0].main);
      $('#js-forecast-day-5 .weather-temp').text(week[4].info[0].weather[0].main);
    }

    function painWeatherIcon(){
      $('#js-forecast-day-1 .weather-state').addClass('-'+week[0].info[0].weather[0].main);
      $('#js-forecast-day-2 .weather-state').addClass('-'+week[1].info[0].weather[0].main);
      $('#js-forecast-day-3 .weather-state').addClass('-'+week[2].info[0].weather[0].main);
      $('#js-forecast-day-4 .weather-state').addClass('-'+week[3].info[0].weather[0].main);
      $('#js-forecast-day-5 .weather-state').addClass('-'+week[4].info[0].weather[0].main);
    }

    function painWeatherActive(index){
      $.each([1,2,3,4,5],function(k,i){
        if(i === index){
          $('#js-forecast-day-'+i).addClass('-active');
        }else{
          $('#js-forecast-day-'+i).removeClass('-active');
        }
      });
    }

    function painWeatherData(index){
      $('#js-weather-datail-table').empty();
      $.each( week[index].info, function( key, info ) {
        var content = '<tr>'+
        '<td>'+info.time+'</td>'+
        '<td>'+info.weather[0].main+'</td>'+
        '<td>'+info.wind.speed+'</td>'+
        '<td>'+info.main.temp+'</td>'+
        '<td>'+info.clouds.all+'</td>'+
        '</tr>';
        $('#js-weather-datail-table').append(content);
      });
    }

  }).fail(function(){
    failHandle();
  });

  function successHandle(){
    $('#js-data-success').show();
    $('#js-data-fail').hide();
  }

  function failHandle(){
    $('#js-data-success').hide();
    $('#js-data-fail').show();
  }

}
