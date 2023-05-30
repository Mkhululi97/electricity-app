// DOM element(s) references
/*  ***** TOP UP ELECTRICITY ***** */
// const topupRadio = document.querySelector(".topup:checked");
const buyBtn = document.querySelector(".topupNow");

/*  ***** TOP UP ELECTRICITY ***** */
const unitsAvailEl = document.querySelector(".unitsAvailable");
const unitsBoughtEl = document.querySelector(".totalUnits");
const spentAmountEl = document.querySelector(".totalAmount");
const advanceCheck = document.querySelector(".advanceTaken");

/*  ***** TOP UP ELECTRICITY ***** */
const applianceRadio = document.querySelector(".usage:checked");
const useBtn = document.querySelector(".useNow");
/* ***** LOCAL STORAGE ***** */
let previousUnits = JSON.parse(localStorage.getItem("unitsAvail")) || 0;
let previousUnitsTotal = localStorage.getItem("unitsBought") || 0;
let previousSpentAmount = JSON.parse(localStorage.getItem("spentAmount")) || 0;
unitsAvailEl.innerHTML = previousUnits;
unitsBoughtEl.innerHTML = previousUnitsTotal;
spentAmountEl.innerHTML = previousSpentAmount;

// Factory Function instance
const electricity = Electricity(
  previousUnits,
  previousUnitsTotal,
  previousSpentAmount
);

// DOM events here
function buyFunction() {
  const topupRadio = document.querySelector(".topup:checked");
  if (topupRadio) {
    electricity.topUpElectricity(topupRadio.value);
    electricity.topUpElectricity(Number(topupRadio.value));
    localStorage.setItem("unitsAvail", electricity.getUnitsAvailable());
    localStorage.setItem("unitsBought", electricity.totalUnitsBought());
    localStorage.setItem("spentAmount", electricity.totalAmountSpent());
    unitsAvailEl.innerHTML = localStorage.getItem("unitsAvail");
    unitsBoughtEl.innerHTML = localStorage.getItem("unitsBought");
    spentAmountEl.innerHTML = localStorage.getItem("spentAmount");
  }
}
buyBtn.addEventListener("click", buyFunction);
