import React from "react";

import "./projectsPreview.scss";

import { motion } from "framer-motion";

const projectsPreview = () => {
  return (
    <div className="projectsPreview-container">
      <motion.div
        initial={{ y: 2000 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4 }}
        animate={{ y: 0 }}
      >
        <img
          src="https://i.ibb.co/zSdBY00/screenshot123.png"
          alt="Auth project"
          className="auth-project"
        />
      </motion.div>
      <motion.div
        initial={{ y: 2000 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        animate={{ y: 0 }}
      >
        <img
          src="https://raw.githubusercontent.com/johnhaab/my-unsplash/master/123.png"
          alt="Unsplash project"
          className="unsplash-project"
        />
      </motion.div>
      <motion.div
        initial={{ y: 2000 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        animate={{ y: 0 }}
      >
        <img
          src="https://raw.githubusercontent.com/johnhaab/img-uploader/master/123123213213.png"
          alt="Img-Uploader project"
          className="img-uploader-project"
        />
      </motion.div>
    </div>
  );
};

export default projectsPreview;
