<template>
  <div id="listItemContainer">
    <div id="listItem" v-for="artist in artists" :key="artist.name" @click="deleteListItemModal">
      {{ artist }}
    </div>
    <div v-if="this.deleteItemModal">
      <Delete_List_Item_Modal
        @closeDeleteModal="closeDeleteListItemModal"
        @deleteListItem="deleteListItemSend"
        :selectedArtist="this.deleteArtistValue"
      />
    </div>
  </div>
</template>

<script>
import Delete_List_Item_Modal from './Delete_List_Item_Modal.vue';

export default {
  name: "Fav_List",
  props: ["artists"],
      components: {
        Delete_List_Item_Modal
    },
  data() {
    return {
      deleteItemModal: false,
      deleteArtistValue: ''
    }
  },
  methods: {
    deleteListItemModal(e) {
      this.deleteArtistValue = e.target.innerText
      this.deleteItemModal = true;
    },
    closeDeleteListItemModal() {
      this.deleteItemModal = false;
    },
    deleteListItemSend() {
      this.$emit("deleteUserListItem", this.deleteArtistValue)
    }
  }
};
</script>

<style scoped>
  #listItemContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  #listItem {
    color: greenyellow;
    background-color: green;
    height: 100%;
    margin: 5px;
    flex-wrap: nowrap;
  }
</style>