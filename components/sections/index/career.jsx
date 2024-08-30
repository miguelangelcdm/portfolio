// Core packages
import Image from 'next/image'

import Badges 		from '../../utils/badge.list.util'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experiencia"
					preTitle="Carrera"
					subTitle="Actualmente me desempeño como desarrollador freelance"
				/>
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Freelance</h3>
								<h4>Permanente Full-time</h4>
								<h4>Abr 2022 - Presente · 2 yrs 4 meses</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Desarrollo de aplicaciones web utilizando tecnologías como Laravel, tailwind, Livewire, Alpine.js, entre otras. Ademas del uso y configuración de CMS como wordpress para gestión de contenido.<br/>
							</p>
							<h4>Clientes:</h4>
							<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Cardiocentro Rebaggliatti</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Arlem Tec</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Rafael Zavala</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>LG</span>
									</li>
							</ul>
						</div>
						<div className={career.companyAlt}></div>
					</article>
					<article className={career.company}>
						<div className={career.companyContent}>
						<span className={career.companyHeader}>
								<h3>Nebulab</h3>
								<h4>Full-time</h4>
								<h4>Feb 2024 - Jul 2024 · 6 mese</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Desarrollo de aplicaciones web utilizando tecnologías como Laravel, tailwind, Livewire, Alpine.js, entre otras. Ademas del uso y configuración de CMS como wordpress para gestión de contenido.<br/>
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Cruz Roja Peruana</h3>
								<h4>Voluntariado Full-time</h4>
								<h4>Nov 2022 - Feb 2024 · 6 meses</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Desarrollo y liderazgo del proyecto: <strong>Sistema Nacional de Gestión de Voluntariado para la Cruz Roja Peruana</strong>
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Monitor de Técnologias de Información</h3>
									<h4>May 2023 - Feb 2024 · 10 meses</h4>
								</span>
								<p>
								Buscamos seguir iterando el Sistema de Gestión de Voluntariado Nacional, desarrollando nuevas características, documentando el proceso y asegurando un plan de calidad para el sostenido uso del software.<br/>
								Adicionalmente busco, promover iniciativas y soporte de TI para el beneficio y alineamiento de objetivos de la CRP dentro del equipo de voluntarios estudiantes de carreras de ingeniería de software y sistemas de la Universidad San Ignacio de Loyola que además ayuden en su formación profesional.
								</p>
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Presentación de la primera version estable del sistema</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Primer despliegue a producción</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Inicio de pruebas de llenado de datos</span>
									</li>
								</ul>
								<Badges list={crpstack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>

						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Desarrollador Full Stack</h3>
									<h4>Nov 2022 - Abr 2023 · 6 meses</h4>
								</span>
								<p>
								Parte del equipo operativo encargado del desarrollo del Sistema Nacional de Gestión de Voluntarios de la Cruz Roja Peruana
								</p>
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Experiencia en desarrollo .NET</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Planificación de actividades, tiempos y levantamiento de información</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Desarrollo de UX y UI.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Redacción de documentación: requerimientos funcionales y no funcionales, historias de usuario, diccionario de datos</span>
									</li>
								</ul>
								<Badges list={crpstack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>
				</section>
			</Container>
		</Section>
	)
}

const fullStack	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]

const stack	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]

const crpstack = [
	{ "key": "javascript", 			"name": "JavaScript", 	"type": "devicon" },
	{ "key": "html5",				"name": "HTML5", 		"type": "devicon" },
	{ "key": "css3",				"name": "CSS3", 		"type": "devicon" },
	{ "key": "git",					"name": "Git(Hub)", 	"type": "devicon" },
	{ "key": "csharp",				"name":	"C#",			"type":	"devicon" },
	{ "key": "dotnetcore",			"name": ".NET 6",		"type": "devicon" },
	{ "key": "bootstrap",			"name": "Bootstrap",	"type": "devicon" },
	{ "key": "jquery",				"name": "jQuery",		"type": "devicon" },
	{ "key": "mysql",				"name": "MySQL",		"type": "devicon" },
	{ "key": "microsoftsqlserver", 	"name": "SQL Server",	"type": "devicon" }
]