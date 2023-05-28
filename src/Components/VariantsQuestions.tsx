type VariantQuestion = {
    name: string,
    isActive: boolean,
    onClick: () => void
}

const VariantQuestion = ({name, isActive, onClick, ...rest}: VariantQuestion) => {
    return(
        <div className="h-[130px] w-full bg-black flex items-center justify-center cursor-pointer"
             style={{background: `${isActive ? 'linear-gradient(90deg, rgba(215, 11, 218, 0.5) -0.01%, #FFC240 16.42%, #649BFF 34.14%, #FFC240 48.72%, #ABDD42 62.79%, #07FFFF 77.37%, #0F50C7 91.44%, rgba(215, 11, 218, 0.5) 100.01%)' : 'black'}`}} {...rest} onClick={onClick}>
            <div className="bg-black flex justify-center items-center"
                 style={{width: '99%', height: '98%'}}>
                <p className='2xl:text-[20px] lg:text-[16px]'>{name}</p>
            </div>
        </div>
    )
}

export default VariantQuestion
