
$(function(){
  $("#content").hide();

});
var badgeArray = [
  {
    game: "Royal Ruckus",
    badges: ["Approximate Beatdown", "Huge Money", "Taste the Rainbow", "Done & Dungeon", "Let's Rage"]
  },
  {
    game: "Cake's Tough Break",
    badges: ["Nip It!", "Yay BMO!", "One Fast Cat", "Hang In There, Baby", "Piece of Cake", "Super Amadeus"]
  },
  {
    game: "Lemon Break",
    badges: ["Lemon Aid", "Sweet Kicks", "BMO Hope", "Elephant Prowess", "Unacceptable Escape"]
  },
  {
    game: "Finn & Bones",
    badges: ["Rock Family Tree", "Clash of Bones", "Chemistry 101", "Mix Master", "Kiss of Death"]
  }
];

// turns the json into a string
var jsonData = JSON.stringify(badgeArray);

// onload this is called and to send post to the php function inside the inc folder
$.ajax({
  url: "inc/display_badge.php",
  type: "POST",
  dataType: 'json',
  data: {data: jsonData},
  success: function (response) {
    var objData = JSON.parse(response.data);
    // you will get response from your php page (what you echo or print)
    var game = '';

    //loop through data to get output for html
    $.each(objData,function(i, value){

      game = JSON.parse(JSON.stringify(value.game));
      game = game.replace(/'/g, "`");
      game = "\'" + game + "\'"; // had to add this to create a string variable to work with the openGame function

      // gets the tabs
      $('#tabs').append('<button class="tablinks" onclick="openGame(event, '+game+')">'+ value.game + '</button>');
      var $ul = '<div id='+game+' class="tabcontent">' +
          '<h1>'+value.game+'</h1>' +
          '<ul>';
        $.each(value.badges, function(index, obj){

          $ul += '<li>'+ obj +'</li>';

        });

      $ul += '</ul>' +
          '</div>';

     // console.log($ul);
      $('#content').append($ul);

    });

  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log(textStatus, errorThrown);
  }


});


/* Javascript use to create the dynamic div content when clicked */
function openGame(evt, gameName) {

  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";

  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened
  // the tab
  document.getElementById(gameName).style.display = "block";
  evt.currentTarget.className += " active";
  $("#content").show();

}