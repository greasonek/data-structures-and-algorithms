'use strict';

class Node {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(from, to, weight = null) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // - add vertex
  // - Arguments: value
  // - Returns: The added vertex
  // - Add a vertex to the graph
  addVertex(value){
    const vertex = new Node(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  // - add edge
  // - Arguments: 2 vertices to be connected by the edge, weight (optional)
  // - Returns: nothing
  // - Adds a new edge between two vertices in the graph
  // - If specified, assign a weight to the edge
  // - Both vertices should already be in the Graph
  addEdge(vertex1, vertex2, weight){
    // assumes unidirectional edge
    if(!this.adjacencyList.has(vertex1) || !this.adjacencyList.has(vertex2)) throw new Error('invalid vertices');
    let edges = this.adjacencyList.get(vertex1);
    const newEdge = new Edge(vertex1, vertex2, weight);
    edges.push(newEdge);
  }

  addUndirectioalEdge(a, b, weight) {
    // assumes bidirectional edges
    this.addEdge(a, b, weight);
    this.addEdge(b, a, weight);
  }

  // - get vertices
  // - Arguments: none
  // - Returns all of the vertices in the graph as a collection (set, list, or similar)
  // - Empty collection returned if there are no vertices
  getVertices() {
    const vertexArr = [];
    this.adjacencyList.forEach((_, key) => vertexArr.push(key));
    return vertexArr;
  }

  // - get neighbors
  // - Arguments: vertex
  // - Returns a collection of edges connected to the given vertex
  //   - Include the weight of the connection in the returned collection
  // - Empty collection returned if there are no vertices
  getNeighbors(vertex) {
    if(!vertex) return;
    const edges = this.getEdges(vertex);
    if(edges) {
      return edges.map((edge) => ({
        to: edge.to,
        weight: edge.weight
        // edge.weight;
      }));
      //map through and return "to" values (nodes with the value of ...)
    } else return null;
  }

  getEdges(vertex) {
    return this.adjacencyList.has(vertex) ? this.adjacencyList.get(vertex) : null;
  }

  // - size
  // - Arguments: none
  // - Returns the total number of vertices in the graph
  // - 0 if there are none
  size(){
    return this.adjacencyList.size;
  }

  breadthFirst(Node) {
    if(!Node) return null;
    const result = [];
    const queue = [Node];
    const nodeMap = new Map();

    nodeMap.set(Node, true);
    while(queue.length > 0){
      let current = queue.shift();
      // process node
      result.push(current);
      // get neighbors
      let neighbors = this.getNeighbors(current);
      neighbors.forEach((neighbor) => {
        // check map if neighbor is not in map, add to map and queue
        if(!nodeMap.has(neighbor.to)){
          nodeMap.set(neighbor.to, true);
          queue.unshift(neighbor.to);
        }
      });
    }
    return result;

  }
}
module.exports = { Node, Edge, Graph};
