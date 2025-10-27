# Data Folder

This folder contains all sample/mock data used throughout the application. Each file exports data and helper functions for specific features.

## Files

### 📍 `tours.js`

**Purpose**: Tour packages data for the Tours page

- Tour listings with destinations, prices, durations
- Tour categories and filters

**Used in**:

- `src/pages/Tours.jsx`

---

### 🗺️ `guides.js`

**Purpose**: Local Buddy guide data

- Guide profiles (name, avatar, location, languages, specialties)
- Location and language filter options
- Detailed guide information for profile pages

**Exports**:

- `guides` - Array of guide listings
- `locations` - Location filter options
- `languages` - Language filter options
- `guideDetails` - Detailed info for each guide (includes services, reviews, skills)
- `getGuideById(guideId)` - Helper function to get guide detail

**Used in**:

- `src/pages/LocalBuddy.jsx` (listing page)
- `src/pages/GuideDetail.jsx` (detail page)

---

### 👥 `community.js`

**Purpose**: Community/social network data

- User reviews and posts
- Achievements and leaderboard
- Suggested users for friend connections
- Daily, weekly, and special quests/missions

**Exports**:

- `currentUser` - Current logged-in user info
- `suggestedUsers` - Users for "Mọi người" tab
- `reviews` - Community reviews/posts
- `achievements` - Unlockable achievements
- `leaderboard` - Top users ranking
- `dailyQuests` - Daily missions (3 quests with progress tracking)
- `weeklyQuests` - Weekly missions (3 quests with progress tracking)
- `specialQuests` - Special limited-time missions (2 quests with time limits)

**Used in**:

- `src/pages/Community.jsx`

---

### 👤 `users.js`

**Purpose**: User profile data

- Individual user profiles with stats
- User posts and activity

**Exports**:

- `users` - Object with userId as key
- `getUserById(userId)` - Helper function to get user by ID
- `defaultUser` - Fallback user for unknown IDs

**Used in**:

- `src/pages/UserProfile.jsx`

---

## Usage Pattern

All data files follow a consistent pattern:

```javascript
// 1. Export main data
export const data = [ ... ];

// 2. Export helper functions
export const getDataById = (id) => { ... };

// 3. Provide fallback/default data
export const defaultData = { ... };
```

## Adding New Data

To add new sample data:

1. Create a new file in `/src/data/` (e.g., `bookings.js`)
2. Export your data and helper functions
3. Import in the component that needs it:
   ```javascript
   import { bookings, getBookingById } from "../data/bookings";
   ```

## Future Development

In production, these data files will be replaced with API calls:

```javascript
// Development (current)
import { guides } from "../data/guides";

// Production (future)
const guides = await fetch("/api/guides").then((r) => r.json());
```

---

**Note**: All data here is mock/sample data for development purposes. Real data will come from backend APIs in production.
