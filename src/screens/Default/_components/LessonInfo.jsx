const LessonInfo = ({unitNumber, title}) => {
    return (
        <div className="lesson-info">
            {unitNumber} : {title}
        </div>
    );
};

export default LessonInfo;