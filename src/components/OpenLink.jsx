const OpenLink = ({title, url}) => {
    return (
        <div className="open-link">
            <a
                  className="App-link"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {title}
                </a>
        </div>
    );
};

export default OpenLink;