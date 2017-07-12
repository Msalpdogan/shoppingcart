/* Set rates + misc */
var taxRate = 0.18;
var shippingRate = 150.00; 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});



/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /*  */
  if  (subtotal>2000)
  {
    var tax = subtotal*0.18 ;
  }
  
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}
//Quantity

/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */

  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime); 
    });
  });  
}
function removeItem(removeButton)
{
    var productRow =$(removeButton).parent().parent().append( "<div>5 yıl extra garanti</div>" );
    var productRow2 = $(removeButton).hide();
 // $( ".product-removal" ).append( "<div>deneme</div>" );
 // var productRow = $(removeButton).parent().parent();
 // productRow.slideUp(fadeTime, function() {
 //   $( ".product-removal" ).append( "<div>deneme</div>" );
 var garanti =$('.product-quantity input').val();
  var price = parseFloat(productRow.children('.product-price').text());
 var quantity = $(quantityInput).val();
 
 if (garanti ==0)
 {
   
  recalculateCart();

 }
 else
  {
    recalculateCartexra();
   
  }

 // });
}


function recalculateCartexra()
{
 
  var subtotal = 0;
   
  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  /*  */
  if  (subtotal>2000)
  {
    var tax = subtotal*0.18 ;
  }
  
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


