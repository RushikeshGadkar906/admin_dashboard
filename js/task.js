// Menu bar
$("#togglebutton").click(function () {
  
  $("span", this).toggleClass("fas fa-stream");
  $("span", this).toggleClass("fas fa-times");
  $('.sidebar header button').attr('style', 'margin:0;');

   $(".sidebar").toggleClass('largeSidebarWidth');
   $("section").toggleClass('topBarToggle');
   $(".websiteName").toggleClass("wbTag");
   $(".menuName").toggleClass("menuNameRmv");
});
 

// sub top Menu bar

// Notification box open
$(function(){
  $(".noti-op").click(function(){
    $(".notification-box").toggle();
    $(".setting-box").hide();

  });
});

// Setting box open
$(function(){
  $(".setting-op").click(function(){
    $(".setting-box").toggle();
    $(".notification-box").hide();

  });
});

$(window).resize(function() {

  if ($(window).width() < 767) {
    $(".sidebar").addClass('largeSidebarWidth');
    $("section").addClass('topBarToggle');
    $(".websiteName").addClass("wbTag");
    $(".menuName").addClass("menuNameRmv");
  }

  if ($(window).width() < 487) {
    $('.topBar').attr('style', 'height:100px;');
    $(".notification-section").addClass("new-notification-section");
    $(".notification-section").removeClass("notification-section");
    $(".setting-section").addClass("new-setting-section");
    $(".setting-section").removeClass("setting-section");
    
    
  

  }
  else{
    $('.topBar').attr('style', 'height:44px;');
    $('.global-search').attr('style','width:221px');

  }
}).resize();


// Tbale msg Div ------------
$(function(){
  $(".msg-box").click(function(){
    $(this).next(".talkbubble").toggle('slow');
  });
});
$(function(){
  $(".msg-box1").click(function(){
    $(this).next(".talkbubbleLeft").toggle('slow');
  });
});

// Chart Page ----------------------------------
// 1st chart 
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer1",
  {
    title:{
      // text: "Olympic Medals of all Times (till 2012 Olympics)"
    },
    axisY: {
      title: "Medals won",
      maximum: 1010
    },
    data: [
    {
      type: "bar",
      showInLegend: true,
      legendText: "Gold",
      color: "gold",
      dataPoints: [
      { y: 198, label: "Italy"},
      { y: 201, label: "China"},
      { y: 202, label: "France"},
      { y: 236, label: "Great Britain"},
      { y: 395, label: "Soviet Union"},
      { y: 957, label: "USA"}
      ]
    },
    {
      type: "bar",
      showInLegend: true,
      legendText: "Silver",
      color: "silver",
      dataPoints: [
      { y: 166, label: "Italy"},
      { y: 144, label: "China"},
      { y: 223, label: "France"},
      { y: 272, label: "Great Britain"},
      { y: 319, label: "Soviet Union"},
      { y: 759, label: "USA"}
      ]
    },
    {
      type: "bar",
      showInLegend: true,
      legendText: "Bronze",
      color: "#DCA978",
      dataPoints: [
      { y: 185, label: "Italy"},
      { y: 128, label: "China"},
      { y: 246, label: "France"},
      { y: 272, label: "Great Britain"},
      { y: 296, label: "Soviet Union"},
      { y: 666, label: "USA"}
      ]
    }
    ]
  });

chart.render();

var chart = new CanvasJS.Chart("chartContainer2",
{
  animationEnabled: true, 
  animationDuration: 2000,   //change to 1000, 500 etc
  title:{
    // text: "Chart with Animation Enabled"
  },
  data: [
  {
    type: "column",
    dataPoints: [
      { x: 10, y: 71 },
      { x: 20, y: 55 },
      { x: 30, y: 50 },
      { x: 40, y: 65 },
      { x: 50, y: 95 },
      { x: 60, y: 68 },
      { x: 70, y: 28 },
      { x: 80, y: 34 },
      { x: 90, y: 14 }
    ]
  }
  ]
});
chart.render();

var chart = new CanvasJS.Chart("chartContainer3",
{
  theme: "light2",
  title:{
    // text: "Gaming Consoles Sold in 2012"
  },		
  data: [
  {       
    type: "pie",
    showInLegend: true,
    toolTipContent: "{y} - #percent %",
    yValueFormatString: "#,##0,,.## Million",
    legendText: "{indexLabel}",
    dataPoints: [
      {  y: 4181563, indexLabel: "PlayStation 3" },
      {  y: 2175498, indexLabel: "Wii" },
      {  y: 3125844, indexLabel: "Xbox 360" },
      {  y: 1176121, indexLabel: "Nintendo DS"},
      {  y: 1727161, indexLabel: "PSP" },
      {  y: 4303364, indexLabel: "Nintendo 3DS"},
      {  y: 1717786, indexLabel: "PS Vita"}
    ]
  }
  ]
});
chart.render();

var chart = new CanvasJS.Chart("chartContainer4",
{

  title:{
  // text: "Earthquakes - per month"
  },
   data: [
  {
    type: "line",

    dataPoints: [
    { x: new Date(2012, 00, 1), y: 450 },
    { x: new Date(2012, 01, 1), y: 414 },
    { x: new Date(2012, 02, 1), y: 520 },
    { x: new Date(2012, 03, 1), y: 460 },
    { x: new Date(2012, 04, 1), y: 450 },
    { x: new Date(2012, 05, 1), y: 500 },
    { x: new Date(2012, 06, 1), y: 480 },
    { x: new Date(2012, 07, 1), y: 480 },
    { x: new Date(2012, 08, 1), y: 410 },
    { x: new Date(2012, 09, 1), y: 500 },
    { x: new Date(2012, 10, 1), y: 480 },
    { x: new Date(2012, 11, 1), y: 510 }
    ]
  }
  ]
});

chart.render();
}


// 2nd chart 

 