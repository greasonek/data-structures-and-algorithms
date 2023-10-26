'use strict';

const {Graph} = require('./graph');

describe('Graph implementation', () => {
  test('Vertex can be successfully added to the graph', () => {
    const myGraph = new Graph();
    myGraph.addVertex(3);
    myGraph.addVertex(5);
    expect(myGraph.adjacencyList.size).toBe(2);
  });
  test('An edge can be successfully added to the graph', () => {
    const myGraph = new Graph();
    const V1 = myGraph.addVertex(3);
    const V2 = myGraph.addVertex(5);
    myGraph.addEdge(V1, V2, 5);

    const edgesForV1 = myGraph.getEdges(V1);
    expect(edgesForV1).toHaveLength(1);
  });
  test('A collection of all vertices can be properly retrieved from the graph', () => {
    const myGraph = new Graph();
    myGraph.addVertex(3);
    myGraph.addVertex(5);
    expect(myGraph.getVertices().length).toEqual(2);
  });
  test('All appropriate neighbors can be retrieved from the graph', () => {
    const myGraph = new Graph();
    const V1 = myGraph.addVertex('a');
    const V2 = myGraph.addVertex('b');
    const V3 = myGraph.addVertex('c');

    myGraph.addEdge(V1, V2, 5);
    myGraph.addEdge(V1, V3, 5);

    expect(myGraph.getNeighbors(V1)).toHaveLength(2);
  });
  test('Neighbors are returned with the weight between vertices included', () => {
    const myGraph = new Graph();
    const V1 = myGraph.addVertex('a');
    const V2 = myGraph.addVertex('b');

    myGraph.addEdge(V1, V2, 5);
    expect(myGraph.getNeighbors(V1)[0].weight).toBe(5);
  });
  test('The proper size is returned, representing the number of vertices in the graph', () => {
    const myGraph = new Graph();
    const V1 = myGraph.addVertex('a');
    const V2 = myGraph.addVertex('b');
    const V3 = myGraph.addVertex('c');

    myGraph.addEdge(V1, V2, 5);
    myGraph.addEdge(V1, V3, 5);

    expect(myGraph.size()).toBe(3);
  });
  // test('A graph with only one vertex and edge can be properly returned', () => {
  //   const myGraph = new Graph();
  //   const V1 = myGraph.addVertex('a');
  //   myGraph.addEdge(V1, V1, 5);

  //   expect(myGraph.getNeighbors(V1)[0]).toBe(V1);

  // });
});

module.exports = Graph;

