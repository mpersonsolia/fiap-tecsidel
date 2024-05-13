/***************************************** FREE FLOW LIST *****************************************/
const freeFlowsList = [
	{
		state: 'Bahia',
		city: 'Feira de Santana',
		id: '886-BA',
		local: 'BR 324 - Rod. Engº. Vasco Filho km 105',
		rate: 'R$ 4,50',
	},
	{
		state: 'Bahia',
		city: 'Salvador',
		id: '992-BA',
		local: 'BR 324 - Rod. Engº. Vasco Filho km 10',
		rate: 'R$ 2,25',
	},
	{
		state: 'Bahia',
		city: 'Vitória da Conquista',
		id: '031-BA',
		local: 'BR 324 - Rod. Engº. Vasco Filho km 88',
		rate: 'R$ 8,40',
	},
	{
		state: 'Goiás',
		city: 'Anápolis',
		id: '542-GO',
		local: 'BR 115 - Rod. Transbrasiliana km 785',
		rate: 'R$ 12,60',
	},
	{
		state: 'Goiás',
		city: 'Goiânia',
		id: '134-GO',
		local: 'BR 115 - Rod. Transbrasiliana km 23',
		rate: 'R$ 6,85',
	},
	{
		state: 'Goiás',
		city: 'Itumbiara',
		id: '334-GO',
		local: 'BR 115 - Rod. Transbrasiliana km 540',
		rate: 'R$2,95',
	},
	{
		state: 'Goiás',
		city: 'Aparecida de Goiânia',
		id: '003-GO',
		local: 'GO 060 - Rodovia Geraldo Silva Nascimento km 41',
		rate: 'R$14,60',
	},
	{
		state: 'Goiás',
		city: 'Montes Claros de Goiás',
		id: '911-GO',
		local: 'GO 060 - Rodovia Geraldo Silva Nascimento km 12',
		rate: 'R$8,10',
	},
	{
		state: 'Minas Gerais',
		city: 'Belo Horizonte',
		id: '077-MG',
		local: 'BR 040 - Rod. Presidente Juscelino Kubitschek km 31',
		rate: 'R$3,25',
	},
	{
		state: 'Minas Gerais',
		city: 'Conselheiro Lafayete',
		id: '145-MG',
		local: 'BR 040 - Rod. Presidente Juscelino Kubitschek km 35',
		rate: 'R$7,30',
	},
	{
		state: 'Minas Gerais',
		city: 'Juiz de Fora',
		id: '060-MG',
		local: 'BR 040 - Rod. Presidente Juscelino Kubitschek km 17',
		rate: 'R$3,25',
	},
	{
		state: 'Minas Gerais',
		city: 'Contagem',
		id: '444-MG',
		local: 'BR 381 - Rod. Fernão Dias km 582',
		rate: 'R$3,80',
	},
	{
		state: 'Minas Gerais',
		city: 'Pouso Alegre',
		id: '897-MG',
		local: 'BR 381 - Rod. Fernão Dias km 35',
		rate: 'R$5,50',
	},
	{
		state: 'Minas Gerais',
		city: 'Governador Valadares',
		id: '017-MG',
		local: 'BR 116 - Rod. Presidente Dutra km 88',
		rate: 'R$7,35',
	},
	{
		state: 'Rio de Janeiro',
		city: 'Itaguaí',
		id: '853-RJ',
		local: 'BR 101 - Rod. Governador Mário Covas km 41',
		rate: 'R$4,50',
	},
	{
		state: 'Rio de Janeiro',
		city: 'Itaguaí',
		id: '755-RJ',
		local: 'BR 101 - Rod. Governador Mário Covas km 333',
		rate: 'R$2,20',
	},
	{
		state: 'Rio de Janeiro',
		city: 'Paraty',
		id: '154-RJ',
		local: 'BR 101 - Rod. Governador Mário Covas km 73',
		rate: 'R$13,60',
	},
	{
		state: 'Rio de Janeiro',
		city: 'Duque de Caxias',
		id: '322-RJ',
		local: 'BR 101 - Rod. Régis Bittencourt km 552',
		rate: 'R$5,90',
	},
	{
		state: 'Rio de Janeiro',
		city: 'Petrópolis',
		id: '104-RJ',
		local: 'BR 101 - Rod. Governador Mário Covas km 668',
		rate: 'R$9,15',
	},
	{
		state: 'Rio de Janeiro',
		city: 'Teresópolis',
		id: '033-RJ',
		local: 'BR 101 - Rod. Governador Mário Covas km 31',
		rate: 'R$9,90',
	},
	{
		state: 'São Paulo',
		city: 'Campinas',
		id: '891-SP',
		local: 'SP 330 - Rod. Anhanguera km 85',
		rate: 'R$18,20',
	},
	{
		state: 'São Paulo',
		city: 'Ribeirão Preto',
		id: '333-SP',
		local: 'SP 330 - Rod. Anhanguera km 457',
		rate: 'R$8,50',
	},
	{
		state: 'São Paulo',
		city: 'Guarulhos',
		id: '187-SP',
		local: 'SP 070 - Rod. Ayrton Senna km 22',
		rate: 'R$13,25',
	},
	{
		state: 'São Paulo',
		city: 'Mogi das Cruzes',
		id: '589-SP',
		local: 'SP 070 - Rod. Ayrton Senna km 23',
		rate: 'R$11,40',
	},
	{
		state: 'São Paulo',
		city: 'Jundiaí',
		id: '048-SP',
		local: 'BR 101 - Rod. dos Bandeirantes km 258',
		rate: 'R$3,40',
	},
	{
		state: 'São Paulo',
		city: 'São Paulo',
		id: '479-SP',
		local: 'SP 348 - Rod. dos Bandeirantes km 03',
		rate: 'R$18,20',
	},
];

freeFlowsList.forEach((list) => {
	const tr = document.createElement('tr');

	const trContent = `
						<td>${list.state}</td>
						<td>${list.city}</td>
						<td>${list.id}</td>
						<td>${list.local}</td>
						<td>${list.rate}</td>
                        `;

	tr.innerHTML = trContent;
	document.querySelector('table tbody').appendChild(tr);
});

/***************************************** FREE FLOWS SELECT *****************************************/
document.addEventListener('DOMContentLoaded', function () {
	var selectedState = document.getElementById(
		'tecsidel-freeFlow-select-states'
	);
	var tabelaFlows = document.getElementById('tecsidel-freeFlow-table-list');

	selectedState.addEventListener('change', function () {
		var state = selectedState.value;

		var linhas = tabelaFlows.querySelectorAll('tbody tr');
		linhas.forEach(function (linha) {
			var stateColumn = linha.cells[0].textContent.trim();

			if (state === '' || state === stateColumn) {
				linha.style.display = '';
			} else {
				linha.style.display = 'none';
			}
		});
	});
});
