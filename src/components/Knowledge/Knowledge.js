import React,{Component} from 'react';
import './Knowledge.scss';
import pngs from '../../const/pngs.js';


// const images =[bootstrap,css];
const background ="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
// const background="../../../images/heroImage.jpg";
const heroStyle ={
    "backgroundImage": `url( ${background})`,
    "backgroundSize": "cover"
}
class Knowledge extends Component {
    
    render(){
        const {titles} = pngs;
        const {ID,KnowledgeSection}= this.props;
        return(
            <div className="knowledge" id={ID}  style={heroStyle}>
                <div className="sectionSubTitle">{KnowledgeSection.sectionSubTitle}</div>
                <div className="sectionTitle">{KnowledgeSection.sectionTitle}</div>
                <div className="raw">
                    {pngs.map((png,i) =>{
                        return(
                            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                                <div className="flipper">
                                <div className="front">
                                    <img src={png.src}/>
                                </div>
                                <div className="back">
                                    <p className="flipCardTitle">{png.title}</p>
                                    <p>{png.details}</p>
                                </div>
                                </div>
                            </div>
                        )
                    })}
                
             </div>
            </div>
        )
    }
}
export default Knowledge;