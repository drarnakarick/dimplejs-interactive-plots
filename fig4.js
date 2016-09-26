<div id="chartContainer">
  <script src="http://cdnjs.cloudflare.com/ajax/libs/d3/3.4.11/d3.min.js"></script>
  <script src="http://dimplejs.org/dist/dimple.v2.1.0.min.js"></script>
  <script type="text/javascript">
    var svg = dimple.newSvg("#chartContainer", 800, 900);
    d3.tsv("Atlas3D_combined_kinematic_structural_data.tsv", function (data) {
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(90,50,500, 445);
      var x = myChart.addMeasureAxis("x", "Epsilon_e");
      var y = myChart.addMeasureAxis("y", "LambdaR_e");
      var s = myChart.addSeries(["Galaxy","Epsilon_e","LambdaR_e","FS_e","Source","Class","gamma_prime","Filter","Kinematic_Group","LABEL"], dimple.plot.bubble);
      s.getTooltipText = function (e) {
                return [
                    "Galaxy: " + e.aggField[0],
                    "Structural Class: " + e.aggField[9],
                    "Rotating (F=fast, S=slow): " + e.aggField[3],
                    "\u03B5_(Re): " + e.aggField[1],
                    "\u03BB_(Re): " + e.aggField[2],
                    "Kinematic_Group: " + e.aggField[8],
                    "Profile type: " + e.aggField[5],
                    "\u03D2\u2032 (gamma prime): " + e.aggField[6],
                    "HST filter: " + e.aggField[7],
                    "Source data/paper: " + e.aggField[4]
                ];
      };

      y.overrideMax = 0.9;
      var myLegend = myChart.addLegend(40, 60, 150, 50, "right");
      myLegend.fontSize = "12px";
      myChart.assignColor("unknown", "#FFF");
      myChart.assignColor("uncertain", "000");
      myChart.assignColor("core-less", "#FC411D");
      myChart.assignColor("core", "#1936FB");
      myChart.draw();
      x.titleShape.text("\u03B5_(Re)");
      y.titleShape.text("\u03BB_(Re)");

    });
  </script>
</div>
