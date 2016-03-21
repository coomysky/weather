'use strict';
function analysisWeatherChart(){
  var data = new weatherData();

  data.queryWeatherData().success(function(res){
    var item = res;
    var chart_data = data.getAnayChartData(res.list);


    successCurrentHandle();
    $('#js-anay-temp').highcharts({
         chart: {
             type: 'spline'
         },
         title: {
             text: 'Monthly Average Temperature'
         },
         subtitle: {
             text: 'Source: WorldClimate.com'
         },
         xAxis: {
             categories: chart_data.xAxis
         },
         yAxis: {
             title: {
                 text: 'Temperature'
             },
             labels: {
                 formatter: function () {
                     return this.value + '°';
                 }
             }
         },
         tooltip: {
             crosshairs: true,
             shared: true
         },
         plotOptions: {
             spline: {
                 marker: {
                     radius: 4,
                     lineColor: '#666666',
                     lineWidth: 1
                 }
             }
         },
         series: [{
             name: '平均溫度',
             marker: {
                 symbol: 'square'
             },
             data: chart_data.temp.day

         }, {
             name: 'MAX',
             marker: {
                 symbol: 'diamond'
             },
             data: chart_data.temp.max
         },{
             name: 'MIN',
             marker: {
                 symbol: 'diamond'
             },
             data: chart_data.temp.min
         }]
     });

     $('#js-anay-rain').highcharts({
          chart: {
              type: 'spline'
          },
          title: {
              text: 'Monthly Average Temperature'
          },
          subtitle: {
              text: 'Source: WorldClimate.com'
          },
          xAxis: {
              categories: chart_data.xAxis
          },
          yAxis: {
              title: {
                  text: 'Temperature'
              },
              labels: {
                  formatter: function () {
                      return this.value + '°';
                  }
              }
          },
          tooltip: {
              crosshairs: true,
              shared: true
          },
          plotOptions: {
              spline: {
                  marker: {
                      radius: 4,
                      lineColor: '#666666',
                      lineWidth: 1
                  }
              }
          },
          series: [{
              name: '雨量',
              marker: {
                  symbol: 'square'
              },
              data: chart_data.rain

          }]
      });

      $('#js-anay-cloud').highcharts({
           chart: {
               type: 'spline'
           },
           title: {
               text: 'Monthly Average Temperature'
           },
           subtitle: {
               text: 'Source: WorldClimate.com'
           },
           xAxis: {
               categories: chart_data.xAxis
           },
           yAxis: {
               title: {
                   text: 'Temperature'
               },
               labels: {
                   formatter: function () {
                       return this.value + '°';
                   }
               }
           },
           tooltip: {
               crosshairs: true,
               shared: true
           },
           plotOptions: {
               spline: {
                   marker: {
                       radius: 4,
                       lineColor: '#666666',
                       lineWidth: 1
                   }
               }
           },
           series: [{
               name: '雲量',
               marker: {
                   symbol: 'square'
               },
               data: chart_data.clouds

           }]
       });

  }).fail(function(){
    failCurrentHandle();
  });

  function successCurrentHandle(){
    $('#js-analysis-success').show();
    $('#js-analysis-fail').hide();
  }

  function failCurrentHandle(){
    $('#js-analysis-success').hide();
    $('#js-analysis-fail').show();
  }


}
