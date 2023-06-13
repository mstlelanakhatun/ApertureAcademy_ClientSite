const EnrollCard = ({ data }) => {
    const { className, price, transactionId, email, ClassImage } = data;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={ClassImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{className}</h2>
                <p><span className="font-semibold">Enroll Email:</span> {email}</p>
                <p><span className="font-semibold">TransactionId:</span> {transactionId}</p>
                <p><span className="font-semibold">SuccessFully Pay:</span> ${price}</p>
            </div>
        </div>
    );
};

export default EnrollCard;