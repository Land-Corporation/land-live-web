# Land Live+ MVP (Web)

👋 Welcome to Land Corporation's first MVP!

This is a **Minimal Viable Product (MVP)** that consists of `reservation system` and `KakaoTalk notification` features along with visual guide line to help users understand the work flow. Main purpose of this MVP is to **_test whether there exists market needs for live-streaming tour for Real Estate_** while investing as minimum development as possible.

> Note that this is a MVP which does not contain any **real-time streaming** feature. Actual real-time streaming feature will be developed on next cycle; prototyping.

<p><br></p>

## Background

Developing real-time streaming application is expensive in terms of money and time. Since we are a team who seeks to find valuable **product market fit** with limited resource, had to come up with some sort of solution that discovers market needs with minimum cost.

### What We Have Been Doing

1. **Application for Landlords**

Our original business idea was automation of real-estate management driven by `application for Landlords`. We anticipated to digitize real-esate information that are valuable but hard to collect in conventional ways; landlords, lesseses, real-esate information, rental fee etc. By making attractive yet easy application for landlords, induce them to invite their lesseses into app and thus make platformal changes will pave ways for total digitization of real-estate in long term. 
This turned out to be obsolete hypothesis since landlords do not even need application since they can just make a simple call to realtors to deal with manageial tasks.

> We decided to halt this system due to lack of customer needs for the application. No big pain point.

Business Plan for this idea is [here](https://drive.google.com/file/d/19k1aGcMUNNeWM3QqRBnVg4QTYtYD0Tll/view?usp=sharing)

2. **Real Estate Open-market Platform**

During the course of researching, interviewing many real-estate personas, we figured out that there is inefficiency and discrepencies in real-estate industry, especially transaction market. We noticed that both customers who look for real-estate and realtors are all suffering from the current system. Unlike other consumer goods where customers can easily access to the product, get the lowest price and get delivered to their home with one-click through digital transformation, we thought real-esate can be topped on the digitized open-market system, providing trust, efficient transaction and convenience. But we laceked in the property of real-esate industry, that real-estate is strictly interwined with regualtion, unique property that cannot be moved, transaction price being super high while frequency being too low.

> We decided to halt this system due to limitations on business acumen and development complexity

Business Plan for this idea is [here](https://drive.google.com/file/d/18lSov6OIRX-sUv9OnRPAiqIV7Ld2wdir/view?usp=sharing)


### Lessons learned

❗️ After months of struggling - meeting with many realtors, landlords and lessees - we strongly felt that **in order to make something innovative in real estate industry we need to meet followings**

1. **Bypass Real Estate Regulation**
2. **No transaction or brokerage**

Since real estate is an asset that is unique, not movable and so expensive, it is really hard to get it topped with technology. Even we somehow does it, it is also very hard to make money about of it.

Consider `Zigbang` the biggest real-estate application in Korea where it needs to struggle every-time the brokerage regulation changes. It does not even generate enough profit despite it got a huge amount of investment.

### What we decided: "Live Tour Solution for Real Estate"

✅ We think **_doing leg work_** for searching real-estate **_(aka 발품팔기)_** is the only step left in customer value chain of real-estate that is not yet innovated by IT technology.

> That said, we still need to call realtors, book time for touring. We still need to spend many days to search for the perfect rooms and house for us by contacting someone.

**Thus we decided to go with Real Estate Live Tour solution for our MVP.**

Since this is two-sided market where both realtors and potential real-estate customers should all behave in this platform actively, it is crucial to have them flowed in.

But since real-estate brokerage application like `Zigbang` and `Dabang` already have a lot of active users. Thus if we can make realtors to upload our Live Tour reservation link to their pages and items in `Zigbang` or `Dabang`, users who see those linke will be tempted to click and book. We wanted to measure the turnover rate for booking, actual live tour watchers etc to validate the market fit and needs.

### MVP product roadmap

- MVP only requires sales operation for realtors
- Partnered realtors should upload our unique reservation link on to their `Zigbang`
- Among those users who pass by the link will get interested and book for live tour.
- We will conduct real live tour for each real-estate via using Youtube Live.
- Gather up feedbacks, KPIs and decide whether there is enough market needs!

<p><br></p>

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install land-live-web

```bash
yarn install
```

<p><br></p>

## Usage

```bash
yarn run start
```

And open `http://localhost:3000/`

<p><br></p>

## Look & Feel

To see how it looks, please visit 👉 **[landcorp.io](https://landcorp.io)**

<p align="center">
  <img src="https://github.com/Land-Corporation/land-live-web/blob/devel/photo/landing_page.png" width="100%" title="hover text">
</p>

<p><br></p>

## Guide

<p align="center">
  <img src="https://github.com/Land-Corporation/land-live-web/blob/devel/photo/guide1.png" width="100%" title="hover text">
</p>

<p align="center">
  <img src="https://github.com/Land-Corporation/land-live-web/blob/devel/photo/guide2.png" width="100%" title="hover text">
</p>

<p align="center">
  <img src="https://github.com/Land-Corporation/land-live-web/blob/devel/photo/guide3.png" width="100%" title="hover text">
</p>

<p><br></p>

## Contributing

- All rights reserved to Land Corporation, Inc.
- Main developer: [@JinJis](https://github.com/JinJis)

<p><br></p>

## License

[MIT](https://choosealicense.com/licenses/mit/)
