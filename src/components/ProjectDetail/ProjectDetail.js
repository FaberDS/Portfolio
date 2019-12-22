import React from 'react';
import './ProjectDetail.scss';
function ProjectDetail(props) {
    const details = props.details
    const labels = props.labels;
const detailsSubList = details.usedTechnologies.map((tec,i)=>{
        return(
            tec !== null
                ?<img key={i} src={tec.src} alt={tec.title + "-Image"}></img>
                :"")});
    return (
        <div className="ProjectDetail">

            <div className="detailLabel">{labels[0]}</div>
            <div className="detail">{details.purpose}</div>
            <div className="detailLabel">{labels[1]}</div>
            <div className="detail">{details.createdIn}</div>
            <div className="detailLabel">{labels[2]}</div>
            <div className="detail"><a href={details.link}>{details.title}</a></div>
            <div className="detailLabel">{labels[3]}</div>
            <div className="detailsSubList">{detailsSubList}</div>
        </div>
    )
}
export default ProjectDetail;
