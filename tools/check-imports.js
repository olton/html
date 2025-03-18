async function checkHtmlElementsExports() {
    // Імпортуємо всі елементи з вашої бібліотеки
    const htmlLibrary = await import('./src/index.js');

    const htmlElements = [
        /* тут повний список з елементами наведеними вище */
    ];

    // Отримати ключі експортованих функцій
    const exportedElements = Object.keys(htmlLibrary);

    const notImplemented = htmlElements.filter(element => !exportedElements.includes(element));

    console.log(`Знайдено ${exportedElements.length} реалізованих елементів з ${htmlElements.length} стандартних.`);

    if (notImplemented.length > 0) {
        console.log('\nНе реалізовані елементи:');
        console.table(notImplemented);
    } else {
        console.log('\nВсі HTML елементи реалізовані!');
    }

    const coverage = (exportedElements.filter(e => htmlElements.includes(e)).length / htmlElements.length * 100).toFixed(2) + '%';
    console.log(`Покриття: ${coverage}`);
}