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