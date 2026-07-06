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
					
					{/* PAYSAFE */}
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Paysafe</h3>
								<h4>IT Operations — Permanente Full-time / Híbrido</h4>
								<h4>Jun 2025 - Presente</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Monitoreo y confiabilidad de infraestructura crítica de pagos en producción para la región de Latinoamérica.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>System Engineer (ITOps)</h3>
									<h4>Jun 2025 - Presente</h4>
								</span>
								<p>
								Soporte de segundo nivel, automatización de tareas y monitoreo para asegurar la alta disponibilidad de servicios financieros y de pagos de Paysafe.
								</p>
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Soporte de segundo nivel y monitoreo de plataformas críticas de pagos y payouts, garantizando alta disponibilidad en integraciones bancarias de LATAM.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Diseño e implemento scripts de automatización operativa (SQL, Python, Bash/PowerShell) para reducir intervención manual en la gestión de incidentes, validaciones y flujos de reporte.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Gestiono activamente validaciones en pipelines CI/CD y despliegues controlados, coordinando con equipos de DevOps, DBAs y desarrollo para asegurar liberaciones seguras en producción.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Realizo análisis profundo de incidentes utilizando SQL Server, Grafana, Splunk y OpsGenie para identificar causas raíz y prevenir recurrencias.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Desarrollo y mantengo plantillas operativas y runbooks estandarizados (scripts SQL, flujos de incidentes, checklists de validación), mejorando consistencia, velocidad y reducción de errores en el equipo de ITOps.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Actúo como puente transversal entre Ingeniería, Infraestructura, equipos de Banking y proveedores externos, traduciendo hallazgos técnicos en contexto accionable para el negocio.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Identifico de forma proactiva brechas de proceso y oportunidades de optimización, impulsando iniciativas de mejora continua más allá de un enfoque reactivo de soporte.</span>
									</li>
								</ul>
								<Badges list={paysafestack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					{/* BITEL PERU */}
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Bitel Perú (Fintech)</h3>
								<h4>Proyecto BiPay — Permanente Full-time / Presencial</h4>
								<h4>Dic 2024 - May 2025 · 6 meses</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Desarrollo e implementación del ecosistema de la billetera digital BiPay en el sector de tecnología financiera.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>IT Project Coordinator</h3>
									<h4>Dic 2024 - May 2025 · 6 meses</h4>
								</span>
								<p>
								Coordinación técnica y gestión end-to-end de entregas del proyecto BiPay, liderando la alineación técnica entre stakeholders y equipos de ingeniería.
								</p>
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Coordiné el desarrollo end-to-end de BiPay, una iniciativa de billetera digital, alineando requerimientos de negocio, diseño técnico y hitos de entrega.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Actué como puente funcional y técnico entre stakeholders locales y equipos de desarrollo internacionales, en entornos bilingües (español / inglés).</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Lideré la definición de requerimientos, priorización del backlog y análisis de riesgos, asegurando entregas alineadas a restricciones regulatorias y operativas.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Elaboré documentación funcional, diagramas de flujo y criterios de aceptación, acelerando los ciclos de desarrollo y reduciendo retrabajo.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Construí dashboards en Power BI para el seguimiento de avance, riesgos y KPIs, habilitando la toma de decisiones basada en datos por parte del liderazgo.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Apoyé la preparación para salida a producción (go-to-market) mediante validación de flujos, casos borde y dependencias operativas antes de cada release.</span>
									</li>
								</ul>
								<Badges list={bitelstack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					{/* ELECTROPERU */}
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>ELECTROPERÚ</h3>
								<h4>Oficina de Control Interno — Prácticas Profesional / Híbrido</h4>
								<h4>Sep 2024 - Dic 2024 · 4 meses</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Gobernanza y auditoría de datos en control interno y sistemas de infraestructura del sector energético.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Professional Intern</h3>
									<h4>Sep 2024 - Dic 2024 · 4 meses</h4>
								</span>
								<p>
								Apoyo en control interno, auditoría de datos y gobernanza para asegurar la conformidad y trazabilidad de los flujos de información.
								</p>
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Apoyé iniciativas de auditoría interna y control mediante análisis estructurado de datos y elaboración de reportes.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Diseñé dashboards en Power BI para la visualización de indicadores operativos y de cumplimiento utilizados en revisiones de control interno.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Colaboré en la evaluación de términos de referencia (TDR) y documentación de proveedores, fortaleciendo procesos de contratación y gobernanza.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Adquirí experiencia práctica en conceptos de administración de infraestructura on-premise dentro de una organización estatal altamente regulada.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Contribuí a mejorar la trazabilidad y transparencia de los flujos de control interno y seguimiento.</span>
									</li>
								</ul>
								<Badges list={electroperustack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					{/* NEBULAB */}
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>NebuLab</h3>
								<h4>Desarrollo de Software — Full-time / Híbrido</h4>
								<h4>Feb 2024 - Jul 2024 · 7 meses</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Desarrollo ágil de aplicaciones web y plataformas autoadministrables utilizando metodologías ágiles.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Desarrollador Full-Stack</h3>
									<h4>Feb 2024 - Jul 2024 · 7 meses</h4>
								</span>
								<p>
								Responsable del desarrollo de aplicaciones web complejas utilizando el stack TALL y mantenimiento de sistemas legados.
								</p>
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Planifiqué y entregué aplicaciones web full-stack utilizando el stack TALL (Tailwind, Alpine, Laravel, Livewire) bajo metodología SCRUM.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Colaboré directamente con stakeholders para traducir necesidades de negocio en soluciones técnicas, equilibrando alcance, tiempos y calidad.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Asumí responsabilidad sobre la planificación, estimación y ejecución de funcionalidades, asegurando entregas predecibles y alineadas al roadmap.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Supervisé y brindé mentoría a desarrolladores junior e internos, promoviendo estándares de código y buenas prácticas de desarrollo.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Contribuí a decisiones de arquitectura orientadas a mejorar la mantenibilidad, escalabilidad y performance de los sistemas entregados.</span>
									</li>
								</ul>
								<Badges list={nebulabstack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					{/* COMPUTING SYNERGY CLUB */}
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Computing Synergy Club</h3>
								<h4>Asociación Estudiantil — Permanente / Híbrido</h4>
								<h4>Jun 2023 - Jun 2025 · 2 yrs 1 mo</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Asociación tecnológica orientada al desarrollo técnico y la co-creación de soluciones de software en la Universidad San Ignacio de Loyola.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Co-Founder</h3>
									<h4>Jun 2023 - Jun 2025 · 2 yrs 1 mo</h4>
								</span>
								<p>
								Liderazgo, dirección y co-creación del club, diseñando planes de capacitación y coordinando proyectos estudiantiles.
								</p>
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Dirección, planeación y gestión de actividades de la asociación estudiantil Computing Synergy Club.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Organización de talleres, capacitaciones y proyectos de software colaborativos.</span>
									</li>
								</ul>
								<Badges list={clubstack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					{/* FREELANCE */}
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Freelance</h3>
								<h4>Desarrollo Independiente — Permanente / Remoto</h4>
								<h4>2022 - Presente</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Diseño y desarrollo end-to-end de portales CMS y aplicaciones web personalizadas para diversos clientes.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Desarrollador Full-Stack</h3>
									<h4>2022 - Presente</h4>
								</span>
								<p>
								Ingeniería y diseño a medida para sectores de salud, tecnología y corporativo.
								</p>
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Diseñé e implementé soluciones web a medida utilizando Laravel, Tailwind, Livewire y WordPress para clientes de distintos rubros.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Ejecuté proyectos end-to-end, desde el levantamiento de requerimientos y diseño UX/UI hasta el despliegue y soporte post-producción.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Desarrollé plataformas CMS y soluciones personalizadas que permitieron a los clientes modernizar su presencia digital y procesos operativos.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Gestioné múltiples proyectos en paralelo, asegurando cumplimiento de plazos, calidad de entrega y satisfacción del cliente.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Trabajé con clientes de los sectores salud, tecnología y corporativo, adaptando las soluciones a necesidades de negocio diversas.</span>
									</li>
								</ul>
								<Badges list={freelancestack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					{/* CRUZ ROJA PERUANA */}
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Cruz Roja Peruana</h3>
								<h4>Voluntariado de Tecnología — Nov 2022 - Feb 2024</h4>
								<h5>Lima, Perú</h5>
							</span>
							<p>
							Liderazgo y desarrollo del Sistema Nacional de Gestión de Voluntariado para la transformación digital de la Cruz Roja Peruana.
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
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Presentación de la primera versión estable del sistema.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Primer despliegue a producción y pruebas de carga.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Inicio de pruebas de llenado de datos y capacitación.</span>
									</li>
								</ul>
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
								<ul className={career.list}>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Experiencia en desarrollo .NET y C#.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Planificación de actividades, tiempos y levantamiento de requerimientos.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Desarrollo de interfaces de usuario UX/UI.</span>
									</li>
									<li>
										<span className={career.subList}><span className={career.bullet}></span>Redacción de documentación técnica (casos de uso, diccionario de datos).</span>
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