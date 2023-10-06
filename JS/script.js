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

      axios
          .get(this.apiUrl)
          .then ((risposta) => {
            console.log(risposta.data)

          })

    }
  },


}).mount('app')
