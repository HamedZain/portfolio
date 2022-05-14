type ArgsType = string | { [key: string]: boolean } | undefined

export const className = (...args: ArgsType[]): string => {
	const classes: string[] = []

	for (const arg of args) {
		switch (typeof arg) {
			case 'string':
				classes.push(arg)
				break
			case 'object':
				for (const key in arg) {
					if (arg[key]) {
						classes.push(key)
					}
				}
				break
		}
	}

	return classes.join(' ')
}
