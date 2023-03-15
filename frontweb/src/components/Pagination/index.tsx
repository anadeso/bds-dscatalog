import { ReactComponent as ArroyIcon } from 'assets/images/seta.svg';

const Pagination = () => {

    return (
        <div className="pagination-container"> 
            <ArroyIcon />
            <div className="pagination-item" >1</div>
            <div className="pagination-item" >2</div>
            <div className="pagination-item" >3</div>
            <div className="pagination-item" >...</div>
            <div className="pagination-item" >10</div>
            <ArroyIcon />
        </div>
    );
}

export default Pagination;