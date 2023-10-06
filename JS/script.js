// 1. testo il link con l'estensione THUNDER CLIENT


const { createApp } = Vue;

createApp({
  data(){
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      listaMail: [],
      mail: '',
    }
  },

  methods: {
    getApi(){

      for (let i = 0; i < 10; i++) {

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
