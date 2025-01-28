const retornarData = {
    getDate() {
        const nomeDiaAtual = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(new Date())
        const temp = nomeDiaAtual.charAt(0).toUpperCase() + nomeDiaAtual.slice(1)
        if(temp.substring(0,6) == 'Domingo') {
            return 'Segunda'
        }
        return temp.substring(0,6)
    }
}

export default {retornarData}