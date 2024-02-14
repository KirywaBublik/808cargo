import {dignity} from 'widgets/Dignity/model/constants.ts';
export const Dignity = () => (
	<div className='flex justify-center gap-40 pt-32'>
		{dignity.map(({id, text, img}) => (
			<div key={id}>
				<p className='text-center text-white text-4xl'>
					{text.title}
					<br/>
					<span className='block text-center'>
						{text.subtitle}
					</span>
				</p>
				<div className='flex justify-center'>
					<img src={img} alt='' />
				</div>
			</div>
		))}
	</div>
);
