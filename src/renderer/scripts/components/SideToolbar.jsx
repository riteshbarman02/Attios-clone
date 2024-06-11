// src/components/SideToolbar.jsx
import NodeDetails from './NodeDetails';
import './SideToolbar.css';

const SideToolbar = ({ node, isOpen, toggleToolbar }) => {
  return (
    <div className="side-toolbar">
      <button onClick={toggleToolbar} className="toggle-button">
        Close
      </button>
      <div className="toolbar-content">
        {isOpen && <NodeDetails node={node} />}
      </div>
    </div>
  );
};

export default SideToolbar;
