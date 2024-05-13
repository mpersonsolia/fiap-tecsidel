/************************** SPEED STATE SELECT **************************/
document.addEventListener('DOMContentLoaded', function () {
	var selectedState = document.getElementById('tecsidel-speed-select-states');
	var tabelaFlows = document.getElementById('tecsidel-speed-table-list');

	selectedState.addEventListener('change', function () {
		var selectedStateFilter = selectedState.value;

		var linhas = tabelaFlows.querySelectorAll('tbody tr');
		linhas.forEach(function (linha) {
			var stateColumn = linha.cells[3].textContent.trim();

			if (selectedStateFilter === '' || selectedStateFilter === stateColumn) {
				linha.style.display = '';
			} else {
				linha.style.display = 'none';
			}
		});
	});
});

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

document.addEventListener('DOMContentLoaded', function () {
	var selectedOperation = document.getElementById(
		'tecsidel-speed-select-operation'
	);
	var tabelaFlows = document.getElementById('tecsidel-speed-table-list');

	selectedOperation.addEventListener('change', function () {
		var selectedOperationFilter = selectedOperation.value;

		var linhas = tabelaFlows.querySelectorAll('tbody tr');
		linhas.forEach(function (linha) {
			var stateColumn = linha.cells[7].textContent.trim();

			if (
				selectedOperationFilter === '' ||
				selectedOperationFilter === stateColumn
			) {
				linha.style.display = '';
			} else {
				linha.style.display = 'none';
			}
		});
	});
});
