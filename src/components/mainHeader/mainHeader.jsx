import React from "react";

import "./mainHeader.scss";

import { FiArrowUpRight } from "react-icons/fi";

import { motion } from "framer-motion";

const mainHeader = () => {
  return (
    <div className="mainHeader-container">
      <div className="mainHeader-group-one">
        <h1>Transforming code</h1>
        <motion.div
          initial={{ x: 1000 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.4 }}
          animate={{ x: 0 }}
        >
          <span>
            My Work <FiArrowUpRight />
          </span>
        </motion.div>
      </div>
      <div className="mainHeader-group-two">
        <motion.div
          initial={{ x: -1000 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.4 }}
          animate={{ x: 0 }}
        >
          <span>
            Connect With Me <FiArrowUpRight />
          </span>
        </motion.div>
        <h1>into digital reality.</h1>
      </div>
    </div>
  );
};

export default mainHeader;
