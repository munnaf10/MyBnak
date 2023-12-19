document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdrawField");
  const withdrawFieldValue = parseFloat(withdrawField.value);
  // --------
  const withdrawTotal = document.getElementById("withdrawTotal");
  const withdrawTotalInnerText = parseFloat(withdrawTotal.innerText);
  //  ----
  const totalBalance = document.getElementById("totalBalance");
  const totalBalanceInnerText = parseFloat(totalBalance.innerText);
  // subtraction
  withdrawTotal.innerText = withdrawFieldValue + withdrawTotalInnerText;
  totalBalance.innerText = totalBalanceInnerText - withdrawFieldValue;

  withdrawField.value = "";
});
