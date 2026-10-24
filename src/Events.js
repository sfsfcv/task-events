export function createButton() {
    const btn = document.createElement('button');
    btn.textContent = 'Удали меня';
    btn.addEventListener('click', () => {
        btn.remove();
    });
    document.body.append(btn);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;
        li.addEventListener('mouseover', () => {
            li.title = li.textContent;
        });
        ul.append(li);
    });
    document.body.append(ul);
}

export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';

    let clicked = false;
    link.addEventListener('click', (event) => {
        if (!clicked) {
            event.preventDefault();
            link.textContent += ' ' + link.getAttribute('href');
            clicked = true;
        }
    });

    document.body.append(link);
}

export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';
    ul.append(li);

    ul.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.textContent += '!';
        }
    });

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    button.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.append(newLi);
    });

    document.body.append(ul, button);
}
