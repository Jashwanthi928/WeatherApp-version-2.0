//Code to display day and time
function getTwelveHrs() {
    var today = new Date();
    var day = today.getDay();
    var hourlist=[12,01,02,03,04,05,06,07,08,09,10,11,12,01,02,03,04,05,06,07,08,09,10,11];
    var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var hour = today.getHours();
    var minute = today.getMinutes();
    var append = (hour >= 12)? " pm ":" am ";
      if(minute<10)
        {
           minute="0"+minute
        }
      else{minute=minute}
    var time= hourlist[hour]  +':'+ minute + append
    var day = daylist[day]
    document.getElementById('daytime').innerHTML =day+","+' '+time;
  }