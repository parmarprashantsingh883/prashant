
import React from "react";

export default function Container({ children, title }) {
  return (
    <div style={styles.wrapper}>
      {title && <h2 style={styles.title}>{title}</h2>}
      <div style={styles.container}>{children}</div>
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial",
  },
  title: {
    marginBottom: "15px",
    fontSize: "20px",
  },
  container: {
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    background: "#f9f9f9",
    minHeight: "150px",
  },
};
