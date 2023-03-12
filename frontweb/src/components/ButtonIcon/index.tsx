import './styles.css';

import { ReactComponent as Icon } from 'assets/images/seta.svg';

const ButtonIcon = () => {
  return (
    <div className="btn-container">
      <button className="btn btn-primary">
        <h6>INICIE AGORA A SUA BUSCA</h6>
      </button>
      <div className="btn-icon-container">
        <Icon />
      </div>
    </div>
  );
};

export default ButtonIcon;
