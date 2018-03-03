var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data = {}, tmp;
var param;
for (var k = 0; k < params.length; k++) {
    params[k] = decodeURI(params[k])

}
for (var i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split('=');
    data[tmp[0]] = tmp[1];
}
var keys = Object.values(data);
console.log(keys);
var file = new XMLHttpRequest();
file.open("GET", "chrt1.json", false);
file.send(null)
var data = JSON.parse(file.responseText);
var maxi = 6;
var chosen = keys;
var dtas1 = [];
for (var i = 0; i < chosen.length; i++) {
    var dict = {};
    console.log(chosen[i]);
    dict["data"] = data[chosen[i]].Taste;
    dict["label"] = chosen[i];
    dict["backgroundColor"] = data[chosen[i]].Color;
    dict["borderColor"] = data[chosen[i]].Color;
    dict["fill"] = false;
    dtas1.push(dict)    
}
var dtas2 = [];
for (var i = 0; i < chosen.length; i++) {
    var dict2 = {};
    console.log(chosen[i]);
    dict2["data"] = data[chosen[i]].Weight;
    dict2["label"] = chosen[i];
    dict2["backgroundColor"] = data[chosen[i]].Color;
    dict2["borderColor"] = data[chosen[i]].Color;
    dict2["fill"] = false;
    dtas2.push(dict2)
}
var dtas3 = [];
for (var i = 0; i < chosen.length; i++) {
    var dict3 = {};
    console.log(chosen[i]);
    dict3["data"] = data[chosen[i]].Tons;
    dict3["label"] = chosen[i];
    dict3["backgroundColor"] = data[chosen[i]].Color;
    dict3["borderColor"] = data[chosen[i]].Color;
    dict3["fill"] = false;
    dtas3.push(dict3)
}
var dtas4 = []
for (var i = 0; i < chosen.length; i++) {
    var dict4 = {};
    console.log(chosen[i]);
    dict4["data"] = data[chosen[i]].Quality;
    dict4["label"] = chosen[i];
    dict4["backgroundColor"] = data[chosen[i]].Color;
    dict4["borderColor"] = data[chosen[i]].Color;
    dict4["fill"] = false;
    dtas4.push(dict4)
}
console.log(dtas1);
var keys = Object.keys(data);
console.log(keys);
// First chart
var ctx = document.getElementById("myChart").getContext("2d");
var chart = document.getElementById("myChart");
var stackedLine = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["India", "USA", "China", "Brazil", "Japan", "Canada"],
        datasets: dtas1
    },
    options: {
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        responsive: false,
        title: {
            display: true,
            text: 'Taste of fruits'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Country'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Taste'
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    max: maxi
                },
            }]
        }
    }
});
//Second Chart
var ctx2 = document.getElementById("myChart2").getContext("2d");
var stackedLine2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["India", "USA", "China", "Brazil", "Japan", "Canada"],
        datasets: dtas2,

    },
    options: {
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        responsive: false,
        title: {
            display: true,
            text: 'Weight of fruits'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Country'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Weight in ounces'
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 8,
                    max: 96,
                },
            }]
        }
    }
});
var ctx3 = document.getElementById("myChart3").getContext("2d");
var stackedLine3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ["India", "USA", "China", "Brazil", "Japan", "Canada"],
        datasets: dtas3,

    },
    options: {
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        responsive: false,
        title: {
            display: true,
            text: 'Tons of fruits exported'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Country'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Tons per year'
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 10,
                    max: 100,
                },
            }]
        }
    }
});
var ctx4 = document.getElementById("myChart4").getContext("2d");
var stackedLine4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ["India", "USA", "China", "Brazil", "Japan", "Canada"],
        datasets: dtas4,
    },
    options: {
        elements: {
            line: {
                tension: 0, // disables bezier curves
            }
        },
        responsive: false,
        title: {
            display: true,
            text: 'Quality of fruits'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Country'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Quality'
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    max: maxi,
                },
            }]
        }
    }
});