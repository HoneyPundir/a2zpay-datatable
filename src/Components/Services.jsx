import React, { useState } from 'react'

const Services = () => {
    const [tableHeading, setTableHeading] = useState([
        "Date",
        "User Id/Name/Mo. No.",
        "Order Id",
        "Transaction Id",
        "Description",
        "Order Value",
        "Balance",
        "Operator Name",
        "Commission Type",
        "Service",
        "Credit",
        "Debit",
        "Comm/Sur",
        "GST2",
        "TDS",
        "CCF",
        "Cl Bal.",
        "Status",
        "Fund Type",
        "Fund Bal.",
        "Api Bal.",
        "Purchase",
        "Income",
        "Fund Total",
        "Virtual",
        "Stock Due",
        "Admin Income",
        "Total Bal",
        "Remarks",
      ]);
    
      const data = [
        {
          status: "Success",
          date: "01-02-2024",
          time: '05:01:22 PM',
          userId:'Rt10001',
          name:'Rajeev Pundir',
          moNo:'887754386',
          orderId: "ART1012317208030282",
          transactionId: "419422929588",
          description: "Money Sent from CA via IMPS",
          orderValue: "4,050.00",
          drBr: "3.54",
          balance: "37,223.52",
        },
        {
          status: "Success",
          date: "01-02-2024",
          time: '05:01:22 PM',
          userId:'Rt10001',
          name:'Rajeev Pundir',
          moNo:'9317721000',
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
          time: '05:01:22 PM',
          userId:'Rt10001',
          name:'Rajeev Pundir',
          moNo:'1478523690',
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
          time: '05:01:22 PM' ,
          userId:'Rt10001',
          name:'Rajeev Pundir',
          moNo:'9876543210',
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
          time: '05:01:22 PM',
          userId:'Rt10001',
          name:'Rajeev Pundir',
          moNo:'123456789',
          orderId: "ART10123147898030282",
          transactionId: "419422929588",
          description: "Money Sent from CA via IMPS",
          orderValue: "4,050.00",
          drBr: "3.54",
          balance: "47,223.52",
        },
    
      ];
      const [tableData, setTableData] = useState(data);
      return (
        <div className="datatable">
          <table>
            <thead>
              <tr>
                {tableHeading.map((heading, index) => (
                  <th key={index}>{heading}</th>
                ))}
              </tr>
            </thead>
    
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {tableHeading.map((heading, colIndex) => (
                    <td key={colIndex}>
                      {heading === "Status" && row.status}
                      {heading === "Date" && (<>{row.date} <br /> {row.time}</>) }
                      {heading === "User Id/Name/Mo. No." && (<>{row.userId} <br /> {row.name} <br /> {row.moNo}</>) }
                      {heading === "Order Id" && row.orderId}
                      {heading === "Transaction Id" && row.transactionId}
                      {heading === "Description" && row.description}
                      {heading === "Order Value" && row.orderValue}
                      {heading === "Dr/Cr" && row.drBr}
                      {heading === "Balance" && row.balance}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default Services