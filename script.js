
function makeGrid() {
  var num_blocks = 64;
  var size = ((800 - 2*num_blocks) / num_blocks);
  //make rows
  for (i = 0; i < num_blocks; i++)
  {
    $("<div class='block_row'></div>")
          .attr("id", "row"+i)
          .css({"height": 800 / num_blocks})
          .appendTo("#container");
    //make cols
    for (j = 0; j < num_blocks; j++)
    {
      $("<div class='block'></div>")
          .css({"width" : size, "height" : size})
          .appendTo("#row"+i);
    }
  }
}

$(document).ready(function() {
  // initialize board
  makeGrid();

  // animate "Clear" button
  $("#clear").hover(function(){
    $(this).css("background-color", "#919191");
    }, function(){
    $(this).css("background-color", "#c9c9c9");
  });



});
