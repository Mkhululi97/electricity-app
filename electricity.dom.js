// DOM element(s) references
/*  ***** TOP UP ELECTRICITY ***** */
const buyBtn = document.querySelector(".topupNow");

/*  ***** ELECTRICITY ***** */
const unitsAvailEl = document.querySelector(".unitsAvailable");
const unitsBoughtEl = document.querySelector(".totalUnits");
const spentAmountEl = document.querySelector(".totalAmount");
const advanceCheck = document.querySelector(".advanceTaken");
const checkMark = document.querySelector(".advanceTaken");

/*  ***** USE ELECTRICITY ***** */
const useBtn = document.querySelector(".useNow");

/* ***** LOCAL STORAGE ***** */
let previousUnits = JSON.parse(localStorage.getItem("unitsAvail")) || 0;
let previousUnitsTotal = JSON.parse(localStorage.getItem("unitsBought")) || 0;
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

// green tick functionality
let checked;

function buyFunction() {
  const topupRadio = document.querySelector(".topup:checked");
  if (topupRadio) {
    if (topupRadio.value === "advance") {
      checked = "checked";
    }
  }
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
  // console.log(checked);
}
console.log(checked);
checked === "checked"
  ? checkMark.classList.remove("hidden")
  : checkMark.classList.add("hidden");

function useBtnFunction() {
  const applianceRadio = document.querySelector(".usage:checked");
  if (applianceRadio) {
    electricity.useAppliance(applianceRadio.value);
    // UNITS AVAILABLE
    localStorage.setItem("unitsAvail", electricity.getUnitsAvailable());
    unitsAvailEl.innerHTML = localStorage.getItem("unitsAvail");
  }
  console.log(electricity.getUnitsAvailable());
}
buyBtn.addEventListener("click", buyFunction);
useBtn.addEventListener("click", useBtnFunction);
