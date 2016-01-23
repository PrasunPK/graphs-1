utils = {};

utils.addVertex = function(vertex){
    this.graph[vertex] = [];
}

utils.addEdge = function(from,to){
    this.graph[from].push(to);
    this.graph[to].push(from);
}

utils.hasEdgeBetween = function(from, to){
    var current_from = this.graph[from];
    for(var i = 0; i < current_from.length; i++){
        if(current_from[i] == to)
          return true;
    }
    return false;
}

utils.order = function(){
    return Object.keys(this.graph).length;
}

utils.size = function(){
    var size = 0;
    for(var i in this.graph){
        size += this.graph[i].length;
    }
    return size;
}

module.exports = utils;
