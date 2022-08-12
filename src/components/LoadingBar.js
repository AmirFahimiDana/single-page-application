import React, { Component } from "react";
import styles from "./LoadingBar.module.css";

class LoadingBar extends Component {
  render() {
    return (
      <div>
        <label>
          Loading...
          <span className={styles.sronly}></span>
          <progress></progress>
        </label>
      </div>
    );
  }
}

export default LoadingBar;
