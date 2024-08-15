// src/components/NodeDetails.jsx
import React from 'react';
import { LuWorkflow } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import { BiError } from "react-icons/bi";
import { MdOutlineTask } from "react-icons/md";
import { IoDocumentOutline, IoCardOutline } from "react-icons/io5";
import './NodeDetails.css';

const onClick = () => {
  console.log("NodeDetails clicked");
};

const NodeDetails = ({ node }) => {
  return (
    <div className="details">
      <div className="box1">
        <div className="default-detail-box1">
          <div className="untitle-icon">
            <div>
              <p><LuWorkflow /></p>
            </div>
          </div>
          <div>
            <input
              className="untitled"
              type="text"
              placeholder="Untitled Workflow"
            />
          </div>
        </div>
        <div>
          <input type="text" placeholder="Add a description.." />
        </div>
        <div>
          <hr className="boxseparator" />
        </div>
        <div>
          <h3>Checklist</h3>
          <p>Make sure all issues are resolved before publishing</p>
        </div>
        <div className="filterbox">
          <div className="filterheader">
            <div className="headerstart">
              <div
                className="filtericon"
                style={{ background: "#DAF4FC", border: "1px solid #C3EDF9" }}
              >
                <h3 style={{ color: "#17BDE9" }}>
                  <MdOutlineTask />
                </h3>
              </div>
              <div>
                <h3>Create Task</h3>
              </div>
            </div>
            <div className="headerend">conditions</div>
          </div>
          <div>
            <hr />
          </div>
          <div className="headerdiscription">
            <div className="erroricon">
              <h3><BiError /></h3>
            </div>
            <div className="errordiscription">
              <p>This step still needs to be configured</p>
            </div>
          </div>
        </div>
        <div className="filterbox">
          <div className="filterheader">
            <div className="headerstart">
              <div className="filtericon">
                <h3 style={{ color: "#F65385" }}><CiFilter /></h3>
              </div>
              <div>
                <h3>Filter</h3>
              </div>
            </div>
            <div className="headerend">conditions</div>
          </div>
          <div>
            <hr />
          </div>
          <div className="headerdiscription">
            <div className="erroricon">
              <h3><BiError /></h3>
            </div>
            <div className="errordiscription">
              <p>This step still needs to be configured</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box2">
        <div>
          <p>Helpful resources</p>
        </div>
        <div className="suggestion-container">
          <div className="suggestion-block">
            <div className="suggestion-header">
              <div className="suggestion-icon">
                <p><IoDocumentOutline /></p>
              </div>
              <div>
                <p style={{ color: 'black', fontWeight: '600' }}>Documentation</p>
              </div>
            </div>
            <div className="suggestion-details">Find out more about how to best setup...</div>
          </div>
          <div className="suggestion-block">
            <div className="suggestion-header">
              <div className="suggestion-icon">
                <p><IoCardOutline /></p>
              </div>
              <div>
                <p style={{ color: 'black', fontWeight: '600' }}>Templates</p>
              </div>
            </div>
            <div className="suggestion-details">Get started with ready-made wor..</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeDetails;