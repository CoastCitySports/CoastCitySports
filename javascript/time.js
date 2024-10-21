const showDate = [
  // date 1:
  { start: "2024-10-14", end: "2024-10-20", divId: "date1" },

  // date 2:
  { start: "2024-10-21", end: "2024-10-28", divId: "date2" },

  // date 3:
  { start: "2024-10-28", end: "2024-11-04", divId: "date3" },

  // date 4:
  { start: "2024-11-04", end: "2024-11-11", divId: "date4" },

  // date 5:
  { start: "2024-11-11", end: "2024-11-18", divId: "date5" },

  // date 6:
  { start: "2024-11-18", end: "2024-11-25", divId: "date6" },

  // date 7:
  { start: "2024-11-25", end: "2024-12-03", divId: "date7" },

  // date 8:
  { start: "2024-12-02", end: "2024-12-09", divId: "date8" },

  // date 9:
  { start: "2024-12-09", end: "2024-12-16", divId: "date9" },

  // date 10:
  { start: "2024-12-16", end: "2024-12-23", divId: "date10" },

  // date 11:
  { start: "2024-12-23", end: "2024-12-30", divId: "date11" },

  // date 12:
  { start: "2024-12-30", end: "2025-01-06", divId: "date12" },

  // date 13:
  { start: "2025-01-06", end: "2025-01-13", divId: "date13" },

  // date 14:
  { start: "2025-01-13", end: "2025-01-20", divId: "date14" },
];

const currentDate = new Date();
const dateISO = currentDate.toISOString().split("T")[0];

showDate.forEach((rango) => {
  if (dateISO >= rango.start && dateISO <= rango.end) {
    document.getElementById(rango.divId).style.display = "block";
  }
});
