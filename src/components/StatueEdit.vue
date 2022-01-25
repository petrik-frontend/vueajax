<template>
    <div>
        <h1>Statue {{ $route.params.id }}</h1>    
        <table>
            <tr>
                <td>Person:</td>
                <td><input type="text" v-model="statue.person" /></td>
            </tr>
            <tr>
                <td>Height:</td>
                <td><input type="number" v-model="statue.height" /></td>
            </tr>
            <tr>
                <td>Price:</td>
                <td><input type="number" v-model="statue.price" /></td>
            </tr>
        </table>
        <button @click="saveData">Save</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      statue: {
        id: null,
        person: '',
        height: '',
        price: ''
      },
    }
  },
  methods: {
    async loadData() {
      const id = this.$route.params.id
      let Response = await fetch(`http://127.0.0.1:8000/api/statues/${id}`)
      let data = await Response.json()
      this.statue = {...data};
    },
    async saveData() {
     await fetch(`http://127.0.0.1:8000/api/statues/${this.statue.id}`, {
       method: 'PATCH',
       headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       body: JSON.stringify(this.statue) 
     })
     //this.$router.push('/statues')
     this.$router.go(-1)
    }
  },
  mounted() {
      this.loadData()
  }
}
</script>

<style>

</style>