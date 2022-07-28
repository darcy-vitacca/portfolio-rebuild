

export interface IProjectProps {
    img: any;
    text: string;
    tech: string;
    header: string;
    href?: string;
    repo?: string;
}

export const projectData: [IProjectProps, IProjectProps?][] = [
    [{

        img: "https://ik.imagekit.io/ticnymjalpq/tweetweaver1?ik-sdk-version=javascript-1.4.3&updatedAt=1658998878990",
        text: "Tweetweaver interacts with Twitter's API to leverage the features of it. Authorize via Twitter using Auth0 with tiered paid subrscription levels and a free trial period via Stripe. Schedule tweets and let an Azure logic app tweet them on your behalf. Publish tweets directly from the beautiful editor and construct long threads with ease.  ",
        tech: "Next.js, Tailwind CSS, Prisma Auth0, Vercel, Stripe, Tiptap, Google Analytics, Azure, Twitter API.",
        header: "tweetweaver",
        href: "https://tweetweaver.com/",
        // repo: "https://github.com/darcy-vitacca/buildinpublic"
    },
    {
        img: "https://ik.imagekit.io/ticnymjalpq/urboard?ik-sdk-version=javascript-1.4.3&updatedAt=1658997084250",
        text: "Urboard allows you to navigate, share, save your links and ideas across all your devices. It's your bookmarks bar on steroids.",
        tech: "React , Typescript, NodeJs, AWS, Digital Ocean, Styled-components, react-hook-form, Typeorm.",
        header: "urboard",
        href: "https://urboard.co/",
        // repo: "https://github.com/darcy-vitacca/yourboard"
    }],
    [{

        img: "https://ik.imagekit.io/ticnymjalpq/recipelab?ik-sdk-version=javascript-1.4.3&updatedAt=1658997038424",
        text: "RecipeLab is a recipe sharing platform that allows anyone to share and store their/others recipes online. Recipes are posted daily and can be upvoted and commented and saved to your recipe book, so you never lose a recipe again. You can also search through all recipes posted and show/update your own profile.",
        tech: "NodeJs, GraphQL, Javascript (ES6), Apollo, Sequelize, MySQL, React, CSS, React context, React Hooks, AWS, EC2, Cloudfront, Route53, Google Analytics, NGINX, RDS.",
        header: "RecipeLab",
        repo: "https://github.com/darcy-vitacca/recipelistio"
    },
    {
        img: "https://ik.imagekit.io/ticnymjalpq/gdrop?ik-sdk-version=javascript-1.4.3&updatedAt=1658997114917",
        text: "G’Drop is a way to revolutionize marketplace buying and selling across all platforms. It allows user to easily communicate and book times to pickup, see or have delivered goods. It will help gain a lot of time wasted from buying and reselling things, and cut out the standard questions you receive like Is this available? and Where and when can I pick it up?",
        tech: "NodeJs, GraphQL, Javascript (ES6), Apollo, Sequelize, MySQL, React, CSS, React context, React Hooks, AWS, EC2, NGINX, RDS.",
        header: "G'Drop",
        repo: "https://github.com/darcy-vitacca/aws-gdrop"
    }],
    [{
        img: "https://ik.imagekit.io/ticnymjalpq/search4me?ik-sdk-version=javascript-1.4.3&updatedAt=1658997049630",
        text: "search4me is a service that locates the cheapest price for an online item! We save you time by searching the internet for you, if you already have the cheapest price there will be no service fee. Users fill out a form, submit it and we try and beat it then charge a fee.",
        tech: "HTML, CSS, VanillaJs, MySQL, AWS, EC2, RDS, NodeJs.",
        header: "search4me",
        repo: "https://github.com/darcy-vitacca/search4me"
    },
    {
        img: "https://ik.imagekit.io/ticnymjalpq/tradeconnect?ik-sdk-version=javascript-1.4.3&updatedAt=1658997072572",
        text: "TradeConnect is a full stack job site that’s a mix of Linkedin/Seek for the Trade Industry. You can create an account, create a profile for employers to view, post job ads for people to apply to, search for either jobs or employees, send messages/ resumes/ other documents to prospects through an inbox system and manage your current job ads on the job dashboard.",
        tech: "REST API Node.js, Express, Firebase (Authentication, NoSQL DB, Cloud functions, Hosting, Image/Document uploading) Frontend : Javascript (ES6), React, Redux, Express HTML, CSS.",
        header: "TradeConnect",
        repo: "https://github.com/darcy-vitacca/tradeconnectfull"
    }],
    [{
        img: "https://ik.imagekit.io/ticnymjalpq/chatapp?ik-sdk-version=javascript-1.4.3&updatedAt=1658997060445",
        text: "This Chat app allows users to see other users and chat to them in real time. As a user you can send messages, react to all messages with emojis, login and signup. The login and sign up routes have validation as well as password encryption and access token generation",
        tech: "NodeJS, GraphQL, Apollo, MySQL, Sequelize, NGINX, AWS (EC2 RDS), React, React-BootStrap, Sass.",
        header: "Chat App",
        repo: "https://github.com/darcy-vitacca/chatapp"
    },
    {
        img: "https://ik.imagekit.io/ticnymjalpq/ergoactive?ik-sdk-version=javascript-1.4.3&updatedAt=1658997124701",
        text: "A chrome extension that gives you intervals to help you move at your desk to prevent health issues. The timer allows users to fully customize their intervals they want to spend between sitting, standing, being active and drinking water while at a desk. When the user sets preferences in the frontend modal they are stored in the browser so their preferences are always remembered on opening of the browser.",
        tech: "Javascript, HTML, CSS.",
        header: "ErgoActive",
        href: "https://chrome.google.com/webstore/detail/ergoactive-desk-health-as/hojblecddbmjknoadlpiimahhnfmlmkh?hl=en",
        repo: "https://github.com/darcy-vitacca/ergoActive"
    }],
    [{
        img: "https://ik.imagekit.io/ticnymjalpq/twitview?ik-sdk-version=javascript-1.4.3&updatedAt=1658997105007",
        text: "Twitview is a Chrome Extension that makes calls on behalf of the user to the Twitter API and sorts through relevant data related to a twitter thread. It compiles long twitter threads in a clear and concise manner and displays the authors tweet thread in a popup modal instantly.The call is made to the server for access tokens for the API and then it displays the information the user is after in a modal once received from twitter. It has 350 users at the time of writing this",
        tech: "Javascript, HTML, CSS, Node.js.",
        header: "Twitview",
        href: "https://chrome.google.com/webstore/detail/twitview-thread-unrollrea/ljdegdmkjoondijjmadjgammcbphodjl?hl=en",
        repo: "https://github.com/darcy-vitacca/TwitviewFinal"
    }
    ]
]

export const workProjectData: [IProjectProps, IProjectProps?][] = [
    [
        {

            img: "https://ik.imagekit.io/ticnymjalpq/espn?ik-sdk-version=javascript-1.4.3&updatedAt=1659005142349",
            text: "Led the setup and rebuild of ESPN footytips front end. We are working to the current designs to then upgrade in the offseason. I also made the decision to build a UI library for them for use sitewide eventually using Storybook. ",
            tech: "React, Typescript, Vite, Styled-Components, Redux Toolkit, Jest, React Testing Library, React-Hook-Form, Material UI, React Router, AWS, TeamCity.",
            header: "ESPN - Footy tips {7th Beam}",

        },
        {
            img: "https://ik.imagekit.io/ticnymjalpq/scotpac_vULzJvGG9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659007114550",
            text: "Built the loan application flow complex forms for a finanicial services company in which brokers can make loan applications on behalf of clients. Upgraded the codebase to Typescript and also upgrading current features.",
            tech: "React, Typescript, Styled-Components, Formik, MSAL, Jest, React Testing Library, Azure, Firebase, Redux, React Router.",
            header: "Scotpac {7th Beam}",
        }
    ],
    [
        {

            img: "https://ik.imagekit.io/ticnymjalpq/auspost_ddqVbLrAe.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659008762895",
            text: "Worked in a team creating highly reusable forms for Auspost and their clients. We built a input library to be reused over around 10 forms for varying companies. ",
            tech: "React, Styled-Components, Typescript, React-Hook-Form. ",
            header: "Auspost {7th Beam}",

        },
        {

            img: "https://ik.imagekit.io/ticnymjalpq/vault?ik-sdk-version=javascript-1.4.3&updatedAt=1659010981789",
            text: "Vault is a digital card provider who offer multiple services to clients. I built a reusable activation page in which they can activate a card depeneding on which clients can customize the page with their own requirements. Also did some work on the backend system which handles the card transactions.",
            tech: "React, Styled-Components, Typescript, NodeJs, Material UI, React-Hook-Form, React Router, Firebase.",
            header: "Vault {7th Beam}",

        },
    ],
    [
        {
            img: "https://ik.imagekit.io/ticnymjalpq/group1_xuka6KF3d.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659010219856",
            text: "Worked in a team creating a flutter application for a fantasy horse betting company. You are able to enter competitions at a fee and win a prize from a pool of competitors by selecting suite of horses you think will win.",
            tech: "Flutter Application",
            header: "Group 1 {7th Beam}",
        },
        {

            img: "https://ik.imagekit.io/ticnymjalpq/CleanShot_2022-07-28_at_13.52.30_uWJZ3kgP5v.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659012788007",
            text: "Built a mock API using Smart Bear products and deployed it so people interested in integrating with Change Financial API to test it out. I also built a documentation of how to intergrate with the API and access data as well as an auth flow using AWS Cognito",
            tech: "React, Styled-Components, ReadyAPI, SmartBear, VirtServer, AWS, Cognito.",
            header: "Change Financial {7th Beam}",

        },
    ]
]