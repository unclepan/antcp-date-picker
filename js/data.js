(function(){
  var datepicker = {};
  datepicker.getMonthData = function(year, month){//获取一个月的数据
    var ret = [];
    if(!year || !month){//没有传入年份和月份，默认以当前年月
      var today = new Date();
      year = today.getFullYear();
      month = today.getMonth() + 1;
    }
    var firstDay = new Date(year, month - 1, 1);//这个月的第一天
    var firstDayWeekDay = firstDay.getDay();//这个月的第一天是在星期几
    if (firstDayWeekDay === 0) firstDayWeekDay = 7;

    year = firstDay.getFullYear();
    month = firstDay.getMonth() + 1;

    var lastDayOfLastMonth = new Date(year, month - 1, 0);//上个月的最后一天
    var lastDateOfLastMonth = lastDayOfLastMonth.getDate();//上个月最后一天的日期单独存储

    var preMonthDayCount = firstDayWeekDay - 1; //第一行需要展示上个月几天

    var lastDay = new Date(year, month, 0);//这个月的最后一天
    var lastDate = lastDay.getDate();

    for(var i = 0; i < 7*6; i++){//通过循环得到这一个月的数据
      var date = i + 1 - preMonthDayCount;
      var showDate = date;
      var thisMonth = month;
      if(date <= 0 ){
        //上个月
        thisMonth = month - 1;
        showDate = lastDateOfLastMonth + date;
      }else if (date > lastDate){
        //下个月
        thisMonth = month + 1;
        showDate = showDate - lastDate;
      }
      if(thisMonth === 0) thisMonth = 12;
      if(thisMonth === 13) thisMonth = 1;

      ret.push({
        month:thisMonth,
        date:date,
        showDate:showDate
      });
    };
    return {
      year: year,
      month: month,
      days: ret
    };
  };
  window.datepicker = datepicker;

})();
