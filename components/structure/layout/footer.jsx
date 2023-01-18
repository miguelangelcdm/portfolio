import { useState, useEffect } from 'react'

import Icon from '../../utils/icon.util'

import css from '../../../styles/structure/footer.module.scss'

import content from '../../../content/footer.json'

export default function Footer() {
	
	const [gitHubInfo, setGitHubInfo] = useState({
		stars: null,
		forks: null,
	});

	useEffect(() => {
		fetch( content.portfolio.repo )
			.then(response => response.json())
			.then(json => {
				const { stargazers_count, forks_count } = json;
				setGitHubInfo({
					stars: stargazers_count,
					forks: forks_count,
				});
			})
		.catch(e => console.error(e));
	}, []);
	
	return (
		<footer className={css.container}>
			<div>
				<section className={css.sections}>
					<ul className={css.thanks}>
						<li><h4>Acknowledgments</h4></li>
						{
						content.acknowledgments.map( ({ person, link, note }) => {
							return (
								<li>
									<a href={link} rel="noreferrer" target="_blank">{person} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
									<p>{note}</p>
								</li>
							)
						})
						}
					</ul>
					<ul className={css.links}>
						<li><h4>Links</h4></li>
						{
						content.links.map( ({ person, link, note }) => {
							return (
								<li>
									<a href={link} rel="noreferrer" target="_blank">{person} <Icon icon={[ 'fad', 'arrow-up-right-from-square' ]} /></a>
									<p>{note}</p>
								</li>
							)
						})
						}
					</ul>
					<ul className={css.social}>
						<li><h4>Social</h4></li>
						<li className={css.socialList}>
							{
							content.social.map( ({ url, icon }) => {
								return (
									<a href={url} rel="noreferrer" target="_blank"><Icon icon={[ 'fab', icon ]} /></a>
								)
							})
							}
						</li>
					</ul>
				</section>
				<section className={css.github}>
					<a href={content.portfolio.repo} rel="noreferrer" target="_blank">
						<h5>{content.portfolio.forkthis}</h5>
						<ul>
							<li>
								<p><Icon icon={[ 'fad', 'code-branch' ]} /> Forks: { gitHubInfo.forks }</p>
							</li>
							<li>
								<p><Icon icon={[ 'fad', 'star' ]} /> Stars: { gitHubInfo.stars }</p>
							</li>
						</ul>
					</a>
				</section>
			</div>
		</footer>
	)
}
