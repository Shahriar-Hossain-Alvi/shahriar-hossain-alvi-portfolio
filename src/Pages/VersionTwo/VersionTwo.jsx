import { Link } from "react-router-dom";


const VersionTwo = () => {
    return (
        <div className="min-h-72 flex items-center justify-center flex-col">
            <p>
                ~Under construction~
            </p>

            <Link to="/" className="btn mt-3 bg-success text-white">
                Home
            </Link>
        </div>
    );
};

export default VersionTwo;