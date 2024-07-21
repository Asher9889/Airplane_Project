class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async getAll() {
    const response = await this.model.findAll();
    return response;
  }

  async get(id) {
    const response = await this.model.findByPk(id);
    return response;
  }

  async update(data, id) {
    // yaha kuch update krne ki need hai
    const response = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    return response;
  }

  async destroy(data) {
    const response = await this.model.destroy({
      where: {
        id: data,
      },
    });
    return response;
  }
}

module.exports = CrudRepository;
