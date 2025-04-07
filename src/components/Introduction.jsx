import "../styling/Heading.css"
import myImage from "/new_profile.png"
import { TbArrowNarrowDown } from "react-icons/tb"

const waveText = "Frontend Developer";

export const Introduction = () => {
	return (
		<>
			<section className="introduction">
				<div className="intro-container">
					<div className="intro-heading">
						Hi, I&apos;m Sofie Ferrari Strahl
						<h1 className="wavy-text">
							{waveText.split("").map((char, index) => (
								<span
									key={index}
									style={{ animationDelay: `${index * 0.05}s` }}>
									{char}
								</span>
							))}
						</h1>
					</div>

					<div className="intro-image">
						<img src={myImage} alt="Picture of Sofie"></img>
						<p>
							With a background in speech pathology, I combine my passion for
							learning new skills and technology with great communication,
							problem-solving abilities, and an analytical mind with a keen
							attention to detail.
						</p>
					</div>
					<div className="arrow">
						<TbArrowNarrowDown />
					</div>
				</div>
			</section>
		</>
	);
}
