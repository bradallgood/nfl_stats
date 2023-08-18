const myHeading = document.querySelector("h1");
myHeading.textContent = "NFL Stat Collector";
const passing_dropdown = document.getElementById('passing_dropdown');

function graph_td_int(data,selectedOption) {

  var trace1 = {
    x: data.map(g_item => g_item.TD),
    y: data.map(g_item => `${g_item.Year} Week: ${g_item.Week} ${g_item.Home_Away} ${g_item.Opp} `),
    name: 'TDs',
    type: 'bar',
    orientation: 'h'
  };
  
  var trace2 = {
    x: data.map(g_item => g_item.Int),
    y: data.map(g_item => `${g_item.Year} Week: ${g_item.Week} ${g_item.Home_Away} ${g_item.Opp} `),
    name: 'Ints',
    type: 'bar',
    orientation: 'h'
  };
  
  var g_data = [trace1, trace2];
  
  var layout = {
    barmode: 'group',
    width: 600,
    height: 500,
    margin: {
      l: 150,
      r: 20,
      t: 70,
      b: 70
    },
    title: `${selectedOption} TDs vs INTs`,
    font: {
      size: 10  // Set font size for other labels like legend and tick labels
    }
  };
  
  Plotly.newPlot('TDINT', g_data, layout);
}


function graph_comp_att(data,selectedOption) {

  var trace1 = {
    x: data.map(g_item => g_item.Att),
    y: data.map(g_item => `${g_item.Year} Week: ${g_item.Week} ${g_item.Home_Away} ${g_item.Opp} `),
    name: 'Attempts',
    type: 'bar',
    orientation: 'h'
  };
  
  var trace2 = {
    x: data.map(g_item => g_item.Cmp),
    y: data.map(g_item => `${g_item.Year} Week: ${g_item.Week} ${g_item.Home_Away} ${g_item.Opp} `),
    name: 'Completions',
    type: 'bar',
    orientation: 'h'
  };
  
  var g_data = [trace1, trace2];
  
  var layout = {
    barmode: 'group',
    width: 600,
    height: 500,
    margin: {
      l: 150,
      r: 20,
      t: 70,
      b: 70
    },
    title: `${selectedOption} Att vs Comp`,
    font: {
      size: 10  // Set font size for other labels like legend and tick labels
    }
  };
  
  Plotly.newPlot('COMPATT', g_data, layout);
}

function graph_passing_yds(data,selectedOption) {
    var trace1 = {
      x: data.map(g_item => g_item.Yds),
      y: data.map(g_item => `${g_item.Year} Week: ${g_item.Week} ${g_item.Home_Away} ${g_item.Opp} `),
      name: 'YDS',
      type: 'bar',
      orientation: 'h'
    };
    
    var g_data = [trace1];
    
    var layout = {
      width: 600,
      height: 500,
      margin: {
          l: 150,
          r: 20,
          t: 70,
          b: 70
        },
      title: `${selectedOption} 2 years of Passing Yard Stats`,
      font: {
        size: 10  // Set font size for other labels like legend and tick labels
      }
    };
    
    Plotly.newPlot('PassingYDS', g_data, layout);
}


function graph_passing_rating(data,selectedOption) {
  var trace1 = {
    x: data.map(g_item => g_item.Rate),
    y: data.map(g_item => `${g_item.Year} Week: ${g_item.Week} ${g_item.Home_Away} ${g_item.Opp} `),
    name: 'Rating',
    type: 'bar',
    orientation: 'h'
  };
  
  var g_data = [trace1];
  
  var layout = {
    width: 600,
    height: 500,
    margin: {
        l: 150,
        r: 20,
        t: 70,
        b: 70
      },
    title: `${selectedOption} 2 years of Passer Rating Stats`,
    font: {
      size: 10  // Set font size for other labels like legend and tick labels
    }
  };
  
  Plotly.newPlot('PassingRAT', g_data, layout);
}

function graph_receiving_yds(data,selectedOption) {
  var trace1 = {
    x: data.map(g_item => g_item.Yds),
    y: data.map(g_item => `${g_item.Year} Week: ${g_item.Week} ${g_item.Home_Away} ${g_item.Opp} `),
    name: 'Rec Yds',
    type: 'bar',
    orientation: 'h'
  };
  
  var g_data = [trace1];
  
  var layout = {
    width: 600,
    height: 500,
    margin: {
        l: 150,
        r: 20,
        t: 70,
        b: 70
      },
    title: `${selectedOption} 2 years of Receiving Yds Stats`,
    font: {
      size: 10  // Set font size for other labels like legend and tick labels
    }
  };
  
  Plotly.newPlot('ReceivingYDS', g_data, layout);
}

function graph_receiving_receptions(data,selectedOption) {
  var trace1 = {
    x: data.map(g_item => g_item.Rec),
    y: data.map(g_item => `${g_item.Year} Week: ${g_item.Week} ${g_item.Home_Away} ${g_item.Opp} `),
    name: 'Receptions',
    type: 'bar',
    orientation: 'h'
  };
  
  var g_data = [trace1];
  
  var layout = {
    width: 600,
    height: 500,
    margin: {
        l: 150,
        r: 20,
        t: 70,
        b: 70
      },
    title: `${selectedOption} 2 years of Receiving Receptions Stats`,
    font: {
      size: 10  // Set font size for other labels like legend and tick labels
    }
  };
  
  Plotly.newPlot('ReceivingREC', g_data, layout);
}

function graph_receiving_tds(data,selectedOption) {
  var trace1 = {
    x: data.map(g_item => g_item.TD),
    y: data.map(g_item => `${g_item.Year} Week: ${g_item.Week} ${g_item.Home_Away} ${g_item.Opp} `),
    name: 'Rec TDs',
    type: 'bar',
    orientation: 'h'
  };
  
  var g_data = [trace1];
  
  var layout = {
    width: 600,
    height: 500,
    margin: {
        l: 150,
        r: 20,
        t: 70,
        b: 70
      },
    title: `${selectedOption} 2 years of Receiving TD Stats`,
    font: {
      size: 10  // Set font size for other labels like legend and tick labels
    }
  };
  
  Plotly.newPlot('RECTD', g_data, layout);
}


function graph_rushing_yds(data,selectedOption) {
  var trace1 = {
    x: data.map(g_item => g_item.Yds),
    y: data.map(g_item => `${g_item.Year} Week: ${g_item.Week} ${g_item.Home_Away} ${g_item.Opp} `),
    name: 'Rush Yds',
    type: 'bar',
    orientation: 'h'
  };
  
  var g_data = [trace1];
  
  var layout = {
    width: 600,
    height: 500,
    margin: {
        l: 150,
        r: 20,
        t: 70,
        b: 70
      },
    title: `${selectedOption} 2 years of Rushing Yds Stats`,
    font: {
      size: 10  // Set font size for other labels like legend and tick labels
    }
  };
  
  Plotly.newPlot('RushingYDS', g_data, layout);
}

function graph_rushing_att(data,selectedOption) {
  var trace1 = {
    x: data.map(g_item => g_item.Att),
    y: data.map(g_item => `${g_item.Year} Week: ${g_item.Week} ${g_item.Home_Away} ${g_item.Opp} `),
    name: 'Carries',
    type: 'bar',
    orientation: 'h'
  };
  
  var g_data = [trace1];
  
  var layout = {
    width: 600,
    height: 500,
    margin: {
        l: 150,
        r: 20,
        t: 70,
        b: 70
      },
    title: `${selectedOption} 2 years of Rushing Attempts Stats`,
    font: {
      size: 10  // Set font size for other labels like legend and tick labels
    }
  };
  
  Plotly.newPlot('RushingCAR', g_data, layout);
}

function graph_rushing_tds(data,selectedOption) {
  var trace1 = {
    x: data.map(g_item => g_item.TD),
    y: data.map(g_item => `${g_item.Year} Week: ${g_item.Week} ${g_item.Home_Away} ${g_item.Opp} `),
    name: 'Rushing TDs',
    type: 'bar',
    orientation: 'h'
  };
  
  var g_data = [trace1];
  
  var layout = {
    width: 600,
    height: 500,
    margin: {
        l: 150,
        r: 20,
        t: 70,
        b: 70
      },
    title: `${selectedOption} 2 years of Rushing TD Stats`,
    font: {
      size: 10  // Set font size for other labels like legend and tick labels
    }
  };
  
  Plotly.newPlot('RUSHTD', g_data, layout);
}

function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const average = sum / arr.length;
  return average.toFixed(2);
}

function graph_position_ftpt(data,selectedOption,div_name,div_name_1,div_name_2) {
  total_results = data.map(g_item=>g_item.Points)
  avg_pts = calculateAverage(total_results); 
  num_uniq = (total_results).length;

  top_ten = Math.round(num_uniq * 0.1)
  ten_results =  total_results.slice(0,top_ten+1)
  ten_avg_pts = calculateAverage(ten_results);

  top_quart = Math.round(num_uniq * 0.25)
  quart_results =  total_results.slice(0,top_quart+1)
  quart_avg_pts = calculateAverage(quart_results);
  
  total_results_player = data.map(g_item=>g_item.Player)
  quart_results_player =  total_results_player.slice(0,top_quart+1)

  quart_results_player_low =  total_results_player.slice(top_quart*-1)
  quart_results_low =  total_results.slice(top_quart*-1)

  var trace1 = {
    x: total_results,
    name: 'All Population',
    type: 'histogram',
    xbins: {
      start: 0,
      end: 500,
      size: 10  // Adjust bin size here
    },
    marker: {
      color: 'blue'  // Set color to red
    },
    opacity: 0.2,
  };

  var trace2 = {
    x: quart_results,
    name: 'Top Quartile',
    type: 'histogram',
    xbins: {
      start: 0,
      end: 500,
      size: 10  // Adjust bin size here
    },
    marker: {
      color: 'Yellow'  // Set color to red
    },
    opacity: 0.6,
    
  };

  var trace3 = {
    x: quart_results_low,
    name: 'Bottom Quartile',
    type: 'histogram',
    xbins: {
      start: 0,
      end: 500,
      size: 10  // Adjust bin size here
    },
    marker: {
      color: 'red'  // Set color to red
    },
    opacity: 0.6,
    
  };

  var trace4 = {
    x: ten_results,
    name: 'Top 10%',
    type: 'histogram',
    xbins: {
      start: 0,
      end: 500,
      size: 10  // Adjust bin size here
    },
    marker: {
      color: 'green'  // Set color to red
    },
    opacity: 0.8,
    
  };
  
  var g_data = [trace1,trace2,trace3,trace4];
  
  var layout = {
    barmode: "overlay",
    width: 600,
    height: 225,
    margin: {
        l: 20,
        r: 20,
        t: 50,
        b: 50
      },
    title: `${selectedOption} Fantasy Points Histogram
              <br> All Pop #: ${num_uniq}  Top 10%: ${top_ten}  Top Quarter #: ${top_quart} 
              <br> All Pop Avg: ${avg_pts}  Top 10% Avg: ${ten_avg_pts} Top Quarter Avg: ${quart_avg_pts}`, 
    font: {
      size: 10  // Set font size for other labels like legend and tick labels
    }
  };
  
  Plotly.newPlot(div_name, g_data, layout);

  var trace1 = {
    x: quart_results_player,
    y: quart_results,
    name: 'Fantasy Points',
    type: 'bar',
    //orientation: 'h'
  };
  
  var g_data = [trace1];
  
  var layout = {
    width: 600,
    height: 225,
    margin: {
        l: 20,
        r: 20,
        t: 50,
        b: 50
      },
    title: `${selectedOption} Fantasy Points - highes quartile`,
    font: {
      size: 10  // Set font size for other labels like legend and tick labels
    }
  };
  
  Plotly.newPlot(div_name_1, g_data, layout);

  quart_results_player_low =  total_results_player.slice(top_quart*-1)
  quart_results_low =  total_results.slice(top_quart*-1)

  var trace1 = {
    x: quart_results_player_low,
    y: quart_results_low,
    name: 'Fantasy Points',
    type: 'bar',
    //orientation: 'h'
  };
  
  var g_data = [trace1];
  
  var layout = {
    width: 600,
    height: 225,
    margin: {
        l: 20,
        r: 20,
        t: 50,
        b: 50
      },
    title: `${selectedOption} Fantasy Points - Lowest Quartile`,
    font: {
      size: 10  // Set font size for other labels like legend and tick labels
    }
  };
  
  Plotly.newPlot(div_name_2, g_data, layout);
}

// Function to populate the dropdown from API response
async function rush_populateDropdown(apiUrl) {
  var data = await fetchData(apiUrl);
  console.log(data)
  data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.Player; // Assuming the API response contains an 'id' field
    option.textContent = item.Player; // Assuming the API response contains a 'name' field
    rushing_dropdown.appendChild(option);
  });
}

// Function to populate the dropdown from API response
async function rec_populateDropdown(apiUrl) {
  var data = await fetchData(apiUrl);
  console.log(data)
  data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.Player; // Assuming the API response contains an 'id' field
    option.textContent = item.Player; // Assuming the API response contains a 'name' field
    receiving_dropdown.appendChild(option);
  });
}

// Function to populate the dropdown from API response
async function populateDropdown(apiUrl) {
  var data = await fetchData(apiUrl);
  console.log(data)
  data.forEach(item => {
    const option = document.createElement('option');
    option.value = item.Player; // Assuming the API response contains an 'id' field
    option.textContent = item.Player; // Assuming the API response contains a 'name' field
    passing_dropdown.appendChild(option);
  });
}

async function get_pos_info(apiUrl,position,div_name,div_name_1,div_name_2) {
  var data = await fetchData(apiUrl,position);
  console.log(data);
  graph_position_ftpt(data,position,div_name,div_name_1,div_name_2);

}


// Function to fetch data from the API
async function fetchData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        var data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}


window.onload =  function() {
    populateDropdown('http://localhost:8000/distinct_name');
    rec_populateDropdown('http://localhost:8000/receiving_distinct_name');
    rush_populateDropdown('http://localhost:8000/rushing_distinct_name');
    get_pos_info('http://localhost:8000/fantasy_pos/QB',"QB","2022_QB_Fantasy","2022_QB_Fantasy_1","2022_QB_Fantasy_2");
    get_pos_info('http://localhost:8000/fantasy_pos/WR',"WR","2022_WR_Fantasy","2022_WR_Fantasy_1","2022_WR_Fantasy_2");
    get_pos_info('http://localhost:8000/fantasy_pos/RB',"RB","2022_RB_Fantasy","2022_RB_Fantasy_1","2022_RB_Fantasy_2");
    get_pos_info('http://localhost:8000/fantasy_pos/TE',"TE","2022_TE_Fantasy","2022_TE_Fantasy_1","2022_TE_Fantasy_2");
    get_pos_info('http://localhost:8000/fantasy_pos/K',"K","2022_K_Fantasy","2022_K_Fantasy_1","2022_K_Fantasy_2");


}

document.addEventListener("DOMContentLoaded", async function() {
  const passing_dropdown = document.getElementById("passing_dropdown");
  const passing_submitBtn = document.getElementById("passing_submitBtn");
  passing_submitBtn.addEventListener("click", async function() {
      const selectedOption = passing_dropdown.value;
      console.log(`${selectedOption}`);
      data = await fetchData(`http://localhost:8000/distinct_name_var/${selectedOption}`);      
      console.log(data);
      graph_passing_yds(data,selectedOption);
      graph_comp_att(data,selectedOption);
      graph_td_int(data,selectedOption);
      graph_passing_rating(data,selectedOption)

  });

});

document.addEventListener("DOMContentLoaded", async function() {
  const receiving_dropdown = document.getElementById("receiving_dropdown");
  const receiving_submitBtn = document.getElementById("receiving_submitBtn");
  receiving_submitBtn.addEventListener("click", async function() {
      const selectedOption = receiving_dropdown.value;
      console.log(`${selectedOption}`);
      data = await fetchData(`http://localhost:8000/receiving_distinct_name_var/${selectedOption}`);      
      console.log(data);
      graph_receiving_yds(data,selectedOption);
      graph_receiving_receptions(data,selectedOption);
      graph_receiving_tds(data,selectedOption);
  });

});


document.addEventListener("DOMContentLoaded", async function() {
  const rushing_dropdown = document.getElementById("rushing_dropdown");
  const rushing_submitBtn = document.getElementById("rushing_submitBtn");
  rushing_submitBtn.addEventListener("click", async function() {
      const selectedOption = rushing_dropdown.value;
      console.log(`${selectedOption}`);
      data = await fetchData(`http://localhost:8000/rushing_distinct_name_var/${selectedOption}`);      
      console.log(data);
      graph_rushing_yds(data,selectedOption);
      graph_rushing_att(data,selectedOption);
      graph_rushing_tds(data,selectedOption);

  });

});