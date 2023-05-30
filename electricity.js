function Electricity(previousUnits, previousUnitsTotal, previousSpentAmount) {
  let unitsAvailable = previousUnits || 0;
  let totalCost = previousSpentAmount || 0;
  let unitsTotal = previousUnitsTotal || 0;
  let advanceBalance = 0;
  let takeAdvance = true;
  // do we want to go with this or array?
  let appliances = {
    Stove: 10,
    Kettle: 5,
    TV: 3,
    Fridge: 13,
  };

  function topUpElectricity(amount) {
    if (takeAdvance && amount === "advance") {
      advanceBalance = 30;
      unitsAvailable += 21;
      totalCost += 30;
      takeAdvance = false;
    }
    if (amount === 10) {
      advanceBalance = advanceBalance - amount;
      if (advanceBalance < 0) {
        unitsAvailable += 7;
        unitsTotal += 7;
        totalCost += amount;
        advanceBalance = 0;
        takeAdvance = true;
      }
    }
    if (amount === 20) {
      advanceBalance = advanceBalance - amount;
      if (advanceBalance < 0) {
        unitsAvailable += 14;
        unitsTotal += 14;
        totalCost += amount;
        advanceBalance = 0;
        takeAdvance = true;
      }
    }
    if (amount === 50) {
      advanceBalance = advanceBalance - amount;
      if (advanceBalance < 0) {
        unitsAvailable += 35;
        unitsTotal += 35;
        totalCost += amount;
        advanceBalance = 0;
        takeAdvance = true;
      }
      console.log(unitsAvailable);
    }
  }

  function getUnitsAvailable() {
    return unitsAvailable;
  }

  /*
   * return true and substract from unit available if there is enough units to use the appliance
   * other wise return false and do nothing.
   */
  function useAppliance(appliance) {
    if (appliance === "TV") {
      if (unitsAvailable >= appliances.TV) {
        unitsAvailable = unitsAvailable - appliances.TV;
        return true;
      } else {
        return false;
      }
    }
    if (appliance === "Kettle") {
      if (unitsAvailable >= appliances.Kettle) {
        unitsAvailable = unitsAvailable - appliances.Kettle;
        return true;
      } else {
        return false;
      }
    }
    if (appliance === "Fridge") {
      if (unitsAvailable >= appliances.Fridge) {
        unitsAvailable = unitsAvailable - appliances.Fridge;
        return true;
      } else {
        return false;
      }
    }
    if (appliance === "Stove") {
      if (unitsAvailable >= appliances.Stove) {
        unitsAvailable = unitsAvailable - appliances.Stove;
        return true;
      } else {
        return false;
      }
    }
  }

  function advanceTaken() {
    takeAdvance = true;
    return takeAdvance;
  }

  function totalAmountSpent() {
    return totalCost;
  }

  function totalUnitsBought() {
    return unitsTotal;
  }

  return {
    advanceTaken,
    topUpElectricity,
    getUnitsAvailable,
    useAppliance,
    totalAmountSpent,
    totalUnitsBought,
  };
}
