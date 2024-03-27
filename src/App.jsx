//import { useState } from 'react'
import { Card } from './components/Card'
import './App.css'
import { projects } from "../projects.json"

//import H from '@nicodes/react-heading'

export const App = () => {
	console.log(projects)
	

	return (
    <div>
			{projects.map((project, index) => (
				<Card key={index} project={project} />
			))}
			{/* <Card projects={projects}/> */}
		</div>
	)
}