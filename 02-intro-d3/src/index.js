import * as d3 from 'd3';

// C'est ici que vous allez écrire les premières lignes en d3!

var svg = d3.select("body")
            .append("svg")
            .attr("width", 300)
            .attr("height", 300)
            .style('background-color', 'grey')

//Draw Circle1
var groupe1 = svg.append("g")
var circle1 = groupe1.append("circle")
                .attr("cx", 50)
                .attr("cy", 50)
                .attr("r", 40);
                

//Draw Circle2
var groupe2 = svg.append("g")
var circle2 = groupe2.append("circle")
.attr("cx", 150)
.attr("cy", 150)
.attr("r", 40);


//Draw Circle3
var groupe3 = svg.append("g")
var circle3 = groupe3.append("circle")
                .attr("cx", 250)
                .attr("cy", 250)
                .attr("r", 40);  

//Add circle attributes
circle2.style("fill","red");
circle1.attr("transform","translate (50,0)")
circle2.attr("transform","translate (50,0)")

//Add to text group
var texte1 = groupe1.append("text")
    .attr("x", "60")
    .attr("y", "100")
    .text("Hello World !")

var texte2 = groupe2.append("text")
    .attr("x", "160")
    .attr("y", "200")
    .text("Hello World !")

var texte3 = groupe3.append("text")
    .attr("x", "210")
    .attr("y", "300")
    .text("Hello World !")

//OnClick
circle3.on("click", () => {
    groupe1.attr("transform", "translate (150,0)");
    groupe2.attr("transform", "translate (50,0)");
    } )

//Graphique
const data = [20, 5, 25, 8, 15]

d3.select("body")
    .append("div")
    .attr("class", "div-rect")

const svgRect = d3.select(".div-rect")
    .append("svg")
    .attr("class", "svg-rect")
    .attr("width", 300)
    .attr("height", 100)

svgRect.selectAll(".svg-rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "rects")
    .attr("x", (d, i) => i * 30)
    .attr("y", (d, i) => parseInt(svgRect.attr("height")) - d)
    .attr("width", 20)
    .attr("height", (d => d))
