import React from 'react'
import './Podcast.css'
import { podcastSection } from '../../portfolio'
import { Fade } from 'react-reveal'

const cantDisplayError = "<div>Can't load Podcast. Check podcast link.</div>"

function timeOut() {
	setTimeout(function () {
		if (!document.getElementById('podcast').innerHTML.includes('iframe')) {
			console.log("Can't load Podcast. Check podcast link.")
			document.getElementById('podcast').innerHTML = cantDisplayError
		}
	}, 10000)
}

export default function Podcast() {
	return (
		<Fade bottom duration={1000} distance='20px'>
			<div className='main'>
				<div className='podcast-header'>
					<h1 className='podcast-header-title'>
						{podcastSection.title}
					</h1>
					<p className='subTitle podcast-header-subtitle'>
						{podcastSection.subtitle}
					</p>
				</div>
				<div className='podcast-main-div' id='podcast'>
					{Array.isArray(podcastSection.podcast)
						? podcastSection.podcast.map((podcastLink, indx) => {
								return (
									<div key={indx}>
										<iframe
											title='podcast'
											className='podcast'
											src={podcastLink}
											frameBorder='0'
											scrolling='no'
											onLoad={timeOut()}
										></iframe>
									</div>
								)
						  })
						: console.log(
								'podcast is not an array in podcastSection inside portfolio'
						  )}
				</div>
			</div>
		</Fade>
	)
}
