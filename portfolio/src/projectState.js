//Import Images
import chillify from './img/chillify.jpg';
import portfolio from './img/portfolio.jpg';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';

export const ProjectState = () => {
	return [
		{
			title: 'Chillify',
			mainImg: chillify,
			secondaryImg: athlete2,
			url: '/projects/chillify',
			awards: [
				{
					title: 'React',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'SCSS',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'Lorem ipsum',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
			],
		},
		{
			title: 'Portfolio',
			mainImg: portfolio,
			url: '/projects/portfolio',
			secondaryImg: goodtimes2,
			awards: [
				{
					title: 'React',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'Styled Components',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
				{
					title: 'Lorem ipsum',
					description:
						'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
				},
			],
		},
	];
};
