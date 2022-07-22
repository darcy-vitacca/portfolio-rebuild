import recipelab from "../../public/assets/recipelab.svg";
import ergoactive from "../../public/assets/ergoactive.svg";
import search4me from "../../public/assets/search4me.svg";
import tradeconnect from "../../public/assets/tradeconnect.svg";
import twitview from "../../public/assets/twitview.svg";
import gdrop from "../../public/assets/gdrop.svg";
import chatapp from "../../public/assets/chatapp.svg";

export interface IProjectProps {
    img: any;
    text: string;
    tech: string;
    header: string;
    href?: string;
    repo?: string;
}

export const projectData: [IProjectProps, IProjectProps][] = [
    [{

        img: recipelab,
        text: "RecipeLab is a recipe sharing platform that allows anyone to share and store their/others recipes online. Recipes are posted daily and can be upvoted and commented and saved to your recipe book, so you never lose a recipe again. You can also search through all recipes posted and show/update your own profile.",
        tech: "NodeJs, GraphQL, Javascript (ES6), Apollo, Sequelize, MySQL, React, CSS, React context, React Hooks, AWS, EC2, Cloudfront, Route53, Google Analytics, NGINX, RDS",
        header: "RecipeLab",
        repo: "https://github.com/darcy-vitacca/recipelistio"
    },
    {
        img: gdrop,
        text: "G’Drop is a way to revolutionize marketplace buying and selling across all platforms. It allows user to easily communicate and book times to pickup, see or have delivered goods. It will help gain a lot of time wasted from buying and reselling things, and cut out the standard questions you receive like Is this available? and Where and when can I pick it up?",
        tech: "NodeJs, GraphQL, Javascript (ES6), Apollo, Sequelize, MySQL, React, CSS, React context, React Hooks, AWS, EC2, NGINX, RDS",
        header: "G'Drop",
        repo: "https://github.com/darcy-vitacca/aws-gdrop"
    }],
    [{
        img: search4me,
        text: "search4me is a service that locates the cheapest price for an online item! We save you time by searching the internet for you, if you already have the cheapest price there will be no service fee. Users fill out a form, submit it and we try and beat it then charge a fee.",
        tech: "HTML, CSS, VanillaJs, MySQL, AWS, EC2, RDS, NodeJs",
        header: "search4me",
        repo: "https://github.com/darcy-vitacca/search4me"
    },
    {
        img: tradeconnect,
        text: "TradeConnect is a full stack Job website that’s a mix between Linkedin and Seek for the Trade Industry. You can create an account, create a profile for employers to view, post job ads for people to apply to, search for either jobs or employees, send messages/ resumes/ other documents to prospects through an inbox system and manage your current job ads on the job dashboard. It’s fully responsive and you can edit your profile or jobs as well as many other things.",
        tech: "REST API server using Node.js, Express, Firebase (Authentication, NoSQL DB, Cloud functions, Hosting, Image/Document uploading) Frontend : Javascript (ES6), React, Redux, Express HTML, CSS",
        header: "TradeConnect",
        repo: "https://github.com/darcy-vitacca/tradeconnectfull"
    }],
    [{
        img: chatapp,
        text: "This Chat app allows users to see other users and chat to them in real time. As a user you can send messages, react to all messages with emojis, login and signup. The login and sign up routes have validation as well as password encryption and access token generation",
        tech: "NodeJS, GraphQL, Apollo, MySQL, Sequelize, NGINX, AWS (EC2 RDS), React, React-BootStrap, Sass",
        header: "Chat App",
        repo: "https://github.com/darcy-vitacca/chatapp"
    },
    {
        img: ergoactive,
        text: "A chrome extension that gives you intervals to help you move at your desk to prevent health issues. The timer allows users to fully customize their intervals they want to spend between sitting, standing, being active and drinking water while at a desk. It has a timer running in the background script of the browser which communicates to the front end after it’s started, and persists when closed. When the user sets preferences in the frontend modal they are stored in the browser so their preferences are always remembered on opening of the browser.",
        tech: "Javascript, HTML, CSS",
        header: "ErgoActive",
        href: "https://chrome.google.com/webstore/detail/ergoactive-desk-health-as/hojblecddbmjknoadlpiimahhnfmlmkh?hl=en",
        repo: "https://github.com/darcy-vitacca/ergoActive"
    }],
    [{
        img: twitview,
        text: "Twitview is a Chrome Extension that makes calls on behalf of the user to the Twitter API and sorts through relevant data related to a twitter thread. It compiles long twitter threads in a clear and concise manner and displays the authors tweet thread in a popup modal instantly.The call is made to the server for access tokens for the API and then it displays the information the user is after in a modal once received from twitter. It has 350 users at the time of writing this",
        tech: "Javascript, HTML, CSS, Node.js",
        header: "Twitview",
        href: "https://chrome.google.com/webstore/detail/twitview-thread-unrollrea/ljdegdmkjoondijjmadjgammcbphodjl?hl=en",
        repo: "https://github.com/darcy-vitacca/TwitviewFinal"
    },
    {
        img: twitview,
        text: "Twitview is a Chrome Extension that makes calls on behalf of the user to the Twitter API and sorts through relevant data related to a twitter thread. It compiles long twitter threads in a clear and concise manner and displays the authors tweet thread in a popup modal instantly.The call is made to the server for access tokens for the API and then it displays the information the user is after in a modal once received from twitter. It has 350 users at the time of writing this",
        tech: "Javascript, HTML, CSS, Node.js",
        header: "Twitview",
        href: "https://chrome.google.com/webstore/detail/twitview-thread-unrollrea/ljdegdmkjoondijjmadjgammcbphodjl?hl=en",
        repo: "https://github.com/darcy-vitacca/TwitviewFinal"
    }]
]