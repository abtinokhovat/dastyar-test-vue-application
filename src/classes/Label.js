import axios from "axios";

const url = "http://localhost:5119/api";

export class Label {
  constructor(id, name, order, color, colorName) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.order = order;
    this.colorName = colorName;
  }

  async getLabels() {
    try {
      //get labels from server
      const resp = await axios.get(`${url}/Labels`);
      //sorting labels by the order
      return resp.data.response.sort((a, b) => {
        if (a.order < b.order) return -1;
        if (a.order > b.order) return 1;
        return 0;
      });
    } catch (err) {
      console.error(err);
    }
  }
}
