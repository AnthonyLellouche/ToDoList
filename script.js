const RootComponent = {
    data() {
        return {
            tache: "",
            listAFaire: [],
            listEnCours: [],
            listTerminee: [],
        }
    },
  
    methods: {
        addTache(e) {
            this.tache = e.target.value
        },
        addTask() {
            this.listAFaire.push(this.tache);
            this.tache = "";

        },
        addEnCours(index) {
            this.listEnCours.push(this.listAFaire[index]),
                this.listAFaire.splice(index, 1)

        },
        addTerminee(index) {
            this.listTerminee.push(this.listEnCours[index]),
                this.listEnCours.splice(index, 1)
        },
        Terminee(index) {
            this.listTerminee.splice(index, 1)
        }

    }
}

Vue.createApp(RootComponent).mount("#root");
