import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
const BANK_API = "https://sheltered-peak-03802.herokuapp.com/api/banklist";

const BankList = () => {
  const [searchText, setSearchText] = useState("");
  const [banks, getBank] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ error: false, message: "" });

  useEffect(() => {
    fetchBankData("");
  }, []);

  const getDataBySearchKey = () => {
    fetchBankData(searchText);
  };

  const fetchBankData = async (searchKey) => {
    setLoading(true);
    try {
      let response = await fetch(`${BANK_API}?BankName=${searchKey}`);
      let resData = await response.json();
      if (resData.data) {
        getBank(resData.data);
      }
      setLoading(false);
    } catch (error) {
      console.log("error ===>", error.message);
      setError({ error: true, message: error.message });
      setLoading(false);
    }
  };

  const debounced = useDebouncedCallback(() => {
    getDataBySearchKey();
  }, 600);

  return (
    <React.Fragment>
      {error.error ? (
        <div className="error">{error.message}</div>
      ) : (
        <React.Fragment>
          <div className="search-section">
            <input
              type="text"
              placeholder="Search by bank name"
              onChange={(e) => {
                setSearchText(e.target.value);
                debounced();
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  getDataBySearchKey();
                }
              }}
            />
            <button onClick={getDataBySearchKey}>&#8981;</button>
          </div>

          <div className="Bank-list-section">
            {loading ? (
              <div className="loading-section">
                <p>Loading...</p>
              </div>
            ) : banks.length > 0 ? (
              banks.map((bank, i) => (
                <div className="Bank-col" key={i}>
                  <div className="Bank-card">
                    <div className="property_text">
                      <span className="pn">Name:</span>
                      <span className="pp">{bank.BankName}</span>
                    </div>
                    <div className="property_text">
                      <span className="pn">Type:</span>
                      <span className="pp">{bank.Type}</span>
                    </div>
                    <div className="property_text">
                      <span className="pn">Short Code:</span>
                      <span className="pp">{bank.BankShortCode}</span>
                    </div>
                    <div className="property_text">
                      <span className="pn">Founded:</span>
                      <span className="pp">{bank.Founded}</span>
                    </div>
                    <div className="property_text">
                      <span className="pn">Headquarters:</span>
                      <span className="pp">{bank.Headquarters}</span>
                    </div>
                    <div className="property_text">
                      <span className="pn">Website:</span>
                      <span className="pp">{bank.Website}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-data-found">No Data Found</div>
            )}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default BankList;
