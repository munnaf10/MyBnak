document.getElementById("btn-deposite").addEventListener("click", function () {
  // ____
  const depositeField = document.getElementById("depositeField");
  const depositeFieldValue = parseFloat(depositeField.value);
  // ____
  const depositeAmount = document.getElementById("depositeAmount");
  const depositeAmountInnerText = parseFloat(depositeAmount.innerText);
  // ____ sum
  depositeAmount.innerText = depositeFieldValue + depositeAmountInnerText;
  // total balance ar sathe add

  const totalBalance = document.getElementById("totalBalance");
  const totalBalanceInnerText = parseFloat(totalBalance.innerText);

  totalBalance.innerText = totalBalanceInnerText + depositeFieldValue;

  depositeField.value = "";
});
