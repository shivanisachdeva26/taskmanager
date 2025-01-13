// // import React from 'react'

// // const Actions = ({action}) => {
 
// //   return (
// //     <>
// //     {action.map((currAction) => {
// //      const{id,InputColumn , ActionColumn , EnrichCompany} = currAction;
// //      const{date, year, time} = currAction.InputColumn
// //      return (
// //       <tr key={id}>
// //         <td>{id}</td>
// //         <td>    </td>
// //         <td>{date}{", "}{year}{" at "}{time}</td>
// //         <td>{ActionColumn}</td>
// //         <td>{EnrichCompany}</td>
// //       </tr>
// //      )
// //     })}
// //     </>
// //   )
// // }

// // export default Actions












import React from 'react';
import DataTable from 'react-data-table-component';
import ExportButton from './ExportButton';
import { useState } from 'react';
import { CiSettings,CiViewTable} from "react-icons/ci";
import { PiPuzzlePieceLight } from "react-icons/pi";

const Actions = ({ action}) => {
  
  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Input Column',
      selector: row => `${row.InputColumn.date}, ${row.InputColumn.year} at ${row.InputColumn.time}`,
      sortable: true,
    },
    {
      name: 'ActionColumn',
      selector: row => row.ActionColumn,
      sortable: true,
    },
    {
      name: 'EnrichCompany',
      selector: row => row.EnrichCompany,
      sortable: true,
    },
  ];
  
const[records,setRecords] = useState(action);

function handleFilter(event){
  const newData = action.filter(row => {
    return (
      row.ActionColumn.toLowerCase().includes(event.target.value.toLowerCase()) ||
      row.InputColumn.date.toLowerCase().includes(event.target.value.toLowerCase()) ||
      row.InputColumn.year.toLowerCase().includes(event.target.value.toLowerCase()) ||
      row.InputColumn.time.toLowerCase().includes(event.target.value.toLowerCase()) ||
      row.EnrichCompany.toLowerCase().includes(event.target.value.toLowerCase())
    )

  })
  setRecords(newData)
}



  return (
    <>
    <div id='container'>
    <div id='sidebar'>
    <CiSettings id='icons' size={40}/>
    <CiViewTable  id='icons' size={40}/>
    <PiPuzzlePieceLight  id='icons' size={40}/>
    
    </div>
    <div id='mainbody'>
    <div id='header'>
    <input type="text" id='input-field' placeholder='Search..' onChange={handleFilter}/>
    <ExportButton records={records} />
    </div>
    <DataTable
      columns={columns}
      data={records}
      pagination
      highlightOnHover
      pointerOnHover
      selectableRows
      fixedHeader
      
    />
   </div>
   </div>
    </>
  );
};

export default Actions;














// import React, { useState, useEffect } from 'react';
// import DataTable from 'react-data-table-component';
// import ExportButton from './ExportButton';
// import AddRows from './AddRows';
// import NewRow from './NewRow';
// import axios from 'axios';

// const Actions = ({ action }) => {
//   const [records, setRecords] = useState(action); // For the data in the table
//   const [newRow, setNewRow] = useState(null); // New row data to be added

//   const columns = [
//     {
//       name: 'ID',
//       selector: (row) => row.id,
//       sortable: true,
//     },
//     {
//       name: 'Input Column',
//       selector: (row) =>
//         `${row.InputColumn.date}, ${row.InputColumn.year} at ${row.InputColumn.time}`,
//       sortable: true,
//     },
//     {
//       name: 'ActionColumn',
//       selector: (row) => row.ActionColumn,
//       sortable: true,
//     },
//     {
//       name: 'EnrichCompany',
//       selector: (row) => row.EnrichCompany,
//       sortable: true,
//     },
//   ];

//   // Handle input changes for the new row
//   const handleNewRowChange = (e) => {
//     const { id, value } = e.target;
//     setNewRow({...newRow,
//       [id]: value,
//     });
//   };

//   // Add new empty row to the table
//   const handleClick = () => {
//     setNewRow({
//       ActionColumn: '',
//       EnrichCompany: '',
//       InputColumn: {
//         date: '',
//         year: '',
//         time: '',
//       },
//     });
//   };

//   // Handle adding new row to the backend
//   const handleAddRowToBackend = async (newRow) => {
//     try {
//       // Ensure that the newRow object contains only valid data
//       const sanitizedRow = {
//         ActionColumn: newRow.ActionColumn,
//         EnrichCompany: newRow.EnrichCompany,
//         InputColumn: newRow.InputColumn
//       };
  
//       console.log('Sanitized Row:', sanitizedRow);
  
//       // Now send sanitized data to backend
//       const response = await axios.post('http://localhost:3000/api/actions', sanitizedRow);
//       console.log('Row added:', response.data);
  
//       // Optionally, update the UI after adding the row
//     } catch (error) {
//       console.error('Error adding row:', error);
//       alert('Error adding row: ' + error.message);
//     }
//   };
  
//   return (
//     <>
//       <div>
//         <input type="text" id="input-field" onChange={(e) => console.log(e.target.value)} />
//       </div>
//       <div>
//         <ExportButton records={records} />
//       </div>
//       <DataTable
//         columns={columns}
//         data={records}
//         pagination
//         highlightOnHover
//         pointerOnHover
//         selectableRows
//         fixedHeader
//       />

//       {/* Add a new row button */}
//       <AddRows handleClick={handleClick} />

//       {/* Show the new row fields when "Add Row" is clicked */}
//       {newRow && (
//         <NewRow newRow={newRow} handleNewRowChange={handleNewRowChange} />
//       )}

//       {/* Submit the new row data */}
//       {newRow && (
//         <button onClick={handleAddRowToBackend}>Save New Row</button>
//       )}
//     </>
//   );
// };

// export default Actions;
