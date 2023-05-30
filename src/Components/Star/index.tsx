
type StarProps = {
    isStar: boolean
}

const Star = ({isStar}:StarProps) => {
    return(
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0053 0.102295L12.9619 6.07867L19.576 7.03637L14.7906 11.6877L15.9202 18.2553L10.0053 15.1536L4.09039 18.2553L5.21992 11.6877L0.43457 7.03637L7.04862 6.07867L10.0053 0.102295Z" fill={`${isStar ? 'gold' : 'white'} `}/>
        </svg>
    )
}

export default Star
