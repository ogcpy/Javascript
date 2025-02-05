export function loadScreen() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const loadingPage = document.createElement('div');
    loadingPage.id = 'loadPage';

    const title = document.createElement('h1');
    title.innerHTML = 'Naval <br/> Battle Strike';

    const npcBtn = document.createElement('button');
    npcBtn.id = 'npcBtn';
    npcBtn.innerText = 'Computer';

    const vsText = document.createElement('h3');
    vsText.id = 'vsText';
    vsText.innerText = 'VS';

    const twoPlayerBtn = document.createElement('button');
    twoPlayerBtn.id = 'twoPlayerBtn';
    twoPlayerBtn.innerText = '2 Player';

    content.appendChild(loadingPage);
    loadingPage.appendChild(title);
    loadingPage.appendChild(vsText);
    loadingPage.appendChild(npcBtn);
    loadingPage.appendChild(twoPlayerBtn);

    return { npcBtn, twoPlayerBtn };
}
