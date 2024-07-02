import { useEffect, useState } from "react";
import PortfolioCard from "../../../components/Shared/PortfolioCard/PortfolioCard";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import axios from "axios";


const Portfolio = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://md-shahriar-hossain-alvi-server.vercel.app/projects')
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
        <div id="portfolio" className="mb-28 mx-2">
            <SectionTitle title={'My Projects'}></SectionTitle>

            <h2 className="text-center text-xl font-semibold mb-8">Here are some of my latest projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    allProjects.map(singleProject => <PortfolioCard key={singleProject._id} singleProject={singleProject}></PortfolioCard>)
                }
            </div>
        </div>
    );
};

export default Portfolio;