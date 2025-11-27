3️⃣ Part 3 – API Testing README.md**

```markdown
# Part 3 - API Testing (Reqres)

## Overview
This test validates endpoints of the Reqres public API: https://reqres.in/

### Endpoints Tested
1. GET `/api/users?page=2`
   - Validate status code 200
   - Validate response structure and content
2. POST `/api/users` (send name & job)
   - Validate status code 201
   - Validate response contains `id` and `createdAt`
3. DELETE `/api/users/2`
   - Validate status code 204

## Tools / Libraries
- Cypress v12+ (for API tests)
- Node.js v18+
- Reqres API

## Setup Requirements
1. Install Node.js
2. Install dependencies:
   ```bash
   npm install
How to Run
Open Cypress GUI:

bash
Copiar código
npm run cypress:open
Run all tests headless:

bash
Copiar código
npm run cypress:run
Screenshots are generated in cypress/screenshots/

Videos are generated in cypress/videos/
