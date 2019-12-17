

import dccsLogo from '../images/firmenLogos/dccsLogo.jpg';
import codefactoryLogo from '../images/firmenLogos/codefactoryLogo.jpg';
import campus02Logo from '../images/firmenLogos/campus02Logo.png';
const txt ={
    navigationSections: ['That\'s me','Possibilities','Knowledge','Contact me'],
    logoTitle: "Portfolio",
    headerTitle : "Denis",
    subTitle: "another portfolio",
    heroBtn:"See more",
    heroBtnLink:"Portfolio",
    linkedInLink: "https://at.linkedin.com/in/denis-sch%C3%BCle-b54a95164",
    githubLink: "https://github.com/FaberDS",
    contactMailAddress: "denis.schuele@edu.campus02.at",
    contactMailSubject: "Website contact!",
    history:{
        it:[
            {logo: dccsLogo,
            title: "dccs",
            subtext: "ajkljf alkö löa falöjf a ljglajf a flaöej fa flaöej flöaj g alöj flaöj föl jaöj faef laef",
            fromDate: "15.07.2019",
            toDate: "today",
            linkTo: "https://www.dccs.at"
            },
            {logo: campus02Logo,
            title: "dccs",
            subtext: "ajkljf alkö löa falöjf a ljglajf a flaöej fa flaöej flöaj g alöj flaöj föl jaöj faef laef",
            fromDate: "15.07.2019",
            toDate: "today",
            linkTo: "https://www.campus02.at"
            },
            {logo: codefactoryLogo,
            title: "codefactory",
            subtext: "ajkljf alkö löa falöjf a ljglajf a flaöej fa flaöej flöaj g alöj flaöj föl jaöj faef laef",
            fromDate: "01.04.2017",
            toDate: "30.08.2017",
            linkTo: "https://codefactory.wien/de/home/"
            }
        ],
        gastro:[

        ]
    },
    KnowledgeSection:{
        sectionTitle: 'I worked with',
        sectionSubTitle: 'Technologies'
    },
    ServiceSectionContent: {
        serviceHeader : "Possibilities",
        serviceSubHeader : "Fields I would like to work in",
        services:[
            {
                serviceTitle: 'Webdevelopment',
                icon: 'fa fa-mobile',
                serviceSubtitle: 'With all comon technologies.'
            },
            {
                serviceTitle: 'Webdesign',
                icon: 'fa fa-paint-brush',
                serviceSubtitle: 'From simple single-pages up to complex web applications.'
            },
            {
                serviceTitle: 'Project management',
                icon: 'far fa-comments',
                serviceSubtitle: 'The whole project management process.'
            },
            {
                serviceTitle: 'Troubleshooting',
                icon: 'fa fa-question',
                serviceSubtitle: 'Link between project owner and customer.'
            }
        ]
    }
}

export default txt;