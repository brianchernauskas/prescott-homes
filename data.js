// ---------------------------------------------------------------------------
// Everything the page knows about the four houses, gathered 2026-09-21.
//
// Listing facts come from each realtor.com listing (the MLS data behind it).
// Wildfire figures come from the USDA Forest Service "Wildfire Risk to
// Communities" rasters (2024 release), sampled on a 7x7 grid at 60 m spacing
// around each house, so one developed pixel can't make a house look safe.
// Nearest grocery / gas / restaurant come from OpenStreetMap, ranked by
// driving distance (OSRM), not straight-line distance.
//
// Deliberately absent: the Chandler start address. Only drive times from it
// are stored, never its location.
// ---------------------------------------------------------------------------

export const TRIP = {
  sat: '2026-09-26',
  sun: '2026-09-27',
  sunset: '6:25 PM',
};

export const PLACES = {
  hotel:   { name: 'SpringHill Suites Prescott', addr: '200 E Sheldon St, Prescott, AZ 86301', lat: 34.5460353, lon: -112.4666382 },
  whiskey: { name: 'Whiskey Row', addr: 'S Montezuma St, Prescott, AZ', lat: 34.5409451, lon: -112.4705907 },
};

// Drive legs [miles, minutes] from OSRM. "home" = Chandler start (location withheld).
export const LEGS = {
  home:     { hotel: [127.2, 155], quintero: [129.2, 152], lavalley: [129.1, 160], pyrite: [132.9, 170], idylwild: [128.7, 158] },
  hotel:    { home: [127.3, 157], whiskey: [0.7, 3], quintero: [8.9, 17], lavalley: [2.2, 7], pyrite: [6.2, 17], idylwild: [1.9, 5] },
  whiskey:  { hotel: [0.6, 3], quintero: [8.7, 17], lavalley: [1.8, 6], pyrite: [5.7, 16], idylwild: [1.4, 3] },
  quintero: { home: [129.4, 154], hotel: [8.9, 17], whiskey: [8.8, 18], lavalley: [9.8, 21], pyrite: [14.0, 31], idylwild: [8.7, 18] },
  lavalley: { home: [129.2, 162], hotel: [2.2, 7], whiskey: [1.8, 6], quintero: [9.8, 21], pyrite: [4.6, 12], idylwild: [2.4, 7] },
  pyrite:   { home: [133.1, 171], hotel: [6.2, 17], whiskey: [5.7, 15], quintero: [14.0, 31], lavalley: [4.6, 12], idylwild: [6.6, 17] },
  idylwild: { home: [128.9, 159], hotel: [1.9, 5], whiskey: [1.6, 4], quintero: [8.8, 18], lavalley: [2.4, 7], pyrite: [6.6, 17] },
};

export const RECOMMENDED = ['quintero', 'pyrite', 'lavalley', 'idylwild'];

const px = (base, ids) => ids.map(id => `https://${base}${id}od-w1024_h768.jpg`);

export const HOUSES = [
  {
    id: 'quintero',
    short: 'Quintero',
    addr: '1239 Quintero Rd',
    city: 'Prescott, AZ 86305',
    lat: 34.642524, lon: -112.444392,
    url: 'https://www.realtor.com/realestateandhomes-detail/1239-Quintero-Rd_Prescott_AZ_86305_M95321-96965',
    price: 411665,
    beds: 3, baths: 2, sqft: 1214,
    lotAcres: null, lotNote: 'Not listed — ask the builder',
    yearBuilt: 2026, yearNote: 'New build, under construction',
    listed: '2026-09-17',
    status: 'New construction',
    hoa: 'Not listed — ask',
    tax: 'New build — not yet assessed',
    water: 'Not listed', sewer: 'Not listed',
    heat: 'Gas appliances', cool: 'Not listed',
    garage: '1-car',
    elevation: 5094,
    area: 'South Ranch (Southern Collection) · north Prescott off Hwy 89',
    builder: 'Davidson Homes',
    photoCount: 20,
    photos: px('nh.rdcpix.com/5371cfed2c6fc7b7a77bdcd6caf77dcfl-', ['f1265367708', 'f3882687992', 'f1610265069', 'f3528620220', 'f3509225426', 'f512358508', 'f3310906565', 'f249287556']),
    photoWarning: 'Photos are of the builder’s model home — this house is still under construction.',
    summary: 'A new single-level build in a Davidson Homes community: open plan, quartz counters, stainless gas appliances and a covered patio. The only 3-bedroom of the four and the only one with a warranty, but also the farthest from downtown.',
    good: ['Only 3-bed of the four', 'Single level, nothing to fix', 'Builder advertising a reduced-rate promotion'],
    ask: [
      'Completion date, and whether you can walk the actual house or only the model',
      'Lot size, HOA dues and what the HOA covers',
      'What the rate promotion is worth vs. a price cut',
      'Which finishes in the model are upgrades',
      'Airport noise — Prescott Regional Airport is about 2 miles northeast',
    ],
    fire: {
      rating: 'Moderate', tone: 'mod',
      mix: { low: 49, moderate: 47, high: 4, veryHigh: 0, nonburn: 0 },
      rps: 17, flame: 'Short flames (grass)',
      text: 'Open grassland and chaparral. Grass fires here move fast but burn low and short. Upkeep across a new subdivision tends to be uniform, which helps.',
    },
    near: {
      grocery:    { name: 'Fry’s Food and Drug', where: 'Willow Creek Rd', mi: 3.6, min: 8, lat: 34.6005859, lon: -112.4584725 },
      gas:        { name: 'Circle K', where: 'Hwy 89', mi: 2.2, min: 5, lat: 34.6440986, lon: -112.432763 },
      restaurant: { name: 'Suzie’s Skyway Restaurant', where: 'at the airport', mi: 2.9, min: 7, lat: 34.6497888, lon: -112.427214 },
    },
  },
  {
    id: 'lavalley',
    short: 'Lavalley',
    addr: '918 S Lavalley Dr',
    city: 'Prescott, AZ 86303',
    lat: 34.52461, lon: -112.484579,
    url: 'https://www.realtor.com/realestateandhomes-detail/M2299853568',
    price: 375000,
    beds: 2, baths: 2, sqft: 952,
    lotAcres: 0.34,
    yearBuilt: 1961,
    listed: '2026-07-09',
    status: 'Price reduced',
    hoa: '$645/yr (≈$54/mo) · Mountain Club',
    tax: '$1,254 (2025)',
    water: 'Public', sewer: 'Septic',
    heat: 'Forced-air gas + fireplace insert', cool: 'Ceiling fans only',
    garage: 'Not listed',
    elevation: 5482,
    area: 'Mountain Club · off White Spar Rd, south of downtown',
    photoCount: 32,
    photos: px('ap.rdcpix.com/042f04b5ff0b669f391021e569ef0f23l-', ['m1931439041', 'm2815698630', 'm2981633012', 'm3073576367', 'm192964371', 'm1500915168', 'm1017036754', 'm696726674']),
    summary: 'A 1961 split-level cabin at the end of a cul-de-sac in the Mountain Club neighborhood: beamed wood ceilings, a fireplace, a deck facing the trees and a partly finished lower level for an office or workshop. About 6 minutes to Whiskey Row.',
    good: ['On the market since July with a price cut, so there’s likely room to negotiate', '6 min to downtown, 3 min to Safeway', 'Low HOA, low taxes'],
    ask: [
      'Septic: age, last pump, inspection records',
      'No A/C listed — how warm does it get in July?',
      'Split level with stairs. Is the lower level heated living space?',
      'Parking and garage aren’t listed',
      'Roof age (composition + metal)',
    ],
    fire: {
      rating: 'Low–Moderate', tone: 'low',
      mix: { low: 61, moderate: 16, high: 0, veryHigh: 0, nonburn: 22 },
      rps: 2, flame: 'Mostly low',
      text: 'The federal model rates this area mostly low hazard (juniper and piñon, gentle slope). But the listing talks about “towering trees”, and the model’s vegetation data dates from 2020, so check the trees around the house yourself.',
    },
    near: {
      grocery:    { name: 'Safeway', where: 'White Spar Rd', mi: 0.8, min: 3, lat: 34.531106, lon: -112.4748115 },
      gas:        { name: 'Shell', where: 'Grove Ave', mi: 1.8, min: 6, lat: 34.5462235, lon: -112.4755088 },
      restaurant: { name: 'Badger’s Den', where: 'White Spar Rd', mi: 0.7, min: 2, lat: 34.5210348, lon: -112.4790699 },
    },
  },
  {
    id: 'pyrite',
    short: 'Pyrite',
    addr: '1265 W Pyrite Rd',
    city: 'Prescott, AZ 86303',
    lat: 34.471425, lon: -112.48658,
    url: 'https://www.realtor.com/realestateandhomes-detail/M2554333242',
    price: 400000,
    beds: 2, baths: 2, sqft: 1056,
    lotAcres: 0.18,
    yearBuilt: 1987,
    listed: '2026-09-15',
    status: 'New listing',
    hoa: 'None',
    tax: '$1,567',
    water: 'Shared private well', sewer: 'Septic',
    heat: 'Pellet stove, mini-split, baseboard', cool: 'Ductless mini-split',
    garage: 'Not listed',
    elevation: 5721,
    area: 'Pines south of town · borders Prescott National Forest',
    photoCount: 22,
    photos: px('ap.rdcpix.com/fb6a2a40854336f81851e059b913c56bl-', ['m2284465666', 'm2589784421', 'm3121275729', 'm3245771556', 'm164415250', 'm3073824380', 'm4145215134', 'm502119052']),
    summary: 'A two-story log cabin in the ponderosa pines, right on the edge of Prescott National Forest: 22-ft beamed ceilings, granite kitchen, big covered patio, metal roof. It’s sold furnished and has been running as an Airbnb.',
    good: ['Most “mountain” setting of the four, with trails from the door', 'Sold furnished with Airbnb history, so it could earn rent', 'No HOA, metal roof'],
    ask: [
      'Shared well: the written well agreement, recent water test, flow rate, who pays for repairs',
      'Septic: age and inspection',
      'Get a homeowners-insurance quote BEFORE making an offer (see fire risk)',
      'Airbnb booking history and whether bookings run past closing',
      'Winter road access and snow plowing (highest of the four at 5,700 ft)',
      'Heat is mainly a pellet stove. What does a winter cost?',
    ],
    fire: {
      rating: 'High', tone: 'high',
      mix: { low: 0, moderate: 18, high: 35, veryHigh: 33, nonburn: 14 },
      rps: 64, flame: 'Tall flames possible in timber',
      text: 'Of the four, this one stands out. Two-thirds of the surrounding area is rated High or Very High hazard, and it backs onto national forest. The modeled risk to a home here is roughly 4× Quintero and 30× the two downtown houses. It isn’t a dealbreaker, but check insurance availability and cost first, and ask about defensible-space clearing.',
    },
    near: {
      grocery:    { name: 'Safeway', where: 'White Spar Rd', mi: 4.8, min: 13, lat: 34.531106, lon: -112.4748115 },
      gas:        { name: 'Shell', where: 'Grove Ave', mi: 6.0, min: 16, lat: 34.5462235, lon: -112.4755088 },
      restaurant: { name: 'Badger’s Den', where: 'White Spar Rd', mi: 3.9, min: 10, lat: 34.5210348, lon: -112.4790699 },
    },
  },
  {
    id: 'idylwild',
    short: 'Idylwild',
    addr: '1524 Idylwild Rd',
    city: 'Prescott, AZ 86305',
    lat: 34.54428, lon: -112.493601,
    url: 'https://www.realtor.com/realestateandhomes-detail/M2975214796',
    price: 379900,
    beds: 1, baths: 1, sqft: 669,
    lotAcres: 1.0,
    yearBuilt: 1929,
    listed: '2026-08-25',
    status: 'Price reduced',
    hoa: 'None',
    tax: '$635',
    water: 'Public', sewer: 'Public sewer',
    heat: 'Not listed', cool: 'Ductless',
    garage: 'Not listed',
    elevation: 5484,
    area: 'West of downtown, off Gurley St',
    photoCount: 23,
    photos: px('ap.rdcpix.com/e41445f8639054d0d628093461527236l-', ['m2583064330', 'm3454896265', 'm29515000', 'm4110458168', 'm1633846937', 'm2558031086', 'm3691503521', 'm1886939678']),
    summary: 'A newly renovated 1929 cottage on a full acre a few minutes from Courthouse Square. The house is the smallest by far. Most of what you’re paying for is a downtown acre with mature trees.',
    good: ['Full acre, 4 min to Whiskey Row', 'City water and sewer, no HOA, lowest taxes', 'Freshly renovated'],
    ask: [
      '669 sq ft, 1 bed: does it actually work for you?',
      'Room to build a guest house or add on? (City of Prescott zoning)',
      'Were permits pulled for the renovation?',
      'Heating isn’t listed',
      'Age of the foundation, wiring and plumbing (1929)',
    ],
    fire: {
      rating: 'Low', tone: 'low',
      mix: { low: 0, moderate: 12, high: 2, veryHigh: 0, nonburn: 86 },
      rps: 1, flame: 'Minimal',
      text: 'Most of the surroundings are developed, so the model rates it low. A full acre of mature trees is still worth checking for clearance around the house.',
    },
    near: {
      grocery:    { name: 'Fry’s Food and Drug', where: 'Fair St', mi: 1.3, min: 4, lat: 34.5543573, lon: -112.482411 },
      gas:        { name: 'Shell', where: 'Grove Ave', mi: 1.3, min: 3, lat: 34.5462235, lon: -112.4755088 },
      restaurant: { name: 'Casa Sanchez', where: 'W Gurley St', mi: 0.2, min: 1, lat: 34.5435863, lon: -112.4925022 },
    },
  },
];

export const SCORE_CATS = [
  ['kitchen', 'Kitchen'],
  ['layout', 'Layout / flow'],
  ['condition', 'Condition'],
  ['outdoor', 'Yard & lot'],
  ['setting', 'Street & neighbors'],
  ['location', 'Location'],
  ['value', 'Value for price'],
  ['gut', 'Gut feel'],
];
