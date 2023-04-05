import React, { useState, useEffect } from "react";
import axios from "axios";
import "../theme/Receipts.css";
import Container from "../components/Bits/Container/Container";

const Receipts = () => {
  const [data, setData] = useState([]);
  const [stores, setStores] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);

  // form state fields
  const [category, setCategory] = useState("derek");

  axios.defaults.baseURL = "http://127.0.0.1:8090/fdb/project/finances";

  useEffect(() => {
    console.log("category", category);
  }, [category]);

  useEffect(() => {
    getData();
    getStores();
    getPaymentMethods();
  }, []);

  const postData = (e) => {
    e.preventDefault();
    // function to transact

    const transaction = [
      //    "_id": 369435906932738 -- Trader joes
      //    "_id": 369435906932737 -- Target
      //    "_id": 369435906932736 -- Wal-Mart

      {
        // some transaction
        paymentMethod: 387028092977155,
        store: 369435906932736,
        total: "",
        category: "",
      },
    ];
    const url = "/transact";
    axios.post(url, transaction).then((response) => {
      //   console.log(response);
      // setData(response.data);
      getData();
    });
  };

  const getData = () => {
    const query = `{
        "select": [
          "*",
          { "store": ["*"], "paymentMethod": ["*"]}
          ],
        "from": "receipts"
      }`;
    const url = "/query";
    axios.post(url, query).then((response) => {
      //   console.log(response);
      setData(response.data);
    });
  };

  const getStores = () => {
    const query = `{
        "select": [
          "*"
          ],
        "from": "stores"
      }`;
    const url = "/query";
    axios.post(url, query).then((response) => {
      //   console.log(response);
      setStores(response.data);
    });
  };

  const getPaymentMethods = () => {
    const query = `{
        "select": [
          "*"
          ],
        "from": "paymentMethod"
      }`;
    const url = "/query";
    axios.post(url, query).then((response) => {
      //   console.log(response);
      setPaymentMethods(response.data);
    });
  };
  return (
    <Container lay={{ x: "start", y: "start", d: "col" }}>
      <span>This is the receipt page.</span>
      <button onClick={getData}>Refresh</button>
      {/* {data.map((p) => (
        <div key={p["_id"]}>{p["receipts/category"]}</div>
    ))} */}
      {data.map((p, i) => (
        <div className="receiptResult" key={i}>
          <div>{p["receipts/category"]}</div>
          <div>{p.store["stores/name"]}</div>
          <div>{p.paymentMethod["paymentMethod/name"]}</div>
          <div>{p["receipts/total"]}</div>
        </div>
      ))}

      <form className="receipt-form">
        <div className="input-container">
          <label htmlFor="store">Store</label>
          <select id="store">
            <option disabled value="0">
              Select...
            </option>
            {stores.map((p, i) => (
              <option key={p["_id"]} value={p["_id"]} defaultValue={i === 2}>
                {p["stores/name"]}
              </option>
            ))}
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="total">Total</label>
          <input type="number" id="total" />
        </div>

        <div className="input-container">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select id="paymentMethod">
            {paymentMethods.map((p, i) => (
              <option key={p["_id"]} value={p["_id"]}>
                {p["paymentMethod/name"]}
              </option>
            ))}
          </select>
        </div>

        <div className="input-container">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
          />
        </div>

        <button onClick={postData}>Submit</button>
      </form>
    </Container>
  );
};

export default Receipts;
