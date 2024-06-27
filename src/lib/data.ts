export type StepTaxesType = {
	min: number;
	max: number;
	percent: number;
};

export const taxes_step_current: StepTaxesType[] = [
	{
		min: 0,
		max: 11294,
		percent: 0
	},
	{
		min: 11295,
		max: 28797,
		percent: 0.11
	},
	{
		min: 28798,
		max: 82341,
		percent: 0.3
	},
	{
		min: 82342,
		max: 177106,
		percent: 0.41
	},
	{
		min: 177106,
		max: -1,
		percent: 0.45
	}
];

export const taxes_step_nfp: StepTaxesType[] = [
	{
		min: 0,
		max: 10292,
		percent: 0.01
	},
	{
		min: 10293,
		max: 15438,
		percent: 0.05
	},
	{
		min: 15439,
		max: 20584,
		percent: 0.1
	},
	{
		min: 20584,
		max: 27789,
		percent: 0.15
	},
	{
		min: 27790,
		max: 30876,
		percent: 0.2
	},
	{
		min: 30877,
		max: 33964,
		percent: 0.25
	},
	{
		min: 33965,
		max: 38081,
		percent: 0.3
	},
	{
		min: 38082,
		max: 44256,
		percent: 0.35
	},
	{
		min: 44257,
		max: 61752,
		percent: 0.4
	},
	{
		min: 61753,
		max: 102921,
		percent: 0.45
	},
	{
		min: 102922,
		max: 144089,
		percent: 0.5
	},
	{
		min: 144090,
		max: 267594,
		percent: 0.55
	},
	{
		min: 267595,
		max: 411683,
		percent: 0.6
	},
	{
		min: 411684,
		max: -1,
		percent: 0.9
	}
];
