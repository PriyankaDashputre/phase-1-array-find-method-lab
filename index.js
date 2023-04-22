// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
]


function superbowlWin(record){
    const winResult = record.find(record => "W" === record.result)

    if(winResult){
        return winResult.year
    } else {
        return undefined
    }

}
superbowlWin(record);