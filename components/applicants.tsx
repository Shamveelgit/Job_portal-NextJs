import CandidatesBanner from "./ui/candidatesBanner"

const Applicants = () => {
    return (
        <>
            <CandidatesBanner>
                <button className=' cursor-pointer flex gap-1.5 group hover:text-green-500 text-green-400  font-medium'>
                    <svg
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.71875 8.5946L10 11.875L13.2812 8.5946"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className=' group-hover:stroke-green-500 stroke-green-400'

                        />
                        <path
                            d="M10 3.125V11.8727"
                            stroke="#26B356"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className=' group-hover:stroke-green-500 stroke-green-400'

                        />
                        <path
                            d="M16.875 11.875V16.25C16.875 16.4158 16.8092 16.5747 16.6919 16.6919C16.5747 16.8092 16.4158 16.875 16.25 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V11.875"
                            stroke="#26B356"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            className=' group-hover:stroke-green-500 stroke-green-400'
                            strokeLinejoin="round"
                        />
                    </svg>
                    Download
                </button>
            </CandidatesBanner>
        </>
    )
}

export default Applicants