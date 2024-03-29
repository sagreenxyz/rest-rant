const db = require('../models')

async function seed() {
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        rating: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })
    place.comments.push(comment._id)
    await place.save()
    process.exit()
}

seed()