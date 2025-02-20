# Child Companion App

## Overview

The Child Companion App is a web application designed to help parents and caregivers monitor a child's growth and development over time.

## Installation

1. Install dependencies:
   ```sh
   pnpm i
   ```
2. Run the development server:
   ```sh
   pnpm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## To do

### High Priority:

Coding:

- [ ] Build API to get data from server and move mocks
- [ ] Add database and move mocks there
- [ ] Connect to Open AI APIs
- [ ] Build mechanism to save data in database and invalidate cache after a month

Infra:

- [ ] Add terraform
- [ ] Scope services and deploy to AWS
- [ ] Move deploy pipeline from Vercel

Mobile:

- [ ] Deploy to Mobile stores with an app wrapper

### Medium Priority

- [ ] Add loading state components
- [ ] Add unit tests & functional tests
- [ ] Improve layout

### Low priority

- [ ] Add an about page and a donate button
- [ ] Move server to a microservice in Python
- [ ] Scope and build user menu

---

Start tracking your child's development today and ensure they reach their full potential!
