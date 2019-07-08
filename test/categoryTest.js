const Category = require('../controllers/Category');

describe('category', () => {
    it('should get all categories', (done) => {
        Category.getAll((categories) => {
            if (categories.length <= 0) {
                done("Aucune catégorie récupéré")
            } else {
                done();
            }
        })
    });
})
