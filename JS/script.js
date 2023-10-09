// 1. testo il link con l'estensione THUNDER CLIENT


const { createApp } = Vue;

createApp({
  data(){
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      listaMail: [],
      mail: '',
      limit: 10
    }
  },

  methods: {
    getApi(){

      // applico un ciclo for per ciclare fino a 10 mails
      for (let i = 0; i < this.limit; i++) {

        axios
            .get(this.apiUrl)
            .then ((risposta) => {
              console.log(risposta.data)
              // aggiungo la mail alla lista mail
              this.listaMail.push(risposta.data.response)
            })

            .catch((errore) => {
              // per controllare eventuali errori li stampo in console
              console.log(errore)
            })
      }
    }
  },

  mounted() {
    this.getApi()
  }


}).mount("#app")
