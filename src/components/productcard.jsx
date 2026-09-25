function ProductCard({ productName, price, inStock, image }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px 0' }}>
      <img
        src={image}
        alt={productName}
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'contain',
          display: 'block',
          backgroundColor: '#f5f5f5',
          borderRadius: '6px'
        }}
      />
      <h3>{productName}</h3>
      {inStock ? (
        <p style={{ color: 'green', fontWeight: 'bold' }}>Price: ${price}</p>
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold' }}>Out of Stock</p>
      )}
    </div>
  );
}

export default ProductCard;