// import React from 'react'
// // import { handleDownloadExcel } from './Excel'
// import {utils, writeFileXLSX} from 'xlsx'
// export const handleDownloadExcel =(records) =>{
//   const ws = utils.json_to_sheet(records);
//   const wb = utils.book_new();
//   // utils.book_append_sheet(wb, ws, sheetName);
//   // writeFileXLSX(wb, `${fileName}.xlsx`);
// };

// const ExportButton = ({records}) => {
//   handleDownloadExcel(records,'SheetName','MyFileName')
//   return(
// <>
// <button id='exportbtn' onClick={handleDownloadExcel}>Export</button></>
//   )
// }

// export default ExportButton

import React from 'react';
import { utils, writeFileXLSX } from 'xlsx';

// Function to handle downloading the Excel file
export const handleDownloadExcel = (records, sheetName, fileName) => {
  // Convert records (JSON) to a worksheet
  const ws = utils.json_to_sheet(records);
  
  // Create a new workbook and append the worksheet
  const wb = utils.book_new();
  utils.book_append_sheet(wb, ws, sheetName);
  
  // Trigger download of the Excel file with the given file name
  writeFileXLSX(wb, `${fileName}.xlsx`);
};

const ExportButton = ({ records }) => {
  // Handle the click event to export the records
  const handleClick = () => {
    // You can set the sheet name and file name here
    handleDownloadExcel(records, 'Sheet1', 'MyFileName');
  };

  return (
    <>
      <button id="exportbtn" onClick={handleClick}>
        Export
      </button>
    </>
  );
};

export default ExportButton;
