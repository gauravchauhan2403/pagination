# React + Vite

React boiler plate for pagination feature
In this templaet I have tried implementing clean and maintainable architecture with modular approach. The schema includes mainly three steps UI layer --> Logic layer --> Data layer :

Presentation Layer → UI Components (Render UI, handle interactions, dispatch redux actions)
Application Layer → Redux + Business Flow (Manage Redux state, Async API calls)
Domain Layer → Pure Business Logic ( Paginations calculations, Logic and rules)
Data Layer → API Repository ( API calls, response normalization to json, network error abstrcation)

## Folder Structure

src/
├── presentation/
│ ├── components/
│ │ ├── PaginationPage.js
│ │ ├── ProductList.js
│ ├── PaginationControls.js
│ └── SkeletonLoader.js
│
├── application/
│ ├── paginationSlice.js
│ ├── paginationThunks.js
│ └── selectors.js
│
├── domain/
│ └── PaginationService.js
│
├── data/
│ └── ProductRepository.js
│
├── app/
│ └── store.js
│
├── assets/
│ └── image
|
└── utility/
└── urlUtils.js

## Installation

1. Clone Repository:
   `git clone <repo-url>`
   `cd project-name`

2. Install Dependencies:
   `npm install`

3. Run Project:
   `npm start`
