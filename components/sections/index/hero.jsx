import { useState } 		from 'react';
import { TypeAnimation } 	from 'react-type-animation';

import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import space		from '../../utils/spacing.util';

import Icon 		from '../../utils/icon.util'

import HeroBg		from '../../blocks/hero.bg/bg-color-1';

import hero 		from '../../../styles/sections/index/hero.module.scss';
import button 		from '../../../styles/blocks/button.module.scss';

import content		from '../../../content/index/hero.json'


/**
 * TO DO LIST
 *
 * - Create a typog.modules.scss
 *   Load this module onto every component, and use predefined typography classes to keep typography consistent
 *
 * - space.modules.scss
 *   Load this module onto every component, and use predefined spacial classes to keep geometry consistent
 */

export default function Hero() {

	const [typingStatus, setTypingStatus] = useState('Initializing');

	return (
		<Section classProp={`${hero.section}`}>
			<Container spacing={'VerticalXXXL'}>
				<TypeAnimation className={`${hero.preHeader}`}
					sequence={[
						content.intro.startDelay,
						() => { setTypingStatus('typing') },
						content.intro.start,
						() => {	setTypingStatus('typed') },
						content.intro.deleteDelay,
						() => {	setTypingStatus('deleting') },
						content.intro.end,
						() => {	setTypingStatus('deleted') },
						content.intro.restartDelay,
					]}
					speed={content.intro.speed}
					deletionSpeed={content.intro.deletionSpeed}
					wrapper={content.intro.wrapper}
					repeat={Infinity}
				/>
				<section>
					<h1 className={hero.header}>
						{content.header.name}
						</h1>
					<h1 className={`${hero.header} ${hero.primaryDim}`}>
						{content.header.usp}
					</h1>
				</section>
				<section>
					<p className={`${hero.primaryBright} subtitle ${space(["verticalLrg"])}`}>
						{ content.paragraph }
					</p>					
				</section>
				<section>
					<button	className={`button ${button.primary}`}
							onClick={ () => window.location = content.buttons.primary.url } >
						{content.buttons.primary.title}
					</button>
					<button className={`button ${button.secondary} leaveSite`}
							onClick={ ()=> window.open(content.buttons.secondary.url, "_blank") } >
						{content.buttons.secondary.title}
					</button>
					<button className={`button ${button.secondary} leaveSite`}
							onClick={ ()=> window.open(content.buttons.phone.url) } >
						{/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.97825 4C7.60535 4 7.23697 4.08169 6.89899 4.23933C6.57505 4.39043 6.28656 4.60779 6.05203 4.8772C4.23311 6.69909 3.69901 8.75143 4.15304 10.8139C4.5922 12.8088 5.93051 14.7068 7.60946 16.3859C9.28843 18.065 11.1856 19.4036 13.1798 19.845C15.241 20.3013 17.2939 19.7724 19.1194 17.9597C19.3899 17.7249 19.6082 17.4357 19.7599 17.1108C19.918 16.7721 20 16.4028 20 16.0289C20 15.655 19.918 15.2857 19.7599 14.947C19.6083 14.6223 19.3903 14.3334 19.1201 14.0987L17.9103 12.8881C17.406 12.3841 16.7224 12.1009 16.0096 12.1009C15.2968 12.1009 14.6128 12.3844 14.1085 12.8885L13.4907 13.5067C13.3395 13.6579 13.1344 13.7429 12.9206 13.7429C12.7068 13.7429 12.5017 13.6579 12.3505 13.5066L10.4971 11.6521C10.346 11.5008 10.261 11.2956 10.261 11.0817C10.261 10.8677 10.346 10.6625 10.4972 10.5112L11.1153 9.8927C11.619 9.38809 11.902 8.70402 11.902 7.99079C11.902 7.27756 11.6187 6.59312 11.1149 6.08851L9.90499 4.87781C9.67037 4.60812 9.38169 4.39054 9.0575 4.23933C8.71952 4.08169 8.35114 4 7.97825 4Z" fill="#7ee3fd"/>
            </svg> */}
						{content.buttons.phone.title}
					</button>
				</section>
			</Container>
			<HeroBg theme="bg-color-1" />
		</Section>
	)
}