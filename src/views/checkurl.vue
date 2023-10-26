<template>
    <div>
        <input type="file" @change="uploadFile" ref="fileInput" />

    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const storage = getStorage();

export default defineComponent({
    data() {
        return {

        }
    },

    methods: {
        async uploadFile() {
            const file = this.$refs.fileInput.files[0];

            const storageRef = ref(storage, file.name);

            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                console.log(snapshot.ref)

                getDownloadURL(ref(storage, file.name))
                .then((url) => {
                    console.log(url)
                })
                .catch((error) => {
                    console.log(error)
                });

            });
        }
    }
})

</script>