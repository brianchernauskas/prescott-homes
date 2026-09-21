# Prescott Home Tour

A phone-first planner for a Sat Sep 26 – Sun Sep 27, 2026 house-hunting weekend in Prescott, AZ:
four realtor.com listings, a map, a suggested visit order, and shared notes, photos and 1–5 scores.

Live: https://brianchernauskas.github.io/prescott-homes/

## Files

| File | What it holds |
| --- | --- |
| `index.html` | Page shell |
| `style.css` | All styling, light + dark |
| `data.js` | The four houses, drive-time matrix, wildfire figures, nearest places |
| `store.js` | Firestore adapter with a this-device-only fallback |
| `app.js` | Plan builder, map, house pages, notes/photos/scores, compare table |

No build step. Preview locally with `npx serve prescott-homes --listen 3019`.

## Where the data came from (pulled 2026-09-21)

- **Listings:** realtor.com listing pages (MLS data). Photos are hotlinked from realtor.com's CDN, not copied.
- **Wildfire:** USDA Forest Service *Wildfire Risk to Communities* 2024 rasters, via
  `imagery.geoplatform.gov/iipp/rest/services/Fire_Aviation`. Hazard class (WHP) and risk to potential
  structures were sampled on a 7×7 grid at 60 m spacing around each house, because a single point
  often lands on a "developed / non-burnable" pixel that makes a house look safer than its surroundings.
- **Nearest grocery / gas / restaurant:** OpenStreetMap (Overpass), ranked by driving distance from OSRM.
- **Drive times:** OSRM public server; the plan pads them 10%.
- **Elevation:** USGS EPQS.

The Chandler start address is never stored. `data.js` has drive times from it, not its location.

## Turning on shared notes

The page uses the existing `bourbonffldraft` Firebase project (the pick'em site's), in its own
`prescott` collection. That collection needs a rule. Until it has one, the page saves to the
device only and shows a banner saying so.

Firebase console → bourbonffldraft → Firestore → Rules. Add the `prescott` block next to the
existing ones and publish:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /entries/{entry} {
      allow read: if true;
      allow write: if true;
    }
    match /config/settings {
      allow read: if true;
      allow write: if true;
    }
    match /prescott/{document=**} {
      allow read, write: if true;
    }
  }
}
```

As with the pick'em, this is open to anyone who has the URL. Fine for a weekend's notes, but
nothing sensitive (offer amounts, finances) belongs in it.

Layout:

```
prescott/plan                      visit order, day per house, booked times, settings
prescott/{house}/notes/{id}        { by, text, ts }
prescott/{house}/photos/{id}       { by, caption, data: JPEG data URL, ts }
prescott/{house}/scores/{person}   { by, scores: { kitchen: 4, ... }, ts }
```

Photos are shrunk on the phone to about 1400 px, JPEG ~0.7, and kept under ~850 KB so each one fits
in a single Firestore document (1 MiB cap). There's no Firebase Storage, so no paid plan is needed.

## Deploy

GitHub Pages from `main`, root. Bump the `?v=` stamps in `index.html` and the imports in
`app.js` whenever JS or CSS changes. Pages caches for 10 minutes, and a mixed old/new module set
renders a blank page.
