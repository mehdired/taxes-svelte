<script lang="ts">
	import { taxes_step_current, taxes_step_nfp, type StepTaxesType } from './lib/data';

	let input_value = 0;

	let taxes_resuts_current = 0;
	let taxes_resuts_nfp = 0;

	function calculateTaxes(step_taxes: StepTaxesType[]) {
		let base = 0;

		step_taxes.forEach((element) => {
			if (input_value > element.min) {
				const max =
					element.max === -1 || element.max > input_value ? input_value : element.max;
				const nbr_to_tax = max - element.min;

				base += Math.round(nbr_to_tax * element.percent);
			}
		});

		return base;
	}

	function calculateTaxesAll() {
		taxes_resuts_current = calculateTaxes(taxes_step_current);
		taxes_resuts_nfp = calculateTaxes(taxes_step_nfp);
	}
</script>

<main>
	<form>
		<p>{input_value}</p>
		<input
			type="range"
			step="1000"
			min="0"
			max="400000"
			bind:value={input_value}
			on:input={calculateTaxesAll}
		/>
	</form>
	<p>Actually : {Math.round(taxes_resuts_current)}</p>
	<p>With the new NFP law : {Math.round(taxes_resuts_nfp)}</p>
</main>

<style>
</style>
