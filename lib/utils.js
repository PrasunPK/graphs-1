var _ = require('lodash') ;
utils = {};

utils.addVertex = function(vertex){
    this.graph[vertex] = [];
};

utils.hasEdgeBetween = function(from, to){
    return this.graph[from].indexOf(to) >= 0;
};

utils.order = function(){
    return Object.keys(this.graph).length;
};

utils.pathBetween = function(from,to,path){
  var path = path || [from];
  if(from == to)
    return path;
  if(this.graph[from].indexOf(to) != -1)
    return path.concat(to);

  for (var index in this.graph[from]){
      var adjacent = this.graph[from][index];
      if(path.indexOf(adjacent) == -1 && adjacent != from)
          var traversedPath = this.pathBetween(adjacent,to,path.concat(adjacent)) ;
      if(traversedPath && traversedPath.indexOf(to) != -1)
        return traversedPath;
  }
  return [];
};

utils.farthestVertex = function(from,traversedPath){
    var traversedPath = traversedPath || [from];
    for (var index in this.graph[from]){
        var adjacent = this.graph[from][index];
        if(traversedPath.indexOf(adjacent) == -1)
            return this.farthestVertex(adjacent,traversedPath.concat(adjacent)) ;
    }
    return from;
}

utils.allPaths = function(from, to, paths, traversedPaths){
    var paths = paths || [];
    var traversedPaths = traversedPaths || [];
    if(from == to) return traversedPaths.concat(to);

    for(var index in this.graph[from]){
        var adjacent = this.graph[from][index];
        if(traversedPaths.indexOf(adjacent) == -1)
            var currentPath = this.allPaths(adjacent, to, paths, traversedPaths.concat(from));
            if(_.last(currentPath) == to)
				paths.push(currentPath);
    }
	return paths;
}

module.exports = utils;
