function go(event) {
  event.preventDefault();

  const weightInGram = parseFloat(
    document.getElementById("weightInGram").value
  );
  const salePrice = parseFloat(document.getElementById("salePrice").value);
  const currentPrice = parseFloat(
    document.getElementById("currentPrice").value
  );

  if (isNaN(weightInGram) || isNaN(salePrice) || isNaN(currentPrice)) {
    alert("Please enter valid input");
    return;
  }

  const localWeight = weightInGram / 1.0205;

  const actualGoldPrice = localWeight * (currentPrice / 16);

  const serviceCharge = salePrice - actualGoldPrice;

  document.getElementById("localWeight").innerText = localWeight.toFixed(2);
  document.getElementById("actualGoldPrice").innerText =
    actualGoldPrice.toFixed(2);
  document.getElementById("serviceCharge").innerText = serviceCharge.toFixed(2);
}
