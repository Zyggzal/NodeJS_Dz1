const fs = require('fs');
const path = require('path');

class Student {
    constructor(name, age, groupId) {
        this.name = name;
        this.age = age;
        this.groupId = groupId;
        this.id = 0;
    }
    toJSON() {
        return {
          name: this.name,
          age: this.age,
          groupId: this.groupId,
          id: this.id
        }
    }

    static getAll() { 
        return new Promise((resolve, reject) => {
          fs.readFile(
            path.join(__dirname, '..', 'data', 'students.json'),
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
        const s = await Student.getAll()
        return s.find(c => c.id === id)
      }
}

module.exports = Student