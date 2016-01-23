var utils = require('./utils');

var UndirectedGraph = function(){
    this.graph = {};
};

UndirectedGraph.prototype = {
  addVertex : utils.addVertex,

  addEdge : function(from,to){
      this.graph[from].push(to);
      this.graph[to].push(from);
  },

  hasEdgeBetween : utils.hasEdgeBetween,

  order : utils.order,

  size : utils.size
};

var DirectedGraph = function(){
    this.graph = {};
};

DirectedGraph.prototype = {
    addVertex : utils.addVertex,

    addEdge : function(from,to){
        this.graph[from].push(to);
    },

    hasEdgeBetween : utils.hasEdgeBetween,

    order : utils.order,

    size : utils.size
};
var graphs = {UndirectedGraph : UndirectedGraph, DirectedGraph : DirectedGraph};
module.exports = graphs;
