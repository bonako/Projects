from collections import defaultdict


UVlink = "u", "v", 2

UXlink = "u", "x", 1

UWlink = "u", "w", 5

VWlink = "v", "w", 3

WYlink = "w", "y", 1

WZlink = "w", "z", 5

XVlink = "x", "v", 2

XYlink = "x", "y", 1

XWlink = "x", "w", 2

YZlink = "y", "z", 2

linkDict = {
    "U-V" : UVlink,
    "U-X" : UXlink,
    "U-W" : UWlink,
    "X-V" : XVlink,
    "V-W" : VWlink,
    "X-W" : XWlink,
    "X-Y" : XYlink,
    "Y-W" : WYlink,
    "Y-Z" : YZlink,
    "W-Z" : WZlink
    }

class Graph:
  def __init__(self):
    self.nodes = set()
    self.edges = defaultdict(list)
    self.distances = {}

  def add_node(self, value):
    self.nodes.add(value)

  def add_edge(self, from_node, to_node, distance):
    self.edges[from_node].append(to_node)
    self.edges[to_node].append(from_node)
    self.distances[(from_node, to_node)] = distance
    self.distances[(to_node, from_node)] = distance


def dijsktra(graph, initial):
  visited = {initial: 0}
  path = {}

  nodes = set(graph.nodes)

  while nodes: 
    min_node = None
    for node in nodes:
      if node in visited:
        if min_node is None:
          min_node = node
        elif visited[node] < visited[min_node]:
          min_node = node

    if min_node is None:
      break

    nodes.remove(min_node)
    current_weight = visited[min_node]

    for edge in graph.edges[min_node]:
      weight = current_weight + graph.distances[(min_node, edge)]
      if edge not in visited or weight < visited[edge]:
        visited[edge] = weight
        path[edge] = min_node

  links = path.items()

  nodes = ("u", "v", "w", "x", "y", "z")
  counter = 0
  for item in links:
    print(nodes[counter])
    print(item)
    counter =+ 1

  return visited, path
  
#Testing
g = Graph()
g.add_node('u')
g.add_node('v')
g.add_node('w')
g.add_node('x')
g.add_node('y')
g.add_node('z')
  

g.add_edge('u', 'v', 2)
g.add_edge('u', 'x', 1)
g.add_edge('u', 'w', 5)
g.add_edge('x', 'v', 2)
g.add_edge('v', 'w', 3)
g.add_edge('x', 'w', 2)
g.add_edge('x', 'y', 1)
g.add_edge('w', 'y', 1)
g.add_edge('y', 'z', 2)
g.add_edge('w', 'z', 5)

print(dijsktra(g, 'u'))


