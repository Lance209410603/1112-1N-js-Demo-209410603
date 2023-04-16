const O = 'O';
const X = 'X';
let turn = 0;
let done = false;

const resetBtn = document.querySelector('#reset');

const allLi = document.querySelectorAll('#board li')
console.log('allLi', allLi);

const container = document.querySelector('#container');

const checkWin = (player) => {
    let p = [];
    allLi.forEach((item) => {
        p.push(item.classList.contains(player));
    })

    console.log('p', p);

    const [p1, p2, p3, p4, p5, p6, p7, p8, p9] = p;

    if ((p1 && p2 && p3) ||
        (p4 && p5 && p6) ||
        (p7 && p8 && p9) ||
        (p1 && p4 && p7) ||
        (p2 && p5 && p8) ||
        (p3 && p6 && p9) ||
        (p1 && p5 && p9) ||
        (p3 && p5 && p7)
    )

        return true;
    else
        return false;
}

const reset = () => {
    allLi.forEach((item) => {
        item.textContent = '+';
        item.classList = '';
        container.style.backgroundColor = '#666';
        turn = 0;
        done = false;
    });
}



const winMessage = (player) => {
    if (player === 'O') {
        container.style.backgroundColor = 'rgba(144,238,144,0.5)';
    } else {
        container.style.backgroundColor = 'rgba(240,118,128,0.5)';
    }
    alert(`player ${player} wins`);
}

allLi.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('disabled')) {
            alert('Already filled');
            turn--;
        } else if (turn % 2 === 0) {
            item.textContent = 'O';
            item.classList.add('O', 'disabled');
            if (checkWin(O)) {
                winMessage(O);
                done = true;
                allLi.forEach((item) => {
                    item.classList.add('+', 'disabled');
                })
            }
        } else if (turn % 2 === 1) {
            item.textContent = 'X';
            item.classList.add('X', 'disabled');
            if (checkWin(X)) {
                winMessage(X);
                done = true;
                allLi.forEach((item) => {
                    item.classList.add('+', 'disabled');
                })
            }
        }

        if (turn < 8) {
            turn++;
        } else if (turn >= 8) {
            if (!checkWin(O) && !checkWin(X)) {
                alert('tie');
            }
        }
    });
});




/*console.log('checkWin(O)',checkWin('O'));
console.log('checkWin(X)',checkWin('X'));*/
resetBtn.addEventListener('click', reset);