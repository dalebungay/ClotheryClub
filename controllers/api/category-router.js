const router = require('express').Router();
const { Product } = require('../../models');

// GET all categories for home
// router.get('/', async (req, res) => {
//     try {
//         const dbCategoryData = await Category.findAll({
//             include: [
//                 {
//                     model: Category,
//                     attributes: ['category_name'],
//                 },
//             ],
//         });

//         const category = dbCategoryData.map((category) =>
//             category.get({ plain: true })
//         );

//         res.render('home', {
//             category,
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// GET one category
router.get('/category/:name', async(req, res) => {
        const name = `${name}`;
        console.log(name);
        try {
          const dbProductData = await Product.findAll( {
            where: {
              category: name
          },
          attributes: [
            'id', 'name', 'type', 'category', 'price', 'photo_url'
          ]})
      
          const category = dbProductData.get({ plain: true });
          res.render('category', { category });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
});

module.exports = router;
