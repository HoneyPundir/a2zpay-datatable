import React, { useState } from "react";

const Status = () => {
  const initialHeadings = [
    { name: "Date", toShow: false },
    { name: "User Id/Name/Mo. No.", toShow: true },
    { name: "Order Id", toShow: false },
    { name: "Transaction Id", toShow: false },
    { name: "Description", toShow: true },
    { name: "Order Value", toShow: false },
    { name: "Balance", toShow: false },
    { name: "Operator Name", toShow: false },
    { name: "Commission Type", toShow: false },
    { name: "Service", toShow: true },
    { name: "Credit", toShow: true },
    { name: "Debit", toShow: false },
    { name: "Comm/Sur", toShow: false },
    { name: "GST2", toShow: false },
    { name: "TDS", toShow: false },
    { name: "CCF", toShow: false },
    { name: "Cl Bal.", toShow: false },
    { name: "Status", toShow: false },
    { name: "Fund Type", toShow: false },
    { name: "Fund Bal.", toShow: false },
    { name: "Api Bal.", toShow: false },
    { name: "Purchase", toShow: true },
    { name: "Income", toShow: true },
    { name: "Fund Total", toShow: true },
    { name: "Virtual", toShow: true },
    { name: "Stock Due", toShow: false },
    { name: "Admin Income", toShow: true },
    { name: "Total Bal", toShow: true },
    { name: "Remark", toShow: false },
  ];
  const [headings, setHeadings] = useState(initialHeadings);

  const handleCheckboxChange = (index) => {
    const newHeadings = [...headings];
    newHeadings[index].toShow = !newHeadings[index].toShow;
    setHeadings(newHeadings);
  };

  const data = [
    {
      date: "01-02-2024",
      time: "05:01:22 PM",
      userId: "Rt10001",
      name: "Rajeev Pundir",
      moNo: "887754386",
      orderId: "ART1012317208030282",
      transactionId: "419422929588",
      description: "Money Sent from CA via IMPS",
      orderValue: "4,050.00",
      balance: "37,223.52",
      operator: "operator",
      commissionType: "commissionType",
      service: "service",
      credit: "credit",
      debit: "debit",
      commSur: "commSur",
      gst2: "gst2",
      tds: "tds",
      ccf: "ccf",
      clBal: "clBal",
      status: "status",
      fundType: "fundType",
      fundBal: "fundBal",
      apiBal: "apiBal",
      purchase: "purchase",
      income: "income",
      fundTotal: "fundTotal",
      virtual: "virtual",
      stockDue: "stockDue",
      adminIncome: "adminIncome",
      totalBal: "totalBal",
      remark: "remark",
    },
    {
      status: "Success",
      date: "01-02-2024",
      time: "05:01:22 PM",
      userId: "Rt10001",
      name: "Rajeev Pundir",
      moNo: "9317721000",
      orderId: "ART1758317208030282",
      transactionId: "419422929588",
      description: "Money Sent from CA via IMPS",
      orderValue: "4,415.00",
      drBr: "3.54",
      balance: "37,789.52",
    },
    {
      status: "Success",
      date: "01-02-2024",
      time: "05:01:22 PM",
      userId: "Rt10001",
      name: "Rajeev Pundir",
      moNo: "1478523690",
      orderId: "ART1012317208012572",
      transactionId: "419422929102",
      description: "Money Sent from CA via IMPS",
      orderValue: "8,010.00",
      drBr: "3.54",
      balance: "39,223.52",
    },
    {
      status: "Failed",
      date: "01-02-2024",
      time: "05:01:22 PM",
      userId: "Rt10001",
      name: "Rajeev Pundir",
      moNo: "9876543210",
      orderId: "ART1012317208045871",
      transactionId: "419422929102",
      description: "Money Sent from CA via IMPS",
      orderValue: "4,050.00",
      drBr: "3.54",
      balance: "37,369.52",
    },
    {
      status: "Success",
      date: "01-02-2024",
      time: "05:01:22 PM",
      userId: "Rt10001",
      name: "Rajeev Pundir",
      moNo: "123456789",
      orderId: "ART10123147898030282",
      transactionId: "419422929588",
      description: "Money Sent from CA via IMPS",
      orderValue: "4,050.00",
      drBr: "3.54",
      balance: "47,223.52",
    },
  ];
  const [tableData, setTableData] = useState(data);

  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const [checkboxActive, setCheckboxActive] = useState(false);

  return (
    <>
      <div className="detail">
        <div className="left">
          <input type="text" placeholder="Search.." />
        </div>
        <div className="right">
          <button className="view">View</button>
          <button className="export">
            <i className="fa-solid fa-file-excel"></i>
          </button>
          <button className="csv">
            <i className="fa-solid fa-file-csv"></i>
          </button>
          <button className="filter" onClick={()=>{setCheckboxActive(true)}}>
            <i className="fa-solid fa-filter"></i>
          </button>
        </div>
      </div>
      <div className="radio-container">
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="all"
              checked={selectedValue === "all"}
              onChange={handleRadioChange}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              value="success"
              checked={selectedValue === "success"}
              onChange={handleRadioChange}
            />
            Success
          </label>
          <label>
            <input
              type="radio"
              value="failed"
              checked={selectedValue === "failed"}
              onChange={handleRadioChange}
            />
            Failed
          </label>
          <label>
            <input
              type="radio"
              value="pending"
              checked={selectedValue === "pending"}
              onChange={handleRadioChange}
            />
            Pending
          </label>
          <label>
            <input
              type="radio"
              value="reversed"
              checked={selectedValue === "reversed"}
              onChange={handleRadioChange}
            />
            Reaversed
          </label>
        </div>
      </div>
      <div className="datatable">
        <div className={`checkboxes ${checkboxActive ? "active" : ""} `}>
          <div className="heading">
            <span>Choose which columns you want to display by default</span>
            <div className="cut-icon" onClick={()=>{setCheckboxActive(false)}}>X</div>
          </div>
          <div className="boxes">
            {headings.map((heading, index) => (
              <li key={index}>
                <input
                  className="substituted"
                  aria-hidden="true"
                  type="checkbox"
                  id={heading.name}
                  checked={heading.toShow}
                  onChange={() => handleCheckboxChange(index)}
                />
                <label htmlFor={heading.name}>{heading.name}</label>
              </li>
            ))}
          </div>
        </div>

        <table>
          <thead>
            <tr>
              {headings
                .filter((heading) => heading.toShow)
                .map((heading, index) => (
                  <th key={index}>{heading.name}</th>
                ))}
            </tr>
          </thead>

          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headings
                  .filter((heading) => heading.toShow)
                  .map((heading, colIndex) => (
                    <td key={colIndex}>
                      {heading.name === "Date" && (
                        <>
                          {row.date} <br /> {row.time}
                        </>
                      )}
                      {heading.name === "User Id/Name/Mo. No." && (
                        <>
                          {row.userId} <br /> {row.name} <br /> {row.moNo}
                        </>
                      )}
                      {heading.name === "Order Id" && row.orderId}
                      {heading.name === "Transaction Id" && row.transactionId}
                      {heading.name === "Description" && row.description}
                      {heading.name === "Order Value" && row.orderValue}
                      {heading.name === "Balance" && row.balance}
                      {heading.name === "Operator Name" && row.operator}
                      {heading.name === "Commission Type" && row.commissionType}
                      {heading.name === "Service" && row.service}
                      {heading.name === "Credit" && row.credit}
                      {heading.name === "Debit" && row.debit}
                      {heading.name === "Comm/Sur" && row.commSur}
                      {heading.name === "GST2" && row.gst2}
                      {heading.name === "TDS" && row.tds}
                      {heading.name === "CCF" && row.ccf}
                      {heading.name === "Cl Bal." && row.clBal}
                      {heading.name === "Status" && row.status}
                      {heading.name === "Fund Type" && row.fundType}
                      {heading.name === "Fund Bal." && row.fundBal}
                      {heading.name === "Api Bal." && row.apiBal}
                      {heading.name === "Purchase" && row.purchase}
                      {heading.name === "Income" && row.income}
                      {heading.name === "Fund Total" && row.fundTotal}
                      {heading.name === "Virtual" && row.virtual}
                      {heading.name === "Stock Due" && row.stockDue}
                      {heading.name === "Admin Income" && row.adminIncome}
                      {heading.name === "Total Bal" && row.totalBal}
                      {heading.name === "Remark" && row.remark}
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Status;
