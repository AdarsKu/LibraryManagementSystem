

const ProductDetails = () => {
  // Preloaded product details
  const products = [
    { codeNoFrom: 'SC(B/M)000001', codeNoTo: 'SC(B/M)000004', bookCategory: 'Science' },
    { codeNoFrom: 'EC(B/M)000005', codeNoTo: 'EC(B/M)000009', bookCategory: 'Economics' },
    { codeNoFrom: 'FC(B/M)0000010', codeNoTo: 'FC(B/M)0000014', bookCategory: 'Fiction' },
    { codeNoFrom: 'CH(B/M)0000015', codeNoTo: 'CH(B/M)0000019', bookCategory: 'Children' },
    { codeNoFrom: 'PD(B/M)0000020', codeNoTo: 'PD(B/M)0000024', bookCategory: 'Personal Development' },
  ]


  return (
    <>
      {/* Table displaying product details */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Code No From</th>
            <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Code No To</th>
            <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{product.codeNoFrom}</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>{product.codeNoTo}</td>
              <td>
                <button
                  onClick={() => alert('Update Membership')}
                  style={{
                    padding: '5px 10px',
                    backgroundColor: '#2196F3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  {product.bookCategory}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};


export default ProductDetails;
