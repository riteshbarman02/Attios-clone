import { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './components/CustomNode';
import SideToolbar from './components/SideToolbar';
import '../styles/App.css';
import { BiCategoryAlt } from "react-icons/bi";
import { IoMdTimer } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { MdOutlineTask } from "react-icons/md";
import EditableNoteNode from './components/EditableNoteNode';
import NodeclickDetails from './components/NodeclickDetails'; // Import the NodeclickDetails component

const nodeTypes = {
  customNode: CustomNode,
  editableNoteNode: EditableNoteNode,
};

const initialNodes = [
  { id: '1', type: 'customNode', position: { x: 400, y: 175 },
   data: { type: 'Data', label: 'Attribute updated', details: 'Name in Companies updated', icon: <BiCategoryAlt />, background: "#E1EBFC", borderColor: "#D6E5FD", color: '#407FF2' } ,
   nextNodeDetails:{ type: 'Delays', label: 'Delay', details: 'Wait for 5 minutes', icon: <IoMdTimer />, background: "#FFF3CC", borderColor: "#FFF0C2", color: '#F5B900'}
},
  { id: '2', type: 'customNode', position: { x: 400, y: 350 },
   data: { type: 'Delays', label: 'Delay', details: 'Wait for 5 minutes', icon: <IoMdTimer />, background: "#FFF3CC", borderColor: "#FFF0C2", color: '#F5B900' } , 
   nextNodeDetails:{  type: 'Conditions', label: 'Filter', details: 'Is attribute still empty?', icon: <CiFilter />, background: "#FEECF1", borderColor: "#FEEAEF", color: '#F87AA0'}},
  { id: '3', type: 'customNode', position: { x: 400, y: 500 }, data: { type: 'Conditions', label: 'Filter', details: 'Is attribute still empty?',  icon: <CiFilter />, background: "#FEECF1", borderColor: "#FEEAEF", color: '#F87AA0' } ,
    nextNodeDetails:{ type: 'Conditions', label: 'Create Task', details: 'Create a reminder', icon: <MdOutlineTask />, background: "#DAF4FC", borderColor: "#CCF0FA", color: '#78D8F2'}},
  { id: '4', type: 'customNode', position: { x: 400, y: 650 },
   data: { type: 'Conditions', label: 'Create Task', details: 'Create a reminder', icon: <MdOutlineTask />, background: "#DAF4FC", borderColor: "#CCF0FA", color: '#78D8F2' } ,
   nextNodeDetails:{ type: 'Conditions', label: 'Create Task', details: 'Create a reminder', icon: <MdOutlineTask />, background: "#DAF4FC", borderColor: "#CCF0FA", color: '#78D8F2'}
  },


  { id: '5', type: 'editableNoteNode', position: { x: 50, y: 170 }, data: { title: 'Write a note...', author: 'ABHINAV GUPTA' } },
  { id: '6', type: 'editableNoteNode', position: { x: 50, y: 350 }, data: { title: 'Set the amount of time you want to give the Owner to update the deal.', author: 'Attios tip' } },
  { id: '7', type: 'editableNoteNode', position: { x: 50, y: 500 }, data: { title: 'Checks whether an ECV has been added to a deal that was moved to a stage requiring the data.', author: 'Attios tip' } },
  { id: '8', type: 'editableNoteNode', position: { x: 50, y: 650 }, data: { title: 'Assign a task to the Owner, prompting them to fill out the Estimated Contract Value.', author: 'Attios tip' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [toolbarOpen, setToolbarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--background-color', darkMode ? '#242424' : '#ffffff');
    root.style.setProperty('--text-color', darkMode ? 'rgba(255, 255, 255, 0.87)' : '#213547');
    root.style.setProperty('--button-bg-color', darkMode ? '#1a1a1a' : '#f9f9f9');
    root.style.setProperty('--button-hover-border-color', darkMode ? '#646cff' : '#747bff');
    root.style.setProperty('--side-toolbar-bg-color', darkMode ? '#242424' : '#ffffff');
    root.style.setProperty('--side-toolbar-border-color', darkMode ? '#ccc' : '#ccc');
    root.style.setProperty('--custom-node-bg-color', darkMode ? '#282828' : '#ffffff');
    root.style.setProperty('--custom-node-border-color', darkMode ? '#ccc5c5' : '#ccc5c5');
    root.style.setProperty('--custom-node-hover-border-color', darkMode ? '#646cff' : 'rgb(76, 76, 203)');
    root.style.setProperty('--custom-node-text-color', darkMode ? 'rgba(255, 255, 255, 0.87)' : '#7e7c7c');
    root.style.setProperty('--custom-handle-bg-color', darkMode ? '#242424' : '#ffffff');
    root.style.setProperty('--custom-handle-border-color', darkMode ? '#555' : '#555');
    root.style.setProperty('--hr-color', darkMode ? 'rgba(255, 255, 255, 0.87)' : '#030000');
  }, [darkMode]);

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

  // const toggleDarkMode = () => {
  //   setDarkMode((prevMode) => !prevMode);
  // };

  return (
    <div className='main-container'>
      <div className='reactflow'>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
        >
          <div className='controls'><Controls /></div>
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
      <div className='sidebar'>
        <SideToolbar node={selectedNode} isOpen={toolbarOpen} toggleToolbar={toggleToolbar} />
        {selectedNode && <NodeclickDetails node={selectedNode} />} {/* Render NodeclickDetails with selected node data */}
      </div>
    </div>
  );
}
