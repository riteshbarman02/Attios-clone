// src/components/NodeDetails.jsx
import './NodeDetails.css'
const NodeDetails = ({ node }) => {
  if (!node) {
    return <p>Click on a node to see its details</p>;
  }

  return (
    <div className='details'>
      <div className='child1'>
      <div className="left">
      <div className='icon'> {node.data.icon}</div>
      <div><h1><strong></strong> {node.data.label}</h1></div>
      </div>
      <div><button className='change-btn'>change</button></div>
      </div>
      <div className="textbox"><input type="text" placeholder='Add a Description.....'/></div>
      <div className="line"><hr /></div>
      <div><p> {node.data.label}</p></div>
      <div><p> {node.data.details}</p></div>
    </div>
  );
};

export default NodeDetails;
