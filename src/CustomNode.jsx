// src/CustomNode.jsx
import PropTypes from 'prop-types';
import { Handle } from 'reactflow';
import './CustomNode.css';

const CustomNode = ({ data }) => {
  const detailsLines = data.details ? data.details.split('\n') : [];

  return (
    <div className={`custom-node ${data.type}`}>
      <div className="custom-node-header">
        {data.icon && <span className="custom-node-icon">{data.icon}</span>}
        <strong>{data.label}</strong>
      </div>
      <hr />
      <div className="custom-node-body">
        {detailsLines.map((line, index) => (
          <div key={index} className="custom-node-detail">
            {line}
          </div>
        ))}
      </div>
      <Handle type="target" position="top" className="custom-handle" />
      <Handle type="source" position="bottom" className="custom-handle" />
    </div>
  );
};

CustomNode.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    icon: PropTypes.element,
    label: PropTypes.string.isRequired,
    details: PropTypes.string,
    background: PropTypes.string,
    handleLabel: PropTypes.string,
  }).isRequired,
};

export default CustomNode;
