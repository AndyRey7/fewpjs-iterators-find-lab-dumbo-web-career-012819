const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  ]



const superbowlWin = (record) => {
  if (record.find(record[0].result === "W")) {
    return record[0].year
  } else {
    undefined
  }
  
}
