const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  ]



const superbowlWin = (record) => {
  let win = record.find(r => r.result === "W")
  return win ? win.year : undefined
}
