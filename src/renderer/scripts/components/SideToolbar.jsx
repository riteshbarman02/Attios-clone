// src/components/SideToolbar.jsx
import NodeDetails from './NodeDetails';
import NodeclickDetails from './NodeclickDetails';
import './SideToolbar.css';

const SideToolbar = ({ node, isOpen, toggleToolbar }) => {
  return (
    <div className={`side-toolbar ${isOpen ? 'open' : ''}`}>
      <div className="toolbar-content">
        {!node || node.type === 'editableNoteNode' ? (
          <NodeDetails node={node} />
        ) : (
          <NodeclickDetails node={node} />
        )}
      </div>
    </div>
  );
};

export default SideToolbar;
