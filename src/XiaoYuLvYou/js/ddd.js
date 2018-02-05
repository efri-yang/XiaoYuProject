var prevY,prevM,prevD;

var prevPrice,currDate,price; 
  laydate.render({
    elem: '#test-n1',
    showBottom:false,
    calendar: false,
    min: '2018-1-15',
  	max: '2020-1-31',
    position: 'static',
    range:false,
    value: new Date(),
    ready:function(date){
    	prevY=date.year;
    	prevM=date.month;
    	prevD=date.date;
      ajaxPrice(date);
    },
    done: function(value, date, endDate){
    	//上一个月 下一个月 是不会触发done
    	
    },
   
    change: function(value, date, endDate){
    	//然后
      currYM=[date.year,date.month].join("-");
      prevYM=[prevY,prevM].join("-");
      if(currYM==prevYM && prevPrice){
          for(var i=0;i<prevPrice.length;i++){
            $("#test-n1 tbody td").not(".laydate-day-prev").not(".laydate-day-next").eq(i).append('<p><span>￥</span>'+prevPrice[i]+'</p>').attr("data-price",prevPrice[i]);
          }
      }else{
        ajaxPrice(date);
      }
      //获取价格
      var price=$("#test-n1 .layui-this").attr("data-price");

    }
  });


  function ajaxPrice(date){
  	$.ajax({
  		url: 'http://wnworld.com/api/date1.php',
  		type:"POST",
  		dataType: 'json',
      data:{date:[prevY,prevM,prevD].join("-")},
  		success:function(data){
        prevPrice=data;
        prevY=date.year,
        prevM=date.month,
        prevD=date.date;
        for(var i=0;i<data.length;i++){
          $("#test-n1 tbody td").not(".laydate-day-prev").not(".laydate-day-next").eq(i).append('<p><span>￥</span>'+data[i]+'</p>').attr("data-price",data[i])
        }
  		}
  	}) 	
  }

