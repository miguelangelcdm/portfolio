// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Habilidades duras"
					subTitle="Como profesional en tecnología, busco generar experiencias digitales a través de una serie de herramientas y lenguajes."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Una visión más allá de la caja negra"
							icon={[ 'fat', 'chart-network' ]}
							copy="Con una sólida base en diseño y desarrollo, aporto una perspectiva única a cada proyecto y estoy en constante aprendizaje y evolución para mantenerme al día con las últimas tendencias del sector."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Software de mi día a día" 
							copy="Con más de 2 años de experiencia, tengo un conocimiento profundo e intuitivo de como funcionan las cosas en este mundo de desarrollo y gestión de proyectos. Estos son algunos de los programas que he utilizado a lo largo de este tiempo."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="En busca de problemas que el resto prefiere evitar" 
							copy="Me encanta buscar soluciones a través de código. Desde el front end hasta el back end y las API en medio. Estoy en busca de retos."
							list={tech}
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'visualstudio', 	name: 'Visual Studio', 			type: 'devicon' },
	{ key: 'jetbrains', 	name: 'jetbrains', 		type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'postman', 		name: 'Postman', 			type: 'devicon' },
	{ key: 'apple',		name: 'MacOS', 			type: 'devicon' },
	{ key: 'list-music',	name: 'FlStudio', 			type: 'fas' },
	{ key: 'jira',	name: 'Jira', 		type: 'devicon' },
	{ key: 'docker',	name: 'Docker', 		type: 'devicon' },
	{ key: 'wordpress',	name: 'Wordpress', 		type: 'devicon' },
]

const tech	= [
	{ "key": "tailwindcss", "name": "Tailwind CSS", "type": "devicon" },
	{ "key": "javascript",    "name": "Alpine.js",    "type": "devicon" },
	{ "key": "php", 		"name": "PHP", 			"type": "devicon" },
	{ "key": "laravel",     "name": "Laravel",      "type": "devicon" },
	{ "key": "livewire",    "name": "Livewire",     "type": "devicon" },
	{ "key": "mysql",       "name": "MySQL",        "type": "devicon" },
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'jquery', 		name: 'jQuery', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
	{ key: 'microsoftsqlserver',	name: 'SQL Server', 	type: 'devicon'}
]