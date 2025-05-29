// Load google charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["שמח", 2],
    ["עצוב", 2],
    ["כועס", 4],
    ["חרד", 2],
    ["מתרגש", 8],
    ["מקנא", 3], // שינוי מ"טבעי" ל"מקנא"
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    title: "ממוצע ההצבעות שלי",
    width: 750,
    height: 550,
    colors: [
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-happy")
        .trim(),
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-sad")
        .trim(),
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-angry")
        .trim(),
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-anxious")
        .trim(),
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-excited")
        .trim(),
      getComputedStyle(document.documentElement)
        .getPropertyValue("--color-envy")
        .trim(),
    ],
    fontSize: 16,
    titleTextStyle: {
      fontSize: 24,
    },
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}
