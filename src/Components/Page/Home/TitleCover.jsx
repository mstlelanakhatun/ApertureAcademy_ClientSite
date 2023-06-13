const TitleCover = ({heading}) => {

    return (
        <div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <p className="text-center">------------------------------------</p>
                    <h2 className='md:text-5xl text-xl font-bold my-4'>{heading}</h2>
                    <p className="text-center">------------------------------------</p>
                </div>
            </div>
        </div>
    );
};

export default TitleCover;