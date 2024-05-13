document.addEventListener('DOMContentLoaded', function () {
	const selectElement = document.getElementById(
		'tecsidel-alerts-select-status'
	);
	const alertsContainer = document.querySelector('.tecsidel-alerts-card-alert');

	const alertsUpdates = [
		{
			icon: 'close',
			title: 'Free Flow ID 322-RJ',
			date: '02/03/24',
			time: '13:55:03',
			address: 'BR 116 - Rod. Régis Bittencourt km 668 - Petrópolis/RJ',
			message:
				'Falha na identificação veicular na faixa única da rodovia detectada pela equipe de monitoramento. Aguarda a chegada da equipe de manutenção. Funcionamento paralisado.',
			status: 'Paralisado',
		},
		{
			icon: 'check',
			title: 'Free Flow ID 981-SP',
			date: '02/03/24',
			time: '06:27:32',
			address: 'SP 330 - Rod. Anhanguera km 85 - Campinas/SP',
			message:
				'Ave foi avistada na estrutura do equipamento pela equipe in loco. O animal já foi retirado e devidamente encaminhado à mata. Funcionamento retornou à normalidade.',
			status: 'Operando',
		},
		{
			icon: 'check',
			title: 'Free Flow ID 897-MG',
			date: '01/03/24',
			time: '04:12:59',
			address: 'BR 381 - Rod. Fernão Dias km 35 - Pouso Alegre/MG',
			message:
				'Devido à presença de neblina na região, as câmeras do equipamento se encontravam impossibilitadas de realizar o registro de veículos. Operando. Neblina passou e o funcionamento retornou à normalidade.',
			status: 'Operando',
		},
		{
			icon: 'close',
			title: 'Free Flow ID 017-MG',
			date: '29/02/24',
			time: '20:33:41',
			address: 'BR 116 - Rod. Presidente Dutra km 88 - Governador Valares/MG',
			message:
				'Falha detectada na placa de leitura de veículos devido à forte chuva com grande incidência de raios. Aguarda nova placa para instalação da equipe.',
			status: 'Paralisado',
		},
		{
			icon: 'warning',
			title: 'Free Flow ID 104-RJ',
			date: '27/02/24',
			time: '14:51:23',
			address: 'BR 116 - Rod. Régis Bittecourt km 668 - Petrópolis/RJ',
			message:
				'Detectada queda de árvore em equipamento. Equipe no local realiza a retirada da árvore e aguarda equipe de manutenção para cuidar da estrutura.',
			status: 'Manutenção',
		},
		{
			icon: 'close',
			title: 'Free Flow ID 322-RJ',
			date: '27/02/24',
			time: '13:01:14',
			address: 'BR 116 - Rod. Régis Bittecourt km 668 - Duque de Caxias/RJ',
			message:
				'Falha detectada em todas as câmeras do equipamento, causado devido à forte ventania da região que afetou as ligações elétricas da estrutura. Aguarda a chegada da equipe de manutenção para substituição.',
			status: 'Paralisado',
		},
		{
			icon: 'check',
			title: 'Free Flow ID 060-MG',
			date: '26/02/24',
			time: '12:04:27',
			address:
				'BR 040 - Rod. Presidente Juscelino Kubitschek km 17 - Juiz de Fora/MG',
			message:
				'Detectada falha na câmera da pista sentido Juiz de Fora devido à presença de animal semovente no equipamento. Equipe no local realizou a retirada da cobra.',
			status: 'Operando',
		},
		{
			icon: 'check',
			title: 'Free Flow ID 444-MG',
			date: '26/03/24',
			time: '03:27:55',
			address:
				'BR 040 - Rod. Presidente Juscelino Kubitschek km 35 - Contagem/MG',
			message:
				'Ocorrência de colisão de veículo no equipamento, levando à danificação da estrutura e parte elétrica. Equipe de manutenção realizou toda a reparação necessária. Equipamento retornou à operação.',
			status: 'Operando',
		},
	];

	function showScreen(screen) {
		const params = new URL(document.location).searchParams;
		params.set('screen', screen);
		document.location.search = params;
	}

	function createListItem(update) {
		const listItem = document.createElement('li');

		const iconClass = () => {
			if (update.icon === 'check') {
				return 'icon-success';
			} else if (update.icon === 'warning') {
				return 'icon-warning';
			} else if (update.icon === 'close') {
				return 'icon-danger';
			}
		};

		listItem.innerHTML = `
			<span class="material-icons-sharp tecsidel-alerts-card-info-icon ${iconClass()}">${
			update.icon
		}</span>
		
			<div class="tecsidel-alerts-card-info">
				<h3>${update.title}</h3>
				<p class="tecsidel-alerts-card-info-paragraph">${update.address}</p>
				<p class="tecsidel-alerts-card-info-paragraph">${update.date} - ${
			update.time
		}</p>
				<p class="tecsidel-alerts-card-info-message tecsidel-alerts-card-info-paragraph">${
					update.message
				}</p>
			</div>
			<div class="tecsidel-alerts-card-status">
				<card class="${
					update.status === 'Operando'
						? 'challenge-card success-card'
						: update.status === 'Manutenção'
						? 'challenge-card warning-card'
						: 'challenge-card danger-card'
				}">${update.status}
				</card>
			</div> 
		`;

		return listItem;
	}

	function createList() {
		const list = document.querySelector('.tecsidel-alerts-card-alert');
		alertsUpdates.forEach((update) => {
			const listItem = createListItem(update);
			list.appendChild(listItem);
		});
	}

	createList();

	/***************************************** ALERTS SELECT *****************************************/
	function renderAlerts() {
		alertsContainer.innerHTML = '';

		const selectedStatus = selectElement.value;

		alertsUpdates.forEach((update) => {
			if (!selectedStatus || update.status === selectedStatus) {
				const listItem = createListItem(update);
				alertsContainer.appendChild(listItem);
			}
		});
	}

	selectElement.addEventListener('change', renderAlerts);
	renderAlerts();
});
