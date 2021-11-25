let sachin = require("./data/sachin.json");
let sehwag = require("./data/sehwag.json");
let yuvraj = require("./data/yuvraj.json");
let dravid = require("./data/dravid.json");
let ganguly = require("./data/ganguly.json");
let virat = require("./data/virat.json");

let most_fours =0;
let most_sixes =0;
let most_runs =0;
let most_wickets =0;

let most_fours_player ="";
let most_sixes_player ="";
let most_runs_player ="";
let most_wicket_player ="";

let status=(data) =>{
    let total_fours =0;
    let total_sixes =0;
    let total_runs =0;
    let total_wickets =0;

    for (let [key,value] of Object.entries(data.data.batting)){
        if (value["4s"]){
            total_fours += parseInt(value["4s"]);
        }
        if (value["6s"]){
            total_sixes += parseInt(value["6s"]);
        }
        if (value["Runs"]){
            total_runs += parseInt(value["Runs"]);
        }
        
    }
    for (let [key,value] of Object.entries(data.data.bowling)){
        if (value["Wkts"]){
            total_wickets += parseInt(value["Wkts"]);
        }

    }
    if (most_fours < total_fours){
        most_fours_player = data.name;
        most_fours =total_fours;

    }
    if (most_runs < total_runs){
        most_runs_player = data.name;
        most_runs =total_runs;

    }
    if (most_sixes < total_sixes){
        most_sixes_player = data.name;
        most_sixes =total_sixes;

    }
    if (most_wickets < total_wickets){
        most_wicket_player = data.name;
        most_wickets =total_wickets;

    }

};
status(sachin);
status(sehwag);
status(yuvraj);
status(dravid);
status(virat);
status(ganguly);




 console.log( most_fours );
 console.log( most_fours_player );
 console.log( most_sixes );
 console.log( most_sixes_player );
 console.log( most_runs );
 console.log( most_runs_player );
 console.log( most_wickets );
 console.log( most_wicket_player );
