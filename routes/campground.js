const express = require('express');
const router = express.Router();
const Campground = require("../models/campground")


router.get("/", async (req, res) => {
    const campgrounds = await Campground.find({})
    res.render("campgrounds/index", {
        campgrounds
    });
})


//Add New Campground//
router.get("/new", (req, res) => {
    res.render("campgrounds/new");
})

//*LIST* Add URL For Campground By ID//
router.post('/', async (req, res) => {
    const campground = new Campground(req.body.campground);
    await campground.save()
    res.redirect(`/campgrounds/${campground._id}`)
})

//Specific URL Of Campground By ID//
router.get("/:id", async (req, res) => {
    const campgrounds = await Campground.findById(req.params.id)
    res.render("campgrounds/show", {
        campgrounds
    });
})

//Edit Campground By ID//
router.get("/:id/edit", async (req, res) => {
    const campgrounds = await Campground.findById(req.params.id)
    res.render("./campgrounds/edit", {
        campgrounds
    });
})

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground});
    res.redirect(`/campgrounds/${campground._id}`)
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
})

module.exports = router;