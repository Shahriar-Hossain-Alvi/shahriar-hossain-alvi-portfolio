import axios from "axios";
import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import PortfolioCard from "../../components/Shared/PortfolioCard/PortfolioCard";


const AllProjects = () => {

    const [allProjects, setAllProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://md-shahriar-hossain-alvi-server.vercel.app/allProjects')
            .then(res => {
                setAllProjects(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    if (loading) {
        return <div className="text-center mb-10">
            <span className="loading loading-spinner text-primary"></span>
        </div>
    }

    return (
        <div className="pt-20 mx-2 pb-20">
            <h2 className="text-center my-10 font-bold text-2xl underline">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Zoom triggerOnce={true}>
                    {
                        allProjects.map(singleProject => <PortfolioCard key={singleProject._id} singleProject={singleProject}></PortfolioCard>)
                    }
                </Zoom>
            </div>
        </div>
    );
};

export default AllProjects;