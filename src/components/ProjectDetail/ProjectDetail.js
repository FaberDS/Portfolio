import React from 'react';
import './ProjectDetail.scss';
function ProjectDetail(props) {
    const details = props.details
    const labels = props.labels;
    const detailsSubList = details.usedTechnologies.map((tec,i)=><p key={i}>{tec}</p>)
    return (
        <div className="ProjectDetail">

            <p className="label">{labels[0]}</p>
            <p className="detail">{details.purpose}</p>
            <p className="label">{labels[1]}</p>
            <p className="detail">{details.createdIn}</p>
            <p className="label">{labels[2]}</p>
            <p className="detail"><a href={details.link}>{details.title}</a></p>
            <p className="label">{labels[3]}</p>
            <p className="detailsSubList">{detailsSubList}</p>
        </div>
    )
}
export default ProjectDetail;
