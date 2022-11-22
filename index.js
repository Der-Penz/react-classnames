export function classNames() {
	let clNames = [];

	Object.values(arguments).forEach((argument) => {
		if (
			argument === undefined ||
			argument === null ||
			argument !== argument ||
			typeof argument === 'boolean'
		) {
			return;
		}

		if (Array.isArray(argument)) {
			clNames.push(clNames(...argument));
			return;
		}

		if (typeof argument === 'function') {
			const value = argument();
			clNames.push(clNames(...value));
			return;
		}

		if (typeof argument === 'object') {
			Object.entries(argument).forEach(([key, value]) => {
				if (value) clNames.push(key);
			});
			return;
		}

		clNames.push(argument);
	});

	return clNames.join(' ');
}

export default classNames;
