
function BookPriceCalculator() {
  const price = 300;
  const quantity = 4;

  function calculateTotal(price, quantity) {
    return price * quantity;
  }

  return (
    <div>
      <h2>Book Price Calculator</h2>

      <p>Book Price: ₹{price}</p>
      <p>Quantity: {quantity}</p>

      <p>
        Total Price: ₹{calculateTotal(price, quantity)}
      </p>
    </div>
  );
}

export default BookPriceCalculator;
