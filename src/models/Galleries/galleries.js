import axios from "axios";

export const Galleries = {
    async getGalleries() {
        //axios.get
        let res = await axios.get('http://localhost:1337/galleries')
        return res.data
    },
}
