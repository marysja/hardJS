let step = 0;
let elements = [];
let ctrlBtn = false;

const infoLogger = (event) => {
        step++;
    if (event.target.tagName === 'A') {
        event.preventDefault();
    }
        console.log(`step - ${step}`, event.currentTarget);
        const tr = event.target.closest('tr');

if (ctrlBtn) {
    tr.classList.add('selected');
    elements.push(tr);
} else {
    elements = [];
    document.querySelectorAll('tr').forEach(tr => tr.classList.remove('selected'));
    elements.push(tr);
    tr.classList.add('selected');
}

   }
    document.querySelector('table').addEventListener('click', infoLogger);
    addBtn.addEventListener('click', () => {
        document.querySelector('tbody').insertAdjacentHTML('beforeend', '<tr><td>It\'s difficult</td><td>to study</td><td><a href=""> JS</a></td></tr>')
      });

      const keydownHandler = (event) => {
        if (event.keyCode === 17) {
            ctrlBtn = true;
        }
    }

const keyupHandler = (event) => {
    if (event.keyCode === 46) {
        elements.forEach(elem => elem.remove());
    } else  if (event.keyCode === 17) {
        ctrlBtn = false;
    }
}


      document.addEventListener('keydown', keydownHandler);
      document.addEventListener('keyup', keyupHandler);
      
  
