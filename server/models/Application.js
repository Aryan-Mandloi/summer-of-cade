const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  childId: { type: mongoose.Schema.Types.ObjectId, ref: 'Child', required: true },
  agencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { 
    type: String, 
    enum: ['submitted', 'under_review', 'approved', 'rejected'], 
    default: 'submitted' 
  },
  aiCompletenessScore: { type: Number },
  missingDocuments: [{ type: String }],
  documents: [{
    name: String,
    url: String, // Mocked URL for hackathon
    verifiedByAI: Boolean
  }]
}, { timestamps: true });

module.exports = mongoose.model('Application', ApplicationSchema);
