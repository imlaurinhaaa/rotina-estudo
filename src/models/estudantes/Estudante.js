class Estudante {
    constructor(nome, materia, progresso, objetivos, dificuldade) {
        this.id = this.generateId()
        this.nome = nome
        this.materia = materia
        this.progresso = progresso
        this.objetivos = objetivos
        this.dificuldade = dificuldade
    }

    generateId() {
        return Math.floor(Math.random() * 999) + 1
    }
}

export default User