const NumericWidget = ({ title, data, size }) => {
    return (
        <div style={{ flex: 1, border: '2px solid black', margin: '10px', ...size }}>
            {title ? <h2 style={{ paddingLeft: '10px' }}>{title}</h2> : ''}
            <span style={{ paddingLeft: '10px' }}>
                {data}
            </span>
        </div>
    );
};

export default NumericWidget;