const quarter = document.querySelector('.quarter')
const eighth = document.querySelector('.eighth')
const sixteenth = document.querySelector('.sixteenth')
const rest = document.querySelector('.rest')
const empties = document.querySelectorAll('.empty')

let beat = [quarter, eighth, sixteenth, rest]


quarter.addEventListener('dragstart', dragStart)
quarter.addEventListener('dragend', dragEnd)

eighth.addEventListener('dragstart', dragStart)
eighth.addEventListener('dragend', dragEnd)

sixteenth.addEventListener('dragstart', dragStart)
sixteenth.addEventListener('dragend', dragEnd)

rest.addEventListener('dragstart', dragStart)
rest.addEventListener('dragend', dragEnd)


for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' hold';
}

function dragEnd() {
    this.classNames = 'this'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovering'
}

function dragLeave() {
    this.className = 'empty'

}

function dragDrop() {
    this.className = 'empty'
    this.append(quarter)
}
