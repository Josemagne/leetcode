import { cloneGraph } from './p_133_clone_graph';
class GraphNode {
    val: number
    neighbors: GraphNode[]
    constructor(val?: number, neighbors?: GraphNode[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}

describe("133. Clone Graph", () => {

    test("1", () => {
        const graph = new GraphNode(1);
        graph.neighbors = [new GraphNode(2), new GraphNode(3)]

        const clonedGraph = cloneGraph(graph)

        expect(clonedGraph).toBe(graph)
    })

})