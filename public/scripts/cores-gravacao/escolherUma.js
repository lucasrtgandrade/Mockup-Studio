document.getElementById('inputCorCliente').addEventListener('input', updateDisplay);

function updateDisplay() {
    let cores = selectedCores.slice(); // Copy currently selected cores from chips
    const corDigitada = document.getElementById('inputCorCliente').value.trim().split(/\s+/);

    corDigitada.forEach(color => {
        if (color && cores.length < 1 && !cores.includes(color + ' cliente')) {
            cores.push(color + ' cliente');
        }
    });

    if (cores.length > 3) {
        alert('Você só pode escolher até três cores!');
        document.getElementById('inputCorCliente').value = cores.slice(0, 1).join(' ');
        return;
    }

    displayCores(cores);
}

function displayCores(cores) {
    const exibirCores = document.getElementById('exibirCores');
    exibirCores.innerHTML = '';
    cores.forEach((cor, index) => {
        const corGravacao = document.createElement('div');
        corGravacao.textContent = `Cor 0${index + 1}: ${cor}`; // Prepend with sequential number
        exibirCores.appendChild(corGravacao);
    });
}

let selectedCores = [];

function ativarChip(chipElement, nomeCor) {
    const icon = chipElement.querySelector('.chip__icone');
    const isActive = window.getComputedStyle(icon).display !== 'none';

    if (!isActive && selectedCores.length < 1) {
        icon.style.display = 'block';
        chipElement.classList.add('ativo');
        selectedCores.push(nomeCor);
    } else if (isActive) {
        icon.style.display = 'none';
        chipElement.classList.remove('ativo');
        selectedCores = selectedCores.filter(cor => cor !== nomeCor);
    }

    // Sync the text input with chip selection
    document.getElementById('inputCorCliente').value = selectedCores.filter(cor => cor.endsWith('cliente')).map(cor => cor.replace(' cliente', '')).join(' ');
    displayCores(selectedCores);
}