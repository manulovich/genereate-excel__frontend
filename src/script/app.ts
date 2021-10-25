const workArea = document.querySelector('.work-area__table');
const btnCreateTable = document.getElementById('header__btn-create-table');
const btnDownloadTable = document.getElementById('header__btn-download-exel');

const createTable = (xCount: number, yCount: number): string => {
    const row = `<tr>${'<td><input type="text">'.repeat(xCount)}</tr>`;
    const table = row.repeat(yCount);

    return `<table>${table}</table>`;
};

const parseHtmlTable = (table: HTMLTableElement): string[][] => {
    return [...table.children[0].children].map(rows => {
        return [...rows.children].map(column => {
            const input = <HTMLFormElement>column.children[0];
            return input.value;
        });
    });
};

const download = (blob: Blob, fileName: string): void => {
    const linkToDownload = document.createElement('a');
    
    linkToDownload.download = fileName;
    linkToDownload.href = URL.createObjectURL(blob);
    
    document.body.appendChild(linkToDownload);
    
    linkToDownload.click();
    linkToDownload.remove();
};

window.onload = () => workArea.innerHTML = createTable(5, 5);

btnCreateTable.addEventListener('click', () => {
    const inputXCount = <HTMLFormElement>document.getElementById('input-field__input--x');
    const inputYCount = <HTMLFormElement>document.getElementById('input-field__input--y');

    const xCount = parseInt(inputXCount.value) || 1;
    const yCount = parseInt(inputYCount.value) || 1;

    workArea.innerHTML = createTable(
        xCount,
        yCount
    );
});

btnDownloadTable.addEventListener('click', () => {
    const content = { excelData: parseHtmlTable(document.querySelector('.work-area__table table')) || [] };
    fetch('http://localhost:3000/excel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(content)
    })
        .then(response => response.blob())
        .then(blob => download(blob, 'excel.xlsx'))
        .catch(err => console.log(`Error ${err}`));
});