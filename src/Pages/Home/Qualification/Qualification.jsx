/* eslint-disable react/no-unescaped-entities */
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";

const Qualification = () => {
    return (
        <div id="qualification" className="mb-28">
            <SectionTitle title={'Qualifications'}></SectionTitle>

            <ul className="items-center timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-2 md:text-end hover:shadow-lg transition ease-linear p-2 bg-[#f1f1f1] min-w-64">
                        <time className="font-mono italic">2020 - running</time>
                        <div className="text-lg font-black">B.S.C (CSE)</div>
                        <h2 className="font-semibold font-open-sans text-sm">National University Bangladesh</h2>
                        <h4 className="font-semibold font-open-sans text-sm">CGPA: --</h4>
                    </div>
                    <hr />
                </li>

                <li>
                    <hr className="bg-success" />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-success h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end mb-2 hover:shadow-lg transition ease-linear p-2 bg-[#f1f1f1] min-w-64">
                        <time className="font-mono italic">2020</time>
                        <div className="text-lg font-black">H.S.C (Science)</div>
                        <h2 className="font-semibold font-open-sans text-sm">St. Gregory's Hign School & College</h2>
                        <h4 className="font-semibold font-open-sans text-sm">GPA: 5.00</h4>
                    </div>
                    <hr className="bg-success" />
                </li>

                <li>
                    <hr className="bg-success" />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-success h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-2 md:text-end hover:shadow-lg transition ease-linear p-2 bg-[#f1f1f1] min-w-64">
                        <time className="font-mono italic">2018</time>
                        <div className="text-lg font-black">S.S.C (Science)</div>
                        <h2 className="font-semibold font-open-sans text-sm">Dhaka Collegiate School</h2>
                        <h4 className="font-semibold font-open-sans text-sm">GPA: 5.00</h4>
                    </div>
                    <hr className="bg-success" />
                </li>
            </ul>
        </div>
    );
};

export default Qualification;