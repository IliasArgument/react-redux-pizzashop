export default class RestoService {
  url = "http://localhost:3000";

  async getResources(aps) {
    const response = await fetch(`${this.url}${aps}`);
    if (!response.ok) {
      throw new Error(
        `Could not fetch ${aps}`
         + `, received ${response.status}`
      );
    }
    const result = await response.json();
    return result;
  }
  async getMenuItem() {
    return await this.getResources("/menu/");
  }

  async setOrder(order) {
    const number = await this.getOrderNumber();
    const newOrder = {
      id: number,
      order: order,
    };

    const response = await fetch(`${this.url}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newOrder),
    });
    if (!response.ok) {
      throw new Error("json error");
    }
  }

  async getOrderNumber() {
    const res = await this.getResources("/orders/");
    const orderNumber = res.length + 1;

    return orderNumber;
  }
}
