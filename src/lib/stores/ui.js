import { writable } from "svelte/store";

const modalVisible = writable(false);
const showModal = () => modalVisible.set(true);
const closeModal = () => modalVisible.set(false);


export { modalVisible, showModal, closeModal };
