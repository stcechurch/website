import React from 'react';
import { Tag } from './Tag';
import bible from '../public/assets/bible.png';
import church from '../public/assets/church.png';
import pray from '../public/assets/pray.png';
import question from '../public/assets/question.png';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const About = () => {
  return (
    <div
      id="about" // Ensure the about div has the id
      className="min-h-[30vh] py-10 flex justify-center"
      style={{ paddingTop: '100px' }} // Adjust the paddingTop value
    >
      <div className="lg:max-w-5xl md:max-w-3xl max-w-xl lg:grid grid-cols-4 justify-center items-center mx-auto lg:px-10">
       <div className="flex flex-col items-center lg:items-start lg:col-span-2 text-center lg:text-left md:max-w-xl lg:max-w-none space-y-5 px-8 lg:px-0 text-sm">
					<div>
						{/* <h1 className="font-bold text-gray-700 text-lg uppercase">About</h1> */}
						<h1 className="text-4xl text-amber-400">ABOUT US</h1>
					</div>

					<div>
						<h3 className=" text-gray-500 uppercase text-sm font-bold">
						We are called to be faithful servants of our Lord Jesus Christ to serve Him and to serve one another in alignment with our goal and vision
						</h3>
					</div>

					<div>

						<p className="text-gray-800 text-uppercase sm:text-left">
					
						We are an evangelical church affiliated to the registered society named STCOWS (Sanskruthi Township Christian Owners Welfare Society) and is governed and administered by the executive committee of STCOWS.
						</p>
					</div>


					<div>
						<h3 className=" text-gray-500 uppercase text-sm font-bold">
						The executive committee identifies and forms new offices based on the function & need and appoint local leaders to manage the offices.
						</h3>
						{/* <p className="text-gray-800  text-justify sm:text-left">
						The church building with the name STCEC (Sanskruthi Township Christ Evangelical Church) is the only physical property/entity governed by the executive committee of the STCOWS so far.
						</p> */}
						
					</div>

					<div>

						<p className="text-gray-800 text-uppercase sm:text-left">
					
						The church building with the name STCEC (Sanskruthi Township Christ Evangelical Church) is the only physical property/entity governed by the executive committee of the STCOWS so far.
                      </p>
					</div>

					{/* <div className=" text-gray-800  text-justify sm:text-left">
						<p>
							We invite anyone and everyone to attend our Sunday gathering to
							celebrate God.{' '}
						</p>

						<p>
							<Link
								href={'/gallery'}
								className="btns font-semibold hover:text-amber-800"
							>
								Explore Our Gallery
							</Link>{' '}
							to get familiar with us.
						</p>
					</div> */}
				</div>

				<div className="lg:col-span-2 mt-10 lg:mt-0 space-y-2">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="flex space-x-2 items-end justify-center lg:justify-end"
					>
						<Tag
							icon={pray}
							text={'Daily Prayers'}
							style="w-36 sm:w-44 h-44 bg-my-custom-color" 
						/>
						<Tag
							icon={bible}
							text={'Continuous Learning'}
							style={'w-36 sm:w-44 h-44 bg-my-custom-color1'}
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="flex space-x-2 items-start justify-center lg:justify-end"
					>
						<Tag
							icon={question}
							text={'Fellowship'}
							style={'w-36 sm:w-44 h-44 bg-my-custom-color1'}
						/>
						<Tag
							icon={church}
							text={'Sermons'}
							style={'w-36 sm:w-44 h-44 bg-my-custom-color'}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};
