import { Pagination } from 'react-bootstrap';
import React from 'react';

const pagination = (props) => {
    let items = [];
    
    for (let number = 1; number <= props.totalPages; number++) {
        items.push(
            <Pagination.Item onClick={()=>props.onPageChange(number)}  key={number} active={number === props.selectedPage}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div>
            <Pagination >{items}</Pagination>
        </div>
    )
}

export default pagination;

