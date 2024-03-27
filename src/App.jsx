//import { useState } from 'react'
import { Card } from './components/Card'
import './App.css'
import { projects } from "../projects.json"
import { Introduction } from './components/Introduction'
import { TechSection } from './components/Tech'

//import H from '@nicodes/react-heading'

export const App = () => {
	console.log(projects)
	

	return (
		<>
			<section>
				<Introduction />
			</section>
			<section>
				<TechSection />
			</section>
			<section>
				{projects.map((project, index) => (
					<Card key={index} project={project} />
				))}
			</section>
		</>
	)
}
