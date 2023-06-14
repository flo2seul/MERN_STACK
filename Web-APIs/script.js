const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

// Battery API
const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      function updateAllBatteryDetails() {
        updateChargingInfo();
        updateLevelChange();
        updateDischargingTimeInfo();
        updateChargingTimeInfo();
      }
      updateAllBatteryDetails();
      // Battery Charging change
      battery.addEventListener("chargingchange", () => {
        console.log("Charging has changed - 20% - 21%");
      });
      function updateChargingInfo() {
        const isCharging = battery.charging ? "Yes" : "NO";
        batteryCharging.innerHTML = isCharging;
      }
      // Battery Charging time
      battery.addEventListener("chargingtimechange", () => {
        updateChargingTimeInfo();
      });
      function updateChargingTimeInfo() {
        const chargingTime = battery.chargingTime + " seconds";
        batteryChargingTime.innerHTML = chargingTime;
      }
      // Battery Discharging time
      battery.addEventListener("dischargingtimechange", () => {
        updateDischargingTimeInfo();
      });
      function updateDischargingTimeInfo() {
        const disChargingTime = battery.dischargingTime + " seconds";
        batteryDisChargingTime.innerHTML = disChargingTime;
      }
      // Battery level change
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      });
      function updateLevelChange() {
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;
      }
      // Battery status
    });
  }
};

battery();
