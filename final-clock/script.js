var name = window.prompt("What's your name?");

function startTime() {
    var today = new Date();
    var h = today.getHours();

    {
        if (h >= 5 && h < 12)
            var greeting = 'Good Morning';
        else if (h >= 12 && h < 17)
            greeting = 'Good Afternoon';
        else if (h >= 17 && h < 21)
            greeting = 'Good Evening';
        else if (h >= 21 && h < 23)
            greeting = 'Good Night';
        else
            greeting = 'Hello';
        document.querySelector('.greeting').textContent = greeting + ', ' + name + '!';
    }

    {
        if (h >= 12)
            var clock12 = 'p.m.';
        else
            clock12 = 'a.m.';
        if (h === 0)
            h = 12;
        else
            h = h % 12;
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);

        document.querySelector('.clock').textContent = h + ':' + m + ' ' + clock12;
    }

    {
        const MONTH_WORDS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
        const DAY_OF_WEEK = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'];
        var day = DAY_OF_WEEK[today.getDay()];
        var month = MONTH_WORDS[today.getMonth()];
        var date = today.getDate();
        var year = today.getFullYear();
        document.querySelector('.date').textContent = day + ', ' + month + ' ' + date + ', ' + year;
    }

    var refresh = setTimeout(startTime, 6000);
}

function checkTime(i) {
    if (i < 10)
        i = '0' + i;
    return i;
}

var ul = document.querySelector('#myList');
var inputText = document.querySelector('#userInput');

function createList() {
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText.value);
    li.appendChild(textNode);
    ul.appendChild(li);
    inputText.value = '';
    var delBtn = document.createElement('span');
    var delTextNode = document.createTextNode('X');
    delBtn.addEventListener('click', function(){
        li.remove();
    });
    delBtn.appendChild(delTextNode);
    li.appendChild(delBtn);
    li.onclick = function(){
        li.classList.toggle('done');
    };
}

var enterBtn = document.querySelector('#enter');
enterBtn.addEventListener('click', function () {
    if (inputText.value != '')
        createList();
});

inputText.addEventListener('keypress', function () {
    if (inputText.value != '' && event.keyCode === 13)
        createList();
});


