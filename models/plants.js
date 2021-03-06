import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

// Comment Schema
import { commentSchema } from './comments.js'

const plantSchema = new mongoose.Schema({
  seed: { type: Number, required: false },
  name: { type: String, required: true, unique: true },
  sciName: { type: String, required: true, unique: true },
  imageTrans: { type: String, required: false },
  imageHome: { type: String, required: false },
  imageWild: { type: String, required: false },
  origin: { type: String, required: true },
  wateringLevel: { type: String, required: true },
  waterCategory: { type: Number, required: false },
  wateringDetail: { type: String, required: false },
  tempRange: { type: String, required: true },
  tempCategory: { type: String, required: false },
  tempDetail: { type: String, required: false },
  lightDetail: { type: String, required: false },
  lightType: { type: String, required: true },
  sunlightFilter: { type: Number, required: false },
  brightType: { type: String, required: true },
  brightnessFilter: { type: Number, required: false },
  fertilizer: { type: String, required: false },
  pruning: { type: String, required: false },
  problems: [
    [
      {
        problem: { type: String, required: false },
        solution: { type: String, required: false },
      }
    ],
    [
      {
        problem: { type: String, required: false },
        solution: { type: String, required: false },
      }
    ],
    [
      {
        problem: { type: String, required: false },
        solution: { type: String, required: false },
      }
    ]
  ],
  maxGrowth: { type: String, required: true },
  annualGrowth: { type: String, required: true },
  poisonous: { type: String, required: true },
  linkToBuy: { type: String, required: false },
  seededEaseRating: { type: Number, required: true },
  description: { type: String, required: true },
  priceRange: { type: String, required: true },
  categorisation: { type: String, required: false },
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  id: false,
  seededSays: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  comments: [commentSchema],
})

// Set up value for an average rating
plantSchema
  .virtual('avgRating')
  .get(function () {
    if (!this.comments.length) return 'Not rated yet'
    const sum = this.comments.reduce((acc, comment) => {
      return acc + comment.rating
    }, 0)
    return (sum / this.comments.length).toFixed(1)
  })

plantSchema.set('toJSON', {
  virtuals: true,
})


plantSchema.plugin(mongooseUniqueValidator)


export default mongoose.model('Plant', plantSchema)

