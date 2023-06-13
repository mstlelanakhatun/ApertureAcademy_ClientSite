const InstructorsCard = ({ data }) => {
    const { name, image, email } = data;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className="font-semibold">Email:</span> {email}</p>
            </div>
        </div>
    );
};

export default InstructorsCard;