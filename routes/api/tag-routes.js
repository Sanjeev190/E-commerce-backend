const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// find all tags
  // be sure to include its associated Product data


router.get('/',async (req, res) => {
  try{
    const tagData=await Tag.findAll({
      include:[{model:Product}]
    })
    res.status(200).json(tagData);
  }catch(err){
    res.status(500).json(err)
  
  
}});
// find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id',async (req, res) => {
 try{
  const tagData=await Tag.findByPk(req.params.id,{
    include:[{model:Product}]
  })
  res.status(200).json(tagData);
 }catch(err){
  res.status(500).json(err)
 }

});
 // create a new tag
router.post('/',async (req, res) => {
  try{
    const tagData=await Tag.create({
      tag_name:req.body.tag_name
    })
    res.status(200).json(tagData);
  }catch(err){
    res.status(500).json(err)
 
}
});
 // update a tag's name by its `id` value
router.put('/:id', async(req, res) => {
  try{
    const tagData=await Tag.update({
      tag_name:req.body.tag_name
    },
    {
  where:{
    id:req.params.id
  }
  })
  res.status(200).json(tagData)
  }catch(err){
    res.json(500).json(err)
  }
});
// delete on tag by its `id` value
router.delete('/:id', async(req, res) => {
  try{
    const tagData=await Tag.destroy({
      where:{
        id:req.params.id
      }
    })
    res.status(200).json(tagData)
  }catch(err){
    res.json(500).json(err)
  }
});

module.exports = router;
