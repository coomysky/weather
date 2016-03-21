'use strict';

function weatherData(){

    this.Service = {
      weekWeatherData:weekWeatherData,
      getWeekData:getWeekData
    };

    return this.Service;

    function weekWeatherData(){
      return $.get( 'http://api.openweathermap.org/data/2.5/forecast?q=Taipei,TW&appid=b1b15e88fa797225412429c1c50c122a');
    }

    function getWeekData(lists){
      var week=[];
      _.map(lists,function(d){
        var date = _.split(d.dt_txt,' ');
        var info = {
                      time: date[1],
                      weather: d.weather,
                      wind:d.wind,
                      rain:d.rain,
                      main:d.main,
                      clouds:d.clouds
                    };

        var isDateObjExist = _.find(week,['date',date[0]]);
        if(isDateObjExist){
          isDateObjExist.info.push(info);
        }else{
          var item = {
            date:date[0],
            info:[info]
          };
          week.push(item);
        }
      });
      return week;
    }

}
