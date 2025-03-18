async function checkHtmlElementsImplementation() {
    const fs = await import('fs/promises');
    const path = await import('node:path');
    const elements = await import('./elements.js');

    // Шлях до каталогу з елементами (можна змінити на власний)
    const elementsDir = './src/elements/standard';
    
    // HTML5 елементи
    const htmlElements = elements.default;

    try {
        // Отримуємо список файлів у директорії елементів
        const files = await fs.readdir(elementsDir);

        // Витягуємо імена елементів з імен файлів (видаляємо розширення .js)
        const implementedElements = files
            .filter(file => file.endsWith('.js'))
            .map(file => path.basename(file, '.js'));

        console.log(`Знайдено ${implementedElements.length} реалізованих елементів з ${htmlElements.length} стандартних.`);

        // Знаходимо елементи, які ще не реалізовані
        const notImplemented = htmlElements.filter(element => !implementedElements.includes(element));

        if (notImplemented.length > 0) {
            console.log('\nНе реалізовані елементи:');
            console.table(notImplemented);
        } else {
            console.log('\nВсі HTML елементи реалізовані!');
        }

        // Перевіряємо наявність файлів, які не відповідають стандарту HTML5
        const nonStandardElements = implementedElements.filter(element => !htmlElements.includes(element));
        if (nonStandardElements.length > 0) {
            console.log('\nЕлементи, які не входять до стандарту HTML5:');
            console.table(nonStandardElements);
        }

        return {
            totalStandard: htmlElements.length,
            implemented: implementedElements.length,
            notImplemented,
            nonStandardElements,
            coverage: (implementedElements.length / htmlElements.length * 100).toFixed(2) + '%'
        };

    } catch (error) {
        console.error('Помилка при перевірці елементів:', error);
        return {
            error: error.message
        };
    }
}

checkHtmlElementsImplementation().then(result => {
    console.log('Загальні результати:');
    console.log(`Покриття: ${result.coverage}`);
});
