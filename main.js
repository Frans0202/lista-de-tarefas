// Define o array da lista
let tarefas = [];

// Seleciona os elementos do formulário.
const form = document.querySelector("form");
const expenseInput = document.querySelector("#expense");
const listaTarefasElement = document.querySelector("#expense-list");
const caos = document.querySelector(".caos")
const caos2 = document.querySelector(".caos2")


function refreshTarefas() {
    // sempre apaga tudo antes de renderizar
    listaTarefasElement.innerHTML = "";
    caos.innerHTML = "";
    caos2.innerHTML = "";



    if (tarefas.length === 0) {

        const line = document.createElement("div")
        line.classList.add("line")
        listaTarefasElement.appendChild(line)

        const noTask = document.createElement("div")
        noTask.classList.add("noTask")
        line.appendChild(noTask)

        const clipBoard = document.createElement("div")
        clipBoard.classList.add("clipBoard")
        noTask.appendChild(clipBoard)

        const clipboardIcon = document.createElement("i")
        clipboardIcon.classList.add("ph")
        clipboardIcon.classList.add("ph-clipboard-text")
        clipBoard.appendChild(clipboardIcon)

        const flexDiv = document.createElement("div")
        flexDiv.classList.add("flex")
        noTask.appendChild(flexDiv)

        const naoTem = document.createElement("span")
        naoTem.innerText = "Você ainda não tem tarefas cadastrada";
        naoTem.classList.add("naoTem")
        flexDiv.appendChild(naoTem)

        const divFlex = document.createElement("div")
        divFlex.classList.add("flex")
        noTask.appendChild(divFlex)

        const crieTaref = document.createElement("span")
        crieTaref.innerText = "Crie tarefas e organize seus itens a fazer"
        crieTaref.classList.add("crieTaref")
        divFlex.appendChild(crieTaref)

        const tarefaC = document.createElement("span")
        tarefaC.innerText = "Tarefas criadas"
        tarefaC.classList.add("TarefasC")
        caos.appendChild(tarefaC)

        const quantidade1 = document.createElement("p")
        quantidade1.innerText = "0"
        quantidade1.classList.add("quantidade1")
        caos.appendChild(quantidade1)

        const tarefaConc = document.createElement("span")
        tarefaConc.innerText = "Concluidas"
        tarefaConc.classList.add("TarefasConc")
        caos2.appendChild(tarefaConc)

        const quantidade2 = document.createElement("p")
        quantidade2.innerText = "0"
        quantidade2.classList.add("quantidade2")
        caos2.appendChild(quantidade2)

    } else {
        tarefas.map((tarefa) => {

            const expenseItem = document.createElement("li")
            expenseItem.classList.add("expense")
            listaTarefasElement.appendChild(expenseItem)

            const expenseInfo = document.createElement("div")
            expenseInfo.classList.add(tarefa.concluida ? "listClosed" : "listOpen")
            expenseItem.appendChild(expenseInfo)

            const circle = document.createElement("div")
            circle.classList.add("circle")
            expenseInfo.appendChild(circle)


            const circleIcon = document.createElement("i")
            circleIcon.classList.add(tarefa.concluida ? "ph-fill" : "ph")
            circleIcon.classList.add(tarefa.concluida ? "ph-check-circle" : "ph-circle")
            circleIcon.onclick = () => {
                concluirTarefa(tarefa.id)
            }
            circle.appendChild(circleIcon)

            const info = document.createElement("div")
            info.classList.add("expense-info")
            expenseInfo.appendChild(info)

            const descricao = document.createElement("span")
            descricao.classList.add("descricao")
            descricao.textContent = tarefa.expense
            info.appendChild(descricao)

            const trash = document.createElement("div")
            trash.classList.add("trash")
            expenseInfo.appendChild(trash)

            const trashIcon = document.createElement("i")
            trashIcon.classList.add("ph")
            trashIcon.classList.add("ph-trash")
            trashIcon.onclick = () => {
                removerTarefa(tarefa.id)
            }
            trash.appendChild(trashIcon)

        })
        const tarefaC = document.createElement("span")
        tarefaC.innerText = "Tarefas criadas"
        tarefaC.classList.add("TarefasC")
        caos.appendChild(tarefaC)

        const quantidade1 = document.createElement("p")
        quantidade1.innerText = `${tarefas.length}`
        quantidade1.classList.add("quantidade1")

        const tarefaConc = document.createElement("span")
        tarefaConc.innerText = "Concluidas"
        tarefaConc.classList.add("TarefasConc")
        caos2.appendChild(tarefaConc)
        caos.appendChild(quantidade1)

        const quantidade2 = document.createElement("p")
        quantidade2.innerText = numeroDeTarefasConcluidas()
        quantidade2.classList.add("quantidade2")
        caos2.appendChild(quantidade2)


    }
}

refreshTarefas();

form.onsubmit = (event) => {
    event.preventDefault()
    const newExpense = {
        id: new Date().getTime(),
        expense: expenseInput.value,
        concluida: false,
    }

    tarefas.push(newExpense);
    expenseInput.value = "";

    refreshTarefas();
}

function concluirTarefa(tarefaId) {
    const indexTarefa = tarefas.findIndex((tarefa) => tarefa.id === tarefaId)
    tarefas[indexTarefa] = {
        ...tarefas[indexTarefa],
        concluida: !tarefas[indexTarefa].concluida,
    }
    refreshTarefas()
}

function removerTarefa(param) {
    const newTarefas = tarefas.filter((tarefa) => tarefa.id !== param)
    tarefas = newTarefas


    refreshTarefas()
}

function numeroDeTarefasConcluidas() {
    const newConcluidas = tarefas.filter((tarefa) => tarefa.concluida === true)

    return newConcluidas.length
}
