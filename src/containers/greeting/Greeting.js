import React from 'react';
import {Fade} from 'react-reveal';
import emoji from 'react-easy-emoji';
import {greeting} from '../../portfolio';
import Button from '../../components/button/Button';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import './Greeting.css';

const Greeting = () => (
	<Fade bottom duration={1000} distance="40px">
		<div className="greet-main" id="greeting">
			<div className="greeting-main">
				<div className="greeting-text-div">
					<div>
						<span className="wave-emoji">{emoji('👋')}</span>
						<h1 className="greeting-text">{greeting.title}</h1>
						<p className="greeting-text-p subTitle">
							{greeting.subTitle}
						</p>
						<SocialMedia />
						<div className="button-greeting-div">
							<Button text="Contact me" href="#contact" />
							<Button
								text="See my resume"
								newTab={true}
								href={greeting.resumeLink}
							/>
						</div>
					</div>
				</div>
				<div className="greeting-image-div">
					<img
						alt="saad sitting on table"
						src={require('../../assets/images/manOnTable.svg')}
					></img>
				</div>
			</div>
		</div>
	</Fade>
);

export default Greeting;
