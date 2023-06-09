import Pagination from 'react-bootstrap/Pagination';


export default function MyPagination({total, current,onChangePage}) {

    let items = [];

    for(let page = 1 ; page <= total; page ++){
        items.push(
            <Pagination.Item 
               key = {page} 
               active = {page === current} 
               onClick={ ()=> onChangePage(page)}
            >
                {page}
             </Pagination.Item>
        )
    }

    if( current > 1 ) {
        items.push(<Pagination.Prev key="prev" onClick={ ()=> onChangePage(current-1)}  /> )
    }

    if(current < total){
        items.push(<Pagination.Next key="next" onClick={ ()=> onChangePage(current+1)}  /> )
    }

    return (
        <Pagination> {items}</Pagination>
    )
}