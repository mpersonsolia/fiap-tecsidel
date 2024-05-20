/************************** SPEED STATE OPERATION **************************/
speedUpdates.forEach((update) => {
	const tr = document.createElement('tr');

	const trContent = `
						<td>${update.date}</td>
						<td>${update.time}</td>
						<td>${update.id}</td>
						<td>${update.state}</td>
						<td>${update.city}</td>
						<td>${update.local}</td>
						<td>${update.speed}</td>
						<td  class="${
							update.operation === 'Sim'
								? 'success'
								: update.operation === 'Não'
								? 'danger'
								: ''
						}">${update.operation}</td>
                        `;

	tr.innerHTML = trContent;
	document.querySelector('table tbody').appendChild(tr);
});

/************************** SPEED SELECT **************************/
document.addEventListener('DOMContentLoaded', function () {
	var selectedState = document.getElementById('tecsidel-speed-select-states');
	var selectedOperation = document.getElementById(
		'tecsidel-speed-select-operation'
	);
	var tabelaFlows = document.getElementById('tecsidel-speed-table-list');

	selectedState.addEventListener('change', function () {
		var selectedStateFilter = selectedState.value;

		var uniqueOperations = new Set();
		var linhas = tabelaFlows.querySelectorAll('tbody tr');
		linhas.forEach(function (linha) {
			var stateColumn = linha.cells[3].textContent.trim();
			var operationColumn = linha.cells[7].textContent.trim();

			if (selectedStateFilter === '' || selectedStateFilter === stateColumn) {
				uniqueOperations.add(operationColumn);
			}
		});

		selectedOperation.innerHTML =
			'<option value="">Selecione uma Operação</option>';
		uniqueOperations.forEach(function (operation) {
			var option = document.createElement('option');
			option.value = operation;
			option.textContent = operation;
			selectedOperation.appendChild(option);
		});

		linhas.forEach(function (linha) {
			var stateColumn = linha.cells[3].textContent.trim();
			if (selectedStateFilter === '' || selectedStateFilter === stateColumn) {
				linha.style.display = '';
			} else {
				linha.style.display = 'none';
			}
		});
	});

	selectedOperation.addEventListener('change', function () {
		var selectedStateFilter = selectedState.value;
		var selectedOperationFilter = selectedOperation.value;

		var linhas = tabelaFlows.querySelectorAll('tbody tr');
		linhas.forEach(function (linha) {
			var stateColumn = linha.cells[3].textContent.trim();
			var operationColumn = linha.cells[7].textContent.trim();

			if (
				(selectedStateFilter === '' || selectedStateFilter === stateColumn) &&
				(selectedOperationFilter === '' ||
					selectedOperationFilter === operationColumn)
			) {
				linha.style.display = '';
			} else {
				linha.style.display = 'none';
			}
		});
	});
});
