'use strict';

function weatherData(){

    this.Service = {
      weekWeatherData:weekWeatherData,
      getWeekData:getWeekData,
      queryWeatherData:queryWeatherData,
      getAnayChartData:getAnayChartData
    };

    return this.Service;

    function queryWeatherData(){
      return $.get( 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Taipei,TW&units=metric&cnt=10&mode=json&appid=7cd96eb82151316259beeeee9d2fe046');
    }

    function weekWeatherData(){
      return $.get( 'http://api.openweathermap.org/data/2.5/forecast?q=Taipei,TW&units=metric&appid=7cd96eb82151316259beeeee9d2fe046');
    }

    function getAnayChartData(items){
      var data = {
        xAxis : [],
        temp:{
          day:[],
          max:[],
          min:[]
        },
        rain:[],
        clouds:[]
      };

      _.map(items,function(d){
        var day = getUtcDateAndMonth(d.dt);
        data.xAxis.push(day);
        data.temp.day.push(d.temp.day);
        data.temp.max.push(d.temp.max);
        data.temp.min.push(d.temp.min);
        data.rain.push(d.rain);
        data.clouds.push(d.clouds);
      });

      return data;

    }

    function getUtcDateAndMonth(utc){
      var date = new Date(utc* 1000);
      var month = date.getUTCMonth()+1;
      var day = date.getUTCDate();

      return month+' /'+day;
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
