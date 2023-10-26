# Code Challenge 35 - Graphs

## Author: Emily Greason

### Implementation:

- **Implement a graph represented as an adjacency list that includes these methods:**

- add vertex
  - Arguments: value
  - Returns: The added vertex
  - Add a vertex to the graph
- add edge
  - Arguments: 2 vertices to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two vertices in the graph
  - If specified, assign a weight to the edge
  - Both vertices should already be in the Graph
- get vertices
  - Arguments: none
  - Returns all of the vertices in the graph as a collection (set, list, or similar)
  - Empty collection returned if there are no vertices
- get neighbors
  - Arguments: vertex
  - Returns a collection of edges connected to the given vertex
    - Include the weight of the connection in the returned collection
  - Empty collection returned if there are no vertices
- size
  - Arguments: none
  - Returns the total number of vertices in the graph
  - 0 if there are none

### Testing

1. Vertex can be successfully added to the graph

2. An edge can be successfully added to the graph

3. A collection of all vertices can be properly retrieved from the graph

4. All appropriate neighbors can be retrieved from the graph

5. Neighbors are returned with the weight between vertices included

6. The proper size is returned, representing the number of vertices in the graph

7. A graph with only one vertex and edge can be properly returned
