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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Acerca de mí"
					preTitle="Synopsis"
					subTitle="Con un conjunto de habilidades que abarca desde UX&UI, desarrollo full stack, arquitecturas, diseño de sistemas, y gestión de proyectos, soy un profesional digital completo."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/IMG_2110.jpeg" alt="myself"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Habilidades blandas que pagan cuentas"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Además de mi experiencia en diseño y desarrollo, también tengo fuertes habilidades de liderazgo, gestión del tiempo y multitarea, perfeccionadas a través de mi experiencia como freelance, fundador de un club estudiantil y voluntario. Fuera del trabajo, disfruto manteniéndome activo ejercitando en el gimnasio y deportes como el futbol. Estoy seguro de mi capacidad para aportar pasión y valor a cualquier proyecto."
						/>
						<BadgesBlock 
							title="Si no sé como hacer algo, no me detengo hasta saberlo" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="Uno de mis aspectos favoritos de la creación es planificar la arquitectura de un proyecto. Desde sistemas de diseño hasta estrategias de marca, disfruto trabajando con los diversos puntos de contacto de la experiencia del usuario."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'Investigación', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Estrategias digitales', 	type: 'fad' },
	{ key: 'window', 			name: 'Diseño de sistemas', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Lenguajes de programación', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Generar oportunidades', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Team player', 		type: 'fad' },
]