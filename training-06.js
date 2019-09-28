let car = {
	name: 'Aston Martin One-77',
	horsepower: 750,
	dollar_value: 1850000,
	in_stock: true
};

// isLastInStock :: [Car] -> Boolean
const isLastInStock = (cars) => {
	const lastCar = last(cars);
	return prop('in_stock', lastCar);
};

const isLastInStock = compose(
	prop('in_stock'),
	last
);

const average = (xs) => reduce(add, 0, xs) / xs.length;

// averageDollarValue :: [Car] -> Int
const averageDollarValue = (cars) => {
	const dollarValues = map((c) => c.dollar_value, cars);
	return average(dollarValues);
};

const averageDollarValue = compose(
	average,
	map(prop('dollar_value'))
);

// fastestCar :: [Car] -> String
const fastestCar = (cars) => {
	const sorted = sortBy((car) => car.horsepower, cars);
	const fastest = last(sorted);
	return concat(fastest.name, ' is the fastest');
};

const fastestCar = compose(
	flip(concat)(' is th efastest'),
	prop('name'),
	last,
	sortBy(prop('hordepower'))
);
