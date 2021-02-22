import ewhasymbol from '../assets/ewhasymbol.png';

const ProgressBar = (props) => {
  const { completed } = props;
  const { rotation } = props;

  const containerStyles = {
    height: '25px',
    width: '250px',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: '10px auto'
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    //background: 'linear-gradient(to left, #126424, #76dfe2)',
    //boxShadow: '0 3px 3px -5px #a2d8e6, 0 2px 5px #3c7c33',
    background: 'linear-gradient(to left, #F2709C, #FF9472)',
    boxShadow: '0 3px 3px -5px #F2709C, 0 2px 5px #F2709C',
    borderRadius: '20px',
    transition: '1s ease 0.005s'
  }


  const imgStyles = {
    width: '33px',
    height: '33px',
    marginLeft: `${(completed) * 2.5 - 20}px`,
    transform: `rotate(${rotation}turn)`,
    transition: 'all ease 1s'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <img src={ewhasymbol} style={imgStyles} />
      </div>
    </div>
  );
};

export default ProgressBar;