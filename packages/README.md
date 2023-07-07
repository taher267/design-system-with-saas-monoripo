### Design system with saas & monoripo

## checklist for system design

--Organized: Fixed Code Structure
--No Specificity Issue
--Atomic Design Principles
-- Easy to Understand (Comments, Variables)
--Fully customizable / Themeable
-- Reusable Across Teams / Project

## build scss

1. go to scss dir and yarn build

# monoripo

### 1. mkdir pacakges (for auto configure)

### 2. all file should be inside of packages

### 3. package.json name convension @companyname/something like for this porject @dswsmr/core, @dswsmr/scss etc.

### 4. yarn init -y

### 5. yarn add -D lerna

### 6. inside of lerna add `"npmClient": "yarn","stream": true`

### 7. main package.json add `"workspaces": {"packages": "packages/*"}` also can use "private":true

### 8. nohoist if any package not allow to add parent node_modules "workspaces": {"packages": [ "packages/*"],"nohoist": [ "**/sass"]}

### 9.
