
function makeGrid(num_blocks) {
  var size = 800 / num_blocks;
  //make rows
  for (i = 0; i < num_blocks; i++)
  {
    $("<div class='block_row'></div>")
          .attr("id", "row"+i)
          .css({"height": size})
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

function reset() {
  $(".block").css("opacity", 0);
}

function removeBlocks() {
  var num_blocks = prompt("How many blocks per side?");
  $('div').remove('.block_row');
  makeGrid(num_blocks);
}


$(document).ready(function() {
  // initialize board
  makeGrid(100);

  // animate "Clear" button
  $("#clear").hover(function(){
    $(this).css("background-color", "#919191");
    }, function(){
    $(this).css("background-color", "#c9c9c9");
  });

  // darken block
  $("div.block").hover(function(){
    $(this).css("opacity", function() {
            return parseFloat($(this).css("opacity")) + .1;
    });
  });

  // reset board
  $("#clear").click(function() {
    removeBlocks();
  });


});
