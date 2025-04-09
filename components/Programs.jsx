import { ProgramsCard } from './ProgramsCard';
import cross from '../public/assets/prayer.png';
import prayer from '../public/assets/pray1.png';
import dove from '../public/assets/pray.png';
import church from '../public/assets/church1.png';

export const Programs = () => {
	return (
		<div className="min-h-[59vh] flex flex-col items-center justify-center  bg-stone-100 space-y-8 p-5">
			<h1 className="text-xl text-gray-600 text-center font-bold tracking-wide sm:tracking-widest uppercase">
				Our Weekly Programs
			</h1>

			<div className="flex space-x-5 md:space-x-8 pb-3 overflow-auto max-w-full">

			<ProgramsCard
    serviceName={'Sunday Worship Service'}
    day="Sunday"
    time={'10am - 1pm'}
    icon={church}
    style={'bg-my-olive'}
/>
				<ProgramsCard
					serviceName={'Women`s Fellowship'}
					day="Wednesday"
					time={'11am - 1pm'}
					icon={dove}
					style={'bg-m-olive'}
				/>

				<ProgramsCard
					serviceName={'Bible Study'}
					day="Friday"
					time={'7pm - 9pm'}
					icon={cross}
					style={'bg-my-olive'}
				/>

				{/* <ProgramsCard
					serviceName={'Service'}
					day="Sundays"
					time={'10am - 12pm'}
					icon={prayer}
					style={'bg-stone-300'}
				/> */}

				
			</div>
		</div>
	);
};
