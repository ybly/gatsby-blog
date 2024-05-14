import React from 'react';
import PageLayout from '../../components/PageLayout';

// import * as styles from '../../styles/project.module.css';
import { graphql } from 'gatsby';

export default function Projects({ data }) {
	console.log(data);

	const projects = data.allMarkdownRemark.nodes;

	return (
		<PageLayout>
			<section>
				<h1>Projects</h1>
			</section>
			<div>
				{projects.map((project) => (
					<a
						key={project.id}
						href={project.frontmatter.githubRepo}
						target="_blank"
						rel="noreferrer"
					>
						{project.frontmatter.title}
					</a>
				))}
			</div>
		</PageLayout>
	);
}

export const getProjects = graphql`
	query projectsQuery {
		allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
			nodes {
				frontmatter {
					title
					stack
					path
					githubRepo
					description
					date
				}
				id
			}
		}
	}
`;
