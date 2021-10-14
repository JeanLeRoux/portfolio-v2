const ProgressBar = (props: { bgcolor: any; completed: any; }) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "#FF4C29",
      borderRadius: 50,
      marginTop: 10,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'center' as const,
      transition: 'width 1s ease-in-out',
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold' as const
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
  