fetch('/assets/data/components.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('components__inner');
        data.components.forEach(component => {
            const componentDiv = document.createElement('div');
            componentDiv.classList.add('component');

            componentDiv.innerHTML = `
                <img src="${component.image}" alt="${component.name}">
                <h3 class="header__third" style="color: white">${component.name}</h3>
                <a href="assets/pages/components__details.html?id=${encodeURIComponent(component.id)}" class="details-button">Подробнее</a>
            `;

            container.appendChild(componentDiv);
        });
    })
    .catch(error => console.error('Ошибка загрузки JSON:', error));
