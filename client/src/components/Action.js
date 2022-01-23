import { Link } from 'react-router-dom';
import action from '../img/action.svg';

function Action() {
    return (
        <div>
            <div class="action-container">
                <img className="action-img" src={action} alt="Visit the docs page" />
                <div className="action-message">
                    <span className="action-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </span>
                    <Link to="/docs"><button className="view-docs">View Documentation</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Action;
