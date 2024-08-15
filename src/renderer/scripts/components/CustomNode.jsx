import PropTypes from "prop-types";
import { Handle } from "reactflow";
import "./CustomNode.css";

const CustomNode = ({ data }) => {
  const detailsLines = data.details ? data.details.split("\n") : [];

  return (
    <div className={"custom-node "}>
      <div className="custom-node-header">
        {(
          <div
            className="custom-node-icon"
            style={{
              background: data.background,
              border: "1px solid",
              borderColor: data.borderColor,
            }}
          >
            <div className="node-icon" style={{color: data.color}}>{data.icon}</div>
          </div>
        )}
        <h4>
          <strong>{data.label}</strong>
        </h4>
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
