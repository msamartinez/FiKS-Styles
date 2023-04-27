import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Products from './Products';

const Main = () => {
   const [currentPage, setCurrentPage] = useState(1);
   
   const handlePageChange = (event, value) => {
      setCurrentPage(value);
   };

 return (
    <div>
       <Products currentPage={currentPage} />
       <Stack spacing ={2}>
         <Pagination
         count={10}
         page={currentPage}
         onChange={handlePageChange}
         variant='outlined'
         shape='rounded'
         />
       </Stack>
    </div>
   );
 };

export default Main;