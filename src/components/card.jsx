function Card({ children }) {
  return (
    <div style={{ 
      border: '2px solid #ddd', 
      borderRadius: '10px', 
      padding: '20px', 
      marginBottom: '15px',
      backgroundColor: '#f9f9f9'
    }}>
      {children}
    </div>
  );
}

export default Card;