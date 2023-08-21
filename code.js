// Globe image icon://fa-globe is an AppLab asset
// Flag images are from "Countries and Territories" dataset

// Store country data from the dataset in lists
var flags = getColumn("Countries and Territories","Flag");
var names = getColumn("Countries and Territories","Country Name");
var regions = getColumn("Countries and Territories","Region");
var populations = getColumn("Countries and Territories","Population");
var capitaGDPs = getColumn("Countries and Territories","GDP Per Capita");

// Create empty filtered lists
var filteredFlags = [];
var filteredNames = [];
var filteredRegions = [];
var filteredPopulations = [];
var filteredCapitaGDPs = [];

// Filter the country data in the lists based on population size
// Using the populationsizename from the dropdown, the data of countries with
// populations in the corresponding interval is stored in the filtered lists
function filter(popName)
{
  // Clear the filtered lists
  filteredFlags = []; 
  filteredNames = []; 
  filteredRegions = []; 
  filteredPopulations = []; 
  filteredCapitaGDPs = [];
  
  for (var i = 0; i < populations.length; i++) 
  {
    if (popName == "Small" && populations[i] < 10000000) 
    {
      appendItem(filteredFlags, flags[i]); 
      appendItem(filteredNames, names[i]); 
      appendItem(filteredRegions, regions[i]); 
      appendItem(filteredPopulations, populations[i]); 
      appendItem(filteredCapitaGDPs, capitaGDPs[i]);
    }
    else if (popName == "Medium" && populations[i] >= 10000000 && populations[i] < 100000000) 
    {
      appendItem(filteredFlags, flags[i]); 
      appendItem(filteredNames, names[i]); 
      appendItem(filteredRegions, regions[i]); 
      appendItem(filteredPopulations, populations[i]); 
      appendItem(filteredCapitaGDPs, capitaGDPs[i]);
    }
    else if (popName == "Large" && populations[i] >= 100000000) 
    {
      appendItem(filteredFlags, flags[i]); 
      appendItem(filteredNames, names[i]);
      appendItem(filteredRegions, regions[i]); 
      appendItem(filteredPopulations, populations[i]); 
      appendItem(filteredCapitaGDPs, capitaGDPs[i]);
    }
  }
}

function updateScreen() 
{
  var index = randomNumber(0, filteredPopulations.length-1); 
  setImageURL("flag", filteredFlags[index]); 
  setText("name", filteredNames[index]);
  setText("region", filteredRegions[index]); 
  setText("population", filteredPopulations[index]); 
  setText("capitaGDP", filteredCapitaGDPs[index]);
}

onEvent("dropdown", "input", function() 
{
filter(getText("dropdown"));
updateScreen(); 
});

filter("Small"); 
updateScreen();
