import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();
    return (
      <div>
        <div className="error-container">
            <h1>Something went wrong.</h1>
            <div>
                <button className="sign-up" onClick={() => navigate(-1)}>Go Back</button>
            </div>
        </div>
      </div>
    );
  };
  
  export default Error;