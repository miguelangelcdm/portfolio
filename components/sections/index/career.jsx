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
					subTitle="Actualmente me desempeño como System Engineer en Paysafe (ITOps)"
				/>
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Paysafe (ITOps)</h3>
								<h4>System Engineer — Permanente Full-time / Híbrido</h4>
								<h4>Jun 2025 - Presente</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Monitoreo y confiabilidad de infraestructura crítica de pagos en producción. Brindo soporte de segundo nivel, gestiono pipelines CI/CD y despliegues seguros, y desarrollo automatizaciones en SQL, Python y Bash para robustecer los procesos de ITOps.
							</p>
							<Badges list={paysafestack} block="stack" fullContainer="fullContainer"/>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Bitel Perú (Fintech)</h3>
								<h4>IT Project Coordinator — Permanente Full-time / Presencial</h4>
								<h4>Dic 2024 - May 2025 · 6 meses</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Coordinación y gestión end-to-end de BiPay, una iniciativa de billetera digital en el sector Fintech. Actué como puente de comunicación funcional y técnica bilingüe entre stakeholders y equipos de desarrollo internacionales.
							</p>
							<Badges list={bitelstack} block="stack" fullContainer="fullContainer"/>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>ELECTROPERÚ (Internal Control Office)</h3>
								<h4>Professional Intern — Prácticas Profesional / Híbrido</h4>
								<h4>Sep 2024 - Dic 2024 · 4 meses</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Exposición a gobernanza, cumplimiento y disciplina de datos mediante análisis estructurado de datos, elaboración de reportes y control interno de infraestructura estatal.
							</p>
							<Badges list={electroperustack} block="stack" fullContainer="fullContainer"/>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>NebuLab</h3>
								<h4>Desarrollador Full-Stack — Full-time / Híbrido</h4>
								<h4>Feb 2024 - Jul 2024 · 7 meses</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Planificación, desarrollo y entrega de aplicaciones web robustas bajo la metodología Scrum utilizando tecnologías modernas y mantenimiento de plataformas legadas en React y Vue.
							</p>
							<Badges list={nebulabstack} block="stack" fullContainer="fullContainer"/>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Computing Synergy Club</h3>
								<h4>Co-Founder — Permanente / Híbrido</h4>
								<h4>Jun 2023 - Jun 2025 · 2 yrs 1 mo</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Dirección, planificación y gestión de actividades de la asociación estudiantil Computing Synergy Club en la Universidad San Ignacio de Loyola, capacitando estudiantes en desarrollo de software.
							</p>
							<Badges list={clubstack} block="stack" fullContainer="fullContainer"/>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Freelance</h3>
								<h4>Desarrollador Full-Stack — Permanente / Remoto</h4>
								<h4>2022 - Presente</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Diseño, desarrollo e implementación de soluciones web a medida utilizando Laravel, Tailwind, Livewire y WordPress para clientes de diversos rubros (salud, tecnología, corporativo).
							</p>
							<Badges list={freelancestack} block="stack" fullContainer="fullContainer"/>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Cruz Roja Peruana</h3>
								<h4>Voluntario de Tecnología — Nov 2022 - Feb 2024</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Desarrollo y liderazgo del Sistema Nacional de Gestión de Voluntariado para la Cruz Roja Peruana, permitiendo la transformación digital de la organización nacional.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Monitor de Tecnologías de Información</h3>
									<h4>May 2023 - Feb 2024 · 10 meses</h4>
								</span>
								<p>
								Iteración del Sistema de Gestión de Voluntariado Nacional, desarrollando nuevas características, plan de calidad y guiando a voluntarios estudiantes de la USIL en el desarrollo del software.
								</p>
								<Badges list={crpstack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>

						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Desarrollador Full Stack</h3>
									<h4>Nov 2022 - Abr 2023 · 6 meses</h4>
								</span>
								<p>
								Participación en el diseño de arquitectura, requerimientos funcionales, modelado de base de datos y diseño UX/UI del sistema de voluntariado de la Cruz Roja Peruana.
								</p>
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

const paysafestack = [
	{ "key": "python", 				"name": "Python", 		"type": "devicon" },
	{ "key": "microsoftsqlserver", 	"name": "SQL Server", 	"type": "devicon" },
	{ "key": "bash", 				"name": "Bash", 		"type": "devicon" },
	{ "key": "git", 				"name": "Git(Hub)", 	"type": "devicon" },
	{ "key": "grafana", 			"name": "Grafana", 		"type": "devicon" }
]

const bitelstack = [
	{ "key": "jira", 		"name": "Jira", 		"type": "devicon" },
	{ "key": "confluence", 	"name": "Confluence", 	"type": "devicon" },
	{ "key": "microsoft", 	"name": "Power BI", 	"type": "devicon" },
	{ "key": "git", 		"name": "Git(Hub)", 	"type": "devicon" }
]

const electroperustack = [
	{ "key": "microsoft", 			"name": "Power BI", 	"type": "devicon" },
	{ "key": "microsoftsqlserver", 	"name": "SQL Server", 	"type": "devicon" }
]

const nebulabstack = [
	{ "key": "laravel", 	"name": "Laravel", 		"type": "devicon" },
	{ "key": "tailwindcss", "name": "Tailwind", 	"type": "devicon" },
	{ "key": "alpinejs", 	"name": "Alpine.js", 	"type": "devicon" },
	{ "key": "git", 		"name": "Git(Hub)", 	"type": "devicon" }
]

const clubstack = [
	{ "key": "solar-system", 	"name": "Liderazgo", 	"type": "fad" },
	{ "key": "qrcode", 			"name": "Co-creación", 	"type": "fad" },
	{ "key": "solar-system", 	"name": "USIL", 		"type": "fad" }
]

const freelancestack = [
	{ "key": "laravel", 	"name": "Laravel", 		"type": "devicon" },
	{ "key": "tailwindcss", "name": "Tailwind", 	"type": "devicon" },
	{ "key": "alpinejs", 	"name": "Alpine.js", 	"type": "devicon" },
	{ "key": "wordpress", 	"name": "WordPress", 	"type": "devicon" },
	{ "key": "mysql", 		"name": "MySQL", 		"type": "devicon" }
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