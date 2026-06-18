const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['parent', 'agency', 'ngo', 'sponsor', 'admin'], 
    required: true 
  },
  isVerified: { type: Boolean, default: false },
  // Role specific profiles can be embedded or linked, but for simplicity we keep them together or in extended collections
  profileDetails: { type: mongoose.Schema.Types.Mixed }, 
  readinessScore: { type: Number, default: 0 },
  fraudReports: { type: Number, default: 0 },
  isFlagged: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
