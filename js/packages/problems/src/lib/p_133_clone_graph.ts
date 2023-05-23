class Node {
    val: number
    neighbors: Node[]
    constructor(val?: number, neighbors?: Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}

export function cloneGraph(node: Node | null): Node | null {

    if (null === node) return null

    // hashmap that keeps track of each node
    const graphMap = new Map<Node, Node>();

    function dfs(node: Node): Node {

        // If a vertex already exists in hashmap then we return its copy
        if (graphMap.has(node)) {
            return graphMap.get(node) as Node
        }

        // Copy the node
        const copy = new Node(node.val)

        // save the node
        // NOTE It is important to save the node
        // because we are going to check if it exists later on
        // The hashmap serves only to keep an overview of the graphs
        graphMap.set(node, copy)



        // Iterate over the neighbors of vertex
        for (let i = 0; i < node.neighbors.length; i++) {
            copy.neighbors.push(dfs(node.neighbors[i]))
        }

        return copy
    }

    return dfs(node)
}
