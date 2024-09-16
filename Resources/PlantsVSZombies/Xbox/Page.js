
function Page(content,document) {
    var ContentList = [];
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(content, 'text/xml');
    const contents = xmlDoc.getElementsByTagName('Content');
    for (let i = 0; i < contents.length; i++) {
        let image = contents[i].getElementsByTagName('Image')[0].getAttribute('path');
        let distributor = contents[i].getElementsByTagName('Distributor')[0].textContent;
        let language = contents[i].getElementsByTagName('Languages')[0].textContent;
        let platform = contents[i].getElementsByTagName('Platform')[0].textContent;
        let download = contents[i].getElementsByTagName('Download')[0].textContent;
        let sign = contents[i].getElementsByTagName('Sign')[0].textContent;
        ContentList.push([image,distributor,language,platform,download,sign]);
    };
    for (let i = 0; i < ContentList.length; i++) {
        let dev0 = document.createElement('div');
        dev0.classList.add("Taber");
        let dev1 = document.createElement('div');
        let dev2 = document.createElement('div');
        let Pageimg = document.createElement('img');
        Pageimg.src = ContentList[i][0];
        //Pageimg.style = "width:128px;height: 128px;";
        dev1.appendChild(Pageimg);
        dev0.appendChild(dev1);
        let label1 = document.createElement('label');
        label1.textContent = "Distributor:" + ContentList[i][1];
        dev2.appendChild(label1);
        dev2.appendChild(document.createElement('br'));
        
        let label2 = document.createElement('label');
        label2.textContent = "Language:" + ContentList[i][2];
        dev2.appendChild(label2);
        dev2.appendChild(document.createElement('br'));

        let label3 = document.createElement('label');
        label3.textContent = "Platform:" + ContentList[i][3];
        dev2.appendChild(label3);
        dev2.appendChild(document.createElement('br'));

        let label4 = document.createElement('label');
        let link = document.createElement('a');
        link.href = ContentList[i][4];
        link.textContent = 'Download Link';
        label4.appendChild(link);
        dev2.appendChild(label4);
        dev2.appendChild(document.createElement('br'));

        let label5 = document.createElement('label');
        label5.textContent = "Sign:" + ContentList[i][5];
        dev2.appendChild(label5);
        dev2.appendChild(document.createElement('br'));

        dev0.appendChild(dev2);
        document.body.appendChild(dev0);
        document.body.appendChild(document.createElement('hr'));
    };
    return ContentList;
}