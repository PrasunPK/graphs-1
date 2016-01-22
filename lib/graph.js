var UndirectedGraph = function(){
    this.graph = {};
};

UndirectedGraph.prototype = {
  addVertex : function(vertex){
      this.graph[vertex] = [];
  },

  addEdge : function(from,to){
      this.graph[from].push(to);
      this.graph[to].push(from);
  },

  hasEdgeBetween : function(from, to){
      var current_from = this.graph[from];
      for(var i = 0; i < current_from.length; i++){
          if(current_from[i] == to)
            return true;
      }
      return false;
  },

  order : function(){
      return Object.keys(this.graph).length;
  }
};

var graphs = {UndirectedGraph : UndirectedGraph};
module.exports = graphs;
