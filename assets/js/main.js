jQuery(function ($) {
    function e() {
        var e = new Date;
        e.setDate(e.getDate() + 60);
  
        var dd = e.getDate();
        var mm = e.getMonth() + 1;
        var y = e.getFullYear();
  
        var futureFormattedDate = mm + "/" + dd + "/" + y + ' 12:00:00';
  
        return futureFormattedDate;
      }
      $('.countDown').downCount({
        date: e(),
        offset: -4
      }, function () { });
      $('.EventCountDown').downCount({
        date: e(),
        offset: -4
      }, function () { });
  
});

