import Link from 'next/link';
import Marquee from 'react-fast-marquee';

export const AboutTextScroller = () => {
	return (
		<div className='bg-[#A8FEB6] h-[45px] border'>
			<div className='h-[30px] border-b-2 border-black '>
				<Marquee
					speed={160}
					gradient={false}
					className='italic font-bold uppercase font-xl'
					loop={0}
					delay={0}
					pauseOnHover
				>
					• 16/2/20 - Decided I wanted a career change from being eletrician,
					searched reddit on steps to become and software engineer. • 17/2/20 -
					Joined Free Code Camp and underetook the responsive web design
					certificate with 0 experience coding
					<Link
						href='https://codepen.io/darcy-vitacca/pen/bGdpvBQ'
						passHref={true}
					>
						<a
							target='_blank'
							rel='noopener noreferrer'
							className='px-2 font-bold underline cursor-pointer'
						>
							first website
						</a>
					</Link>
					• 3/3/20 - Completed Responsive web design
					<Link
						href='https://www.linkedin.com/in/darcy-vitacca/'
						passHref={true}
					>
						<a
							target='_blank'
							rel='noopener noreferrer'
							className='px-2 font-bold underline cursor-pointer'
						>
							certificate
						</a>
					</Link>
					• 29/3/20 - Searched more on reddit and found CS50 Intro to Computer
					Science offered by Harvard and started undertaking it. • 3/5/20 -
					Finished CS50 course work and started working on final project •
					4/6/20 - Finished CS50 Intro to Computer Science
					<Link
						href='https://certificates.cs50.io/dd4ebf1b-88f1-4539-addf-e9a3981baea0.pdf?size=letter'
						passHref={true}
					>
						<a
							target='_blank'
							rel='noopener noreferrer'
							className='px-2 font-bold underline cursor-pointer'
						>
							certificate
						</a>
					</Link>
					final project launched it to the chrome store. At this point I had
					some basic html, css, js skills but the course was a revelation and
					lit a fire in me that this is what I wanted to do as a career. •
					25/6/20 - Started working on another chrome extension ergoactive •
					16/7/20 - Finished ergo active and launched it to the chrome store •
					17/7/20 - Started learning React, decided to build a job board for
					tradesmen • 17/7/20 - Started learning React, decided to build a job
					board for tradesmen TradeConnect • 20/9/20 - Built a portfolio page to
					start looking for jobs • 21/9/20 - Finished TradeConnect and had some
					understanding of react class based components • 29/9/20 - Started
					learning React hooks and gaining a fundamental understanding of React
					• 9/10/20 - Built a chat app using aws/graphql/react/apollo • 11/10/20
					- Met someone online who wanted to collaborate on building a business
					online started project GDrop • 5/11/20 - Launched an MVP of GDrop •
					23/11/20 - Started building search4me • 12/12/20 - Finished search4me
					and launched • 10/12/20 - Started building RecipeLab • 5/1/20 -
					Launched an MVP of ReciepLab • 10/2/21 - Started learning typescript
					NextJS • 26/2/21 - Got a job at Seventh Beam Digital Agency 🎉🎉🎉 •
					27/2/21 - Started working on a front for AusPost creating forms using
					typescript/react-hook-form/material-ui • 19/4/21 - Created a reusable
					template for Vault a digital card provider to create when adding a new
					clients to redeem cards • 27/5/21 - Did some work on a nodeJS backend
					for Vault a digital card provider. • 4/6/21 - Started work on a
					project for Scotpac a finanicial services company building a complex
					form to create loan applications for brokers, as well as updating the
					portal. • 5/11/21 - Started doing work for Change a finanicial
					services company and building a mock api to sell their services to
					clients using using ReadyAPI by Smart Bear and building out
					documentation accordingly. • 16/2/22 - Started working on a fantasy
					horse racing app for Group 1 Sports in Flutter • 9/5/22 - Started
					leading a rebuild for the ESPN footytips website frontend • 25/5/22 -
					Started work on an update to the Scotpac Broker Portal
				</Marquee>
			</div>
		</div>
	);
};
