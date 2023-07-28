const HTMLWidget = ({ data, size }) => {
    return <div style={{ flex: 1, border: '2px solid black', margin: '10px', ...size }}>
        <div style={{ paddingLeft: '10px' }} dangerouslySetInnerHTML={{ __html: data }} />
    </div>

};

export default HTMLWidget;