const windowScroll = (param: number) => {
	window.scrollTo({
		top: param,
		behavior: 'smooth',
	});
};

export const scrollTo = (scroll: string) => {
	scroll === '/' && windowScroll(0);
	scroll === 'catalog' && windowScroll(100);
	scroll === 'contacts' && windowScroll(200);
};
