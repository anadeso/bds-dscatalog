import { ReactComponent as ArroyIcon } from 'assets/images/seta.svg';

import './styles.css';

const Pagination = () => {

    return (
        <div className="pagination-container"> 
            <ArroyIcon className="arrow-previous arrow-inactive"/>
            <div className="pagination-item active" >1</div>
            <div className="pagination-item" >2</div>
            <div className="pagination-item" >3</div>
            <div className="pagination-item" >...</div>
            <div className="pagination-item" >10</div>
            <ArroyIcon className="arrow-next arrow-native" />
        </div>
    );
}

export default Pagination;