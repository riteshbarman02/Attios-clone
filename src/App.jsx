import { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import './App.css';  // Import the global styles if any

const nodeTypes = {
  customNode: CustomNode,
};

const initialNodes = [
  { id: '1', type: 'customNode', position: { x: 300, y: 200 }, data: { type: 'Data', label: 'Attribute updated', details: 'Name in Companies updated', icon: '📊' } },
  { id: '2', type: 'customNode', position: { x: 300, y: 350 }, data: { type: 'Delays', label: 'Delay', details: 'Wait for 5 minutes', icon: '⏳' } },
  { id: '3', type: 'customNode', position: { x: 300, y: 500 }, data: { type: 'Conditions', label: 'Filter', details: 'Is attribute still empty?', icon: '🔍' } },
  { id: '4', type: 'customNode', position: { x: 300, y: 650 }, data: { type: 'Conditions', label: 'Create Task', details: 'Create a reminder', icon: '✅' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [toolbarOpen, setToolbarOpen] = useState(true);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onNodeClick = useCallback(
    (event, node) => {
      setSelectedNode(node);
      setToolbarOpen(true);  // Open toolbar on node click
    },
    [],
  );

  const toggleToolbar = () => {
    setToolbarOpen((prevOpen) => !prevOpen);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: toolbarOpen ? '70vw' : '100vw', height: '100vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
        >
          <Controls />
          <MiniMap />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
      {toolbarOpen && (
        <div className="side-toolbar">
          <button onClick={toggleToolbar} className="toggle-button">Close</button>
          {selectedNode ? (
            <div className='details'>
              <div></div>
              <div><p><strong>Label:</strong> {selectedNode.data.label}</p></div>
              <div><p><strong>Details:</strong> {selectedNode.data.details}</p></div>
            </div>
          ) : (
            <p>Click on a node to see its details</p>
          )}
        </div>
      )}
      {!toolbarOpen && (
        <button onClick={toggleToolbar} className="toggle-button" style={{ position: 'absolute', right: 0 }}>
          Open
        </button>
      )}
    </div>
  );
}
