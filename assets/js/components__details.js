const params = new URLSearchParams(window.location.search);
const componentId = params.get('id');

fetch('https://raw.githubusercontent.com/tcybkv/computers/refs/heads/main/assets/data/components.json')
    .then(response => response.json())
    .then(data => {
        const component = data.components.find(item => item.id === componentId);
        if (component) {
            const container = document.getElementById('components__details');

            container.innerHTML = `
                <h1 class="header__second">${component.name}</h1>
                <div class="components__gallery">
                    ${component.details.images.map(
                (image) => `<img src="${image}" alt="${component.name}" class="components__gallery__image">`
            ).join('')}
                </div>
                <div class="components__info">
                    <div class="components__info">
                    <div class="components__info__section">
                        <h3 class="header__third">Виды</h3>
                        <p>${component.details.types}</p>
                    </div>
                    <div class="components__info__section">
                        <h3 class="header__third">Характеристики</h3>
                        <p>${component.details.characteristics}</p>
                    </div>
                    <div class="components__info__section">
                        <h3 class="header__third">Функции</h3>
                        <p>${component.details.function}</p>
                    </div>
                    <div class="components__info__section">
                        <h3 class="header__third">Совместимость</h3>
                        <p>${component.details.compatibility}</p>
                    </div>
                    <div class="components__info__section">
                        <h3 class="header__third">Диагностика</h3>
                        <p>${component.details.diagnostics}</p>
                    </div>
                    <div class="components__info__section">
                        <h3 class="header__third">Производительность</h3>
                        <p>${component.details.performance}</p>
                    </div>
                    <div class="components__info__section">
                        <h3 class="header__third">Причины поломки</h3>
                        <p>${component.details.failure_causes}</p>
                    </div>
                </div>
                <h3 class="header__third">Ценевые сегменты и отзывы</h3>
                <div class="components__gallery">
                    ${component.details.price_segments.map(segment => `
                        <div class="components__segment">
                            <h2>${segment.category}</h2>
                            <div class="components__segment__images">
                                ${segment.images.map(image => `
                                    <img src="${image}" alt="${component.name}" class="components__gallery__image">
                                `).join('')}
                            </div>
                            <div class="components__price">
                                <h3 class="header__third">Цена: ${segment.price_range}</h3>
                            </div>
                            <div class="components__reviews">
                                <h3>Отзывы</h3>
                                <p>${segment.reviews}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        } else {
            document.getElementById('components__details').textContent = 'Компонент не найден.';
        }
    })
    .catch(error => console.error('Ошибка загрузки JSON:', error));
