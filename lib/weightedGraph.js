var _ = require('lodash');
var utils = require('./utils');

var WeightedGraph = function(){
    this.graph = {};
};

var Edge = function(name, from, to, weight){
    this.name = name;
    this.from = from;
    this.to = to;
    this.weight = weight;
};

var getLength = function(path){
    var length = 0;
    for (var index in path)
        length += path[index].weight;
    return length;
};

var minimalWeightedPath = function(currentPath, path){
    if(!currentPath) return true ;
    return getLength(currentPath) > getLength(path) ;
};

WeightedGraph.prototype = {
    addVertex : utils.addVertex,

    addEdge : function(edge){
        this.graph[edge.from].push(edge);
    },

    shortestPath : function(from, to, traversedPath){
        var traversedPath = traversedPath || [];
        if(from == to) return traversedPath;
        for(var index in this.graph[from]){
            var adjacent = this.graph[from][index];
            var path = this.shortestPath(adjacent.to, to, traversedPath.concat(adjacent));
            if((_.last(path).to == to) && minimalWeightedPath(currentPath, path))
                var currentPath = path;
        }
        return currentPath;
    }
};

var graphs = {WeightedGraph:WeightedGraph, Edge : Edge};
module.exports = graphs;
