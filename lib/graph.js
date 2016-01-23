var utils = require('./utils');

var UndirectedGraph = function(){
    this.graph = {};
};

UndirectedGraph.prototype = {
  addVertex : utils.addVertex,

  addEdge : function(from,to){
      if(!this.graph[from]) this.addVertex(from);
      if(!this.graph[to]) this.addVertex(to);

      this.graph[from].push(to);
      this.graph[to].push(from);
  },

  hasEdgeBetween : utils.hasEdgeBetween,

  order : utils.order,

  size : function(){
      var size = 0;
      for(var i in this.graph)
          size += this.graph[i].length;
      return size/2;
  },

  pathBetween : utils.pathBetween,

  farthestVertex : utils.farthestVertex
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

    size : function(){
        var size = 0;
        for(var i in this.graph)
            size += this.graph[i].length;
        return size;
    },

    pathBetween : utils.pathBetween,

    farthestVertex : utils.farthestVertex
};
var graphs = {UndirectedGraph : UndirectedGraph, DirectedGraph : DirectedGraph};
module.exports = graphs;
