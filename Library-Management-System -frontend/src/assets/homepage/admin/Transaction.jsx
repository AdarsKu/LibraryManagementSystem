import { useState } from "react";
import PayFine from "../transction/PayFine";
import IssueBook from "../transction/IssueBook";
import ReturnBook from "../transction/ReturnBook";
import BookAvailability from "../transction/BookAvailable";



const TransactionPage = () => {
  const [flag, setFlag] = useState(0)

  return (<>
    <div
      style={{
        backgroundColor: 'none',
        padding: '10px 20px',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <button
          onClick={() => { setFlag(1) }}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            margin: '0 10px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Is Book available
        </button>
        <button
          onClick={() => { setFlag(2) }}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            margin: '0 10px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Issue book
        </button>
        <button
          onClick={() => { setFlag(3) }}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            margin: '0 10px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Return Book
        </button>
        <button
          onClick={() => { setFlag(4) }}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            margin: '0 10px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Pay Fine
        </button>

      </div>
    </div>

    {flag == 1 && <BookAvailability />}
    {flag == 2 && <IssueBook />}
    {flag == 3 && <ReturnBook />}
    {flag == 4 && <PayFine />}
  </>
  );
};


export default TransactionPage;
