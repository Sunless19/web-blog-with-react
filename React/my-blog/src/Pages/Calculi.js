const Calculi = () => {
    const sum = () => {
        let total = 0;
        for (let i = 1; i <= 10; i++) {
            total += i;
        }
        return total;
    };

    return (
        <div>
            <h1> LAB1</h1>
            <p>Suma este: {sum()}</p>
            <p>tree has : {obj.member1} and {obj.member2}</p>
            <h1> LAB2</h1>
            <p> Lista de adiacenta :</p>
            <ul>
                {renderAdjacencyList()}
            </ul>
        </div>
    );
}

const renderAdjacencyList = () => {
    return Object.keys(AdjancencyList).map(node => (
        <li key={node}>
            Nodul {node} este adiacent cu: {AdjancencyList[node].join(', ')}
        </li>
    ));
};

export default Calculi;

export class Tree {
    constructor(member1, member2) {
        this._member1 = member1;
        this._member2 = member2;
    }
    
    get member1() {
        return this._member1;
    }
    
    get member2() {
        return this._member2;
    }
}

const obj = new Tree("Gigel", "Mariah");

console.log(obj.member1);
console.log(obj.member2);

const AdjancencyList = {
    1: [2, 3],
    2: [1, 4],
    3: [1, 5],
    4: [2],
    5: [3],
};

class Node {
    constructor(value, adjacencyList) {
        this.value = value;
        this.adjacentNodes = adjacencyList[value] || [];
    }
}

class Graph {
    constructor(adjacencyList) {
        this.AdjancencyList = adjacencyList;
    }

    dfs(startNode) {
        const visited = new Set();
        const result = [];
        this.dfsRecursive(startNode, visited, result);
        console.log('Ordinea nodurilor vizitate:', result);
    }
    
    dfsRecursive(node, visited, result) {
        if (visited.has(node.value)) {
            return;
        }

        visited.add(node.value);
        result.push(node.value);
        visitedNodes.push(node.value);

        for (let adjacentValue of node.adjacentNodes) {
            const adjacentNode = new Node(adjacentValue, this.AdjancencyList);
            this.dfsRecursive(adjacentNode, visited, result);
        }
    }
}

const visitedNodes=[]
const graf = new Graph(AdjancencyList);

const nodes = [new Node(1, AdjancencyList), new Node(2, AdjancencyList), new Node(3, AdjancencyList), new Node(4, AdjancencyList), new Node(5, AdjancencyList)];

nodes.forEach(node => {
    console.log(`Nodul ${node.value} are ca noduri adiacente: ${node.adjacentNodes.join(', ')}`);
});

graf.dfs(nodes[0]);
console.log(`Noduri vizitate ${visitedNodes}`);
