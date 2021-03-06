
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
  var num_blocks = 0;
  num_blocks = prompt("How many blocks per side?");
  if (num_blocks > 100) {
    alert("Enter a number under 100.");
    reset();
  }
  else if (num_blocks <= 0) {
    num_blocks = 60;
  }
  $('div').remove('.block_row');
  makeGrid(num_blocks);
}


$(document).ready(function() {
  // initialize board
  makeGrid(60);

  // animate "Clear" button
  $("#buttons").hover(function(){
    $(this).css("background-color", "#919191");
    }, function(){
    $(this).css("background-color", "#c9c9c9");
  });

  // darken block
  $(document).on('mouseover', 'div.block', function(){
    $(this).css("opacity", function() {
            return parseFloat($(this).css("opacity")) + 1;
  //  $(this).css("background-color", "black");
    });
  });

  // reset board
  $("#buttons").click(function() {
    reset();
  });


});
