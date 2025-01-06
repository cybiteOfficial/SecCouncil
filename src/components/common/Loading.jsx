import React from 'react';
import { PropagateLoader } from 'react-spinners';

// SecCouncil component acting as a custom loader
const SecCouncil = () => {
  return (
    <div style={secCouncilStyles.container}>
      <h2 style={secCouncilStyles.text}>SecCouncil</h2>
    </div>
  );
};

const secCouncilStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  circle: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '10px solid orange',
    borderTop: '10px solid transparent',
    animation: 'spin 1s linear infinite',
  },
  text: {
    color: '#32a7f3',
    marginTop: '10px',
    fontSize: '50px',
    fontWeight: 'bold',
  },
};

// Loading component using SecCouncil loader and PropagateLoader
const Loading = () => {
  return (
    <>
      <div style={{ ...styles.loaderContainer, backgroundColor: "#FFFFFF" }}>
        <SecCouncil /> {/* Using the SecCouncil component */}
        <PropagateLoader size={15} color={"#32a7f3"} loading={true} />
      </div>
    </>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};

export default Loading;
