import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Backbtn from "./Backbtn";
import "./NodeclickDetails.css";
import { BsArchiveFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const NodeclickDetails = ({ node, nodes }) => {
  const [currentNode, setCurrentNode] = useState(node);
  const [nextNode, setNextNode] = useState(null);

  useEffect(() => {
    setCurrentNode(node);
  }, [node]);

  if (!currentNode) {
    return <div>Loading...</div>;
  }

  const renderInputs = () => {
    switch (currentNode.id) {
      case "1":
        return (
          <div>
            <div className="input-group">
              <label>Object or List</label>
              <select>
                <option>
                  <div className="select-flex">
                    <div>
                      <BsArchiveFill />
                    </div>
                    <div>Companies</div>
                  </div>
                </option>
              </select>
            </div>
            <div className="input-group">
              <label>Attribute</label>
              <select>
                <option>Name</option>
              </select>
            </div>
          </div>
        );
      case "2":
        return (
          <div>
            <div className="input-group">
              <label>Delay </label>
              <div className="delay-input">
                <div className="delay-input-box">
                  <div className="delay-number">
                    <input className="number-input"type="number" name="" id="" />
                  </div>
                  <div className="delay-select-box">
                    <select className="select-input" name="" id="">
                      <option value="Minute">Minute</option>
                      <option value="second">Second</option>
                      <option value="Hour">Hour</option>
                      <option value="Day">Day</option>
                      <option value="Week">Week</option>
                    </select>
                  </div>
                </div>
                <div>
                  <hr />
                </div>
                <div style={{background:"lightgrey",width:'100px',borderRadius:'5px',border:'2px solid grey'}} >
                  Use variable
                </div>
              </div>
            </div>
          </div>
        );
      case "3":
        return (
          <div>
            <div className="input-group">
              <label>Condition</label>
              <select>
                <option>Is Empty</option>
                <option>Is Not Empty</option>
              </select>
            </div>
          </div>
        );
      case "4":
        return (
          <div>
           
           <div className="input-group">
              <label>Task</label>
              <select>
                <option>Is Empty</option>
                <option>Is Not Empty</option>
              </select>
            </div>
          </div>
        );
      default:
        return (
          <div>
            <div className="input-group">
              <label>Default Input</label>
              <input type="text" placeholder="Default input" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="details">
      <div className="container">
        <Backbtn />
      </div>
      <div className="container2">
        <div className="header">
          <div
            className="icon"
            style={{
              background: currentNode.data.background,
              border: "1px solid",
              borderColor: currentNode.data.borderColor,
            }}
          >
            <div className="icon-svg" style={{ color: currentNode.data.color }}>
              {currentNode.data.icon}
            </div>
          </div>
          <div className="header-text">
            <h3>{currentNode.data.label}</h3>
          </div>
          <button className="change-button">Change</button>
        </div>
        <div className="description">
          <input type="text" placeholder="Add a description..." />
        </div>
        <div className="line">
          <div className="hr">
            <hr />
          </div>
        </div>
        <div className="inputs">
          <div className="input-text">Inputs</div>
          {renderInputs()}
        </div>
        <div className="next-step">
          <div className="next-text">Next step</div>
          <div className="next-ele">Add the next block in this workflow</div>
          <div className="step-block">
            <div className="step">
              <div
                className="icon-placeholder"
                style={{
                  background: currentNode.data.background,
                  border: "1px solid",
                  borderColor: currentNode.data.borderColor,
                }}
              >
                <div
                  style={{ color: currentNode.data.color, marginTop: "5px" }}
                >
                  {currentNode.data.icon}
                </div>
              </div>
              <div style={{ fontWeight: 700 }}>{currentNode.data.label}</div>
            </div>
            <div className="sub-step">
              <div className="ss1"></div>
              <div className="ss2">
                <div className="ss2-next">Next step</div>
                <div className="ss2-data">
                  <div style={{
                  background: currentNode.nextNodeDetails.background,
                  border: "1px solid",
                  borderColor: currentNode.nextNodeDetails.borderColor,
                  borderRadius: '5px',
                  padding:'2px'
                }}><div style={{ color: currentNode.nextNodeDetails.color, marginTop: "5px" }} >{currentNode.nextNodeDetails.icon}</div></div>
                  <div style={{ width: "80%" }}>
                    {currentNode.nextNodeDetails.label}
                  </div>
                  <div>
                    <button className="back-btn">
                      <RxCross1 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="refresh-trigger">Refresh trigger</button>
      </div>
    </div>
  );
};

NodeclickDetails.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
      background: PropTypes.string,
      borderColor: PropTypes.string,
      color: PropTypes.string,
      icon: PropTypes.node,
      label: PropTypes.string,
    }).isRequired,
  }).isRequired,
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.shape({
        background: PropTypes.string,
        borderColor: PropTypes.string,
        color: PropTypes.string,
        icon: PropTypes.node,
        label: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};

export default NodeclickDetails;
