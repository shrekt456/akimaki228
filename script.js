document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {

        // если уже увеличена — уменьшаем
        if (img.classList.contains('zoomed')) {
            img.classList.remove('zoomed');
            return;
        }

        // убираем увеличение с других картинок
        document.querySelectorAll('img.zoomed').forEach(i => {
            i.classList.remove('zoomed');
        });

        // увеличиваем текущую
        img.classList.add('zoomed');
    });
});