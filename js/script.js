// https://plus.google.com/106600757771848447744/posts/TxoVir91SoF
var RATIO = 0.06;
// I measured this. It depends on a lot of variables
var GRAMS_PER_TBSP = 6.3;

$('#water-slider').change(function(){
    $('#water-input').val($(this).val());
    $('#water-input').change();
});

$('#water-input').change(function(){
    $('#water-out').text($(this).val());
    var coffee = $(this).val() * RATIO;
    coffee = coffee.toFixed(1);
    $('#coffee-out').text(coffee);

    var tbsp = coffee / GRAMS_PER_TBSP;
    tbsp = tbsp.toFixed(1);
    $('#tbsp').text(tbsp);
});

$('#water-slider').val(1000);
$('#water-input').val(1000);
$('#water-input').change();





