const fs = require('fs');
const path = require('path');

class Group {
    constructor(name, id) {
        this.name = name;
        this.id = 0;
    }
    toJSON() {
        return {
          name: this.name,
          id: this.id
        }
    }

    static getAll() {
        return new Promise((resolve, reject) => {
          fs.readFile(
            path.join(__dirname, '..', 'data', 'groups.json'),
            'utf-8',
            (err, content) => {
              if (err) {
                reject(err)
              } else {
                resolve(JSON.parse(content))
              }
            }
          )
        })
    }

    static async getById(id) {
        const g = await Group.getAll()
        return g.find(c => c.id === id)
      }
}

module.exports = Group