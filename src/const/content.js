

import dccsLogo from '../images/firmenLogos/dccsLogo.jpg';
import dccsImg from '../images/firmenLogos/dccs.png';
import campus02Logo from '../images/firmenLogos/campus02Logo.png';
import campus02Img from '../images/firmenLogos/campus02.png';
import codefactoryLogo from '../images/firmenLogos/codefactoryLogo.jpg';
import codefactoryImg from '../images/firmenLogos/codefactory.png';
import faberLogo from '../images/faberLogo.png'
import denisPortfolio from '../images/denisPortfolio.jpg';
import schueleskocherei from '../images/schuelesKochereiScreenshot.jpg';
import pngs from './pngs';

const filterObject = (title,array = pngs) =>{
    const searchedElement= array.filter((element) => {
        return element.title == title;
    })
    return searchedElement.length > 0 
                ? searchedElement[0]
                : null

}
export const icons ={
    roundPlus: "fas fa-plus-circle",
    roundMinus: "fas fa-minus-circle",
    plain: "far fa-paper-plane",
    linkedIn: "fab fa-linkedin-in",
    github: "fab fa-github",
    upArrow: "fas fa-chevron-up"
}
const txt ={
    navigationSections: ['That\'s me','Project','Career path','Future','Technologies','Contact me'],
    logoTitle: "Faber Design",
    logo: faberLogo,
    headerTitle : "Denis",
    subTitle: "another portfolio",
    imageAlt: "-Image",
    heroBtn:"See more",
    heroBtnLink:"Portfolio",
   
    btnTxt:{
        showMore: "Show more",
        showLess: "Show less"
    },
    icons:{
        roundPlus: icons.roundPlus,
        roundMinus: icons.roundMinus
    },
   thatsMe:{
       vision: "Finding and loving a job, enriches the whole life",
       intro: "Computer science is more than a job for me. Computer science offers the possibility to change the world from an office. Computer science gives us the opportunity to help millions of people",
       main: "With computer science I want to make my contribution to the overall welfare of mankind. To achieve this I will have to overcome many hurdles, but I know that with a solid education and growing professional experience nothing stands in the way of this goal. With every working day, with every experience I get a little bit closer to this goal.",
       poente: "My enthusiasm for new technologies and digital change is exceeded only by my ambition."
   },
   showCase:{
    sectionTitle: 'Project',
    sectionSubTitle: '',
    projectDetailsInfoLabels: [
        'Purpose',
        'Created in',
        'Link',
        'Technologies'
    ],
    projects:[
        {
            details: {
                title: "Schüles Kocherei",

              usedTechnologies: [filterObject('HTML'),filterObject('CSS'), filterObject('JS')],
              purpose: "BSD-2 'Human Interaction' pratical exercise",
              createdIn: "04/2019",
              link: "https://faberds.github.io/schueleskocherei/"
        
            },
            imageUrl: schueleskocherei,
            caption: "Schüles Kocherei"
          },
          {
            details: {
                title: "Denis Portfolio",
              usedTechnologies: [filterObject('HTML'),filterObject('CSS'),filterObject('JS'),filterObject('React')],
              purpose: "BSD-3 'Business English' portfolio",
              createdIn: "12/2019",
              link: "https://faberds.github.io/Portfolio/"
            },
            imageUrl:
              denisPortfolio,
            caption: "Denis Portfolio"
          }
    ]
   },
    history:{
        sectionTitle: "Career path",
        historyDetails:{
            position: "Position",
            title: "Title",
            thematicArea: " Thematic area"   
        },
        it:[
            {logo: dccsLogo,
            Img: dccsImg,
            title: "dccs",
            isWork: true,
            thematicArea: "Micrsoft Online 365",
            position: "Junior Software Developer",
            subtext: "My main area of responsibility is the development / enhancement of SharePoint platforms for customers.",
            fromDate: "15.07.2019",
            toDate: "today",
            linkTo: "https://www.dccs.at"
            },
            {logo: campus02Logo,
            Img: campus02Img,
            title: "FH Campus02",
            isWrk: false,
            thematicArea: "Business and informatic",
            position: "Business Software Development - Bachelor",
            subtext: "For me the optimal connection between work and education.",
            fromDate: "01.09.2018",
            toDate: "today",
            linkTo: "https://www.campus02.at"
            },
            {logo: codefactoryLogo,
            Img: codefactoryImg,
            title: "codefactory",
            isWork: false,
            thematicArea: "Informatic, Developement",
            position: "Fullstack Developer Basics",
            subtext: "Mediation of the most important basics in modern web design. Combined with many group projects.",
            fromDate: "01.04.2018",
            toDate: "30.08.2018",
            linkTo: "https://codefactory.wien/de/home/"
            }
        ],
        gastro:[

        ]
    },
    
    KnowledgeSection:{
        sectionTitle: 'Technologies',
        sectionSubTitle: 'I worked with'
    },
    Contact:{
        sectionTitle: 'Contact me',
        content:[
            {
                title: "LinkedIn",
                icon: icons.linkedIn,
                mailDetails: null,
                link: "https://at.linkedin.com/in/denis-sch%C3%BCle-b54a95164",
            },
            {
                title: "Github",
                icon: icons.github,
                mailDetails: null,
                link: "https://github.com/FaberDS",
            },
            {
                title: "E-Mail",
                icon: icons.plain,
                mailDetails: {
                    subject: "Website contact!",

                },
                link: "mailto:denis.schuele@edu.campus02.at",
            }
           
        ]
    },
    ServiceSectionContent: {
        sectionTitle : "Future",
        sectionSubTitle : "Fields I would like to work in",
        services:[
            {
                serviceTitle: 'Webdevelopment',
                icon: 'fa fa-mobile',
                serviceSubtitle: 'With all comon technologie.'
            },
            {
                serviceTitle: 'Webdesign',
                icon: 'fa fa-paint-brush',
                serviceSubtitle: 'From simple single-pages up to complex web applications'
            },
            {
                serviceTitle: 'Project management',
                icon: 'far fa-comments',
                serviceSubtitle: 'The whole project management process'
            },
            {
                serviceTitle: 'Troubleshooting',
                icon: 'fa fa-question',
                serviceSubtitle: 'Link between project owner and customer'
            }
        ]
    }
}

export default txt;
