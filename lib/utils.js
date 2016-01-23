utils = {};

utils.addVertex = function(vertex){
    this.graph[vertex] = [];
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

module.exports = utils;
