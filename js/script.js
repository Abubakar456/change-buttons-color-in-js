let allButtons = document.getElementsByTagName('button');

// creating default buttons copy
    let defaultButtons = new Array();
    for (let i = 0; i < allButtons.length; i++) {
        defaultButtons[i] = {
            btnClass: allButtons[i].classList[1],
            btnText: allButtons[i].innerText,
        };
    }
function changeColor(selectedColor) {
    console.log(selectedColor.value);
    
    // let test = allButtons[0].classList.value;
    console.log(allButtons[0].innerText);
    console.log('default buttons:[0]:' + defaultButtons[0].btnClass)

    switch (selectedColor.value) {
        case 'blue':
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.remove(allButtons[i].classList[1]);
                allButtons[i].classList.add('btn-primary');
                // alternative:
                // allButtons[i].classList.value = 'btn btn-primary';
            }
            break;

        case 'red':
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.remove(allButtons[i].classList[1]);
                allButtons[i].classList.add('btn-danger');
                // alternative:
                // allButtons[i].classList.value = 'btn btn-danger';
            }
            break;
        case 'yellow':
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.remove(allButtons[i].classList[1]);
                allButtons[i].classList.add('btn-warning');
                // alternative:
                // allButtons[i].classList.value = 'btn btn-warning';
            }
            break;
        case 'green':
            for (let i = 0; i < allButtons.length; i++) {
                allButtons[i].classList.remove(allButtons[i].classList[1]);
                allButtons[i].classList.add('btn-success');

                // alternative:
                // allButtons[i].classList.value = 'btn btn-success';

            }
            break;
        case 'reset':
            for(let i = 0; i < allButtons.length; i++){
                let classItem = allButtons[i].classList[1];
                let textItem = allButtons[i].innerText;
                if(classItem !== defaultButtons[i].btnClass && textItem === defaultButtons[i].btnText){
                    allButtons[i].classList.remove(classItem);
                    allButtons[i].classList.add(defaultButtons[i].btnClass);
                }
            }
            break;
    }
}


