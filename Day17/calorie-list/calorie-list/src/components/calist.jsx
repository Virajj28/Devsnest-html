
const calist = ({props}) => {
    const {name, calories} = props;
    return (
        <>
            <div className="calist">
                <div className="items">{name}</div>
                <div className="calcount"><p>You consumed <b>{calories}</b> cals.</p></div>
            </div>
        </>
    )
}

export default calist;