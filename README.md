####Task List

- 001 Set up scaffold for SPA

- 002 Add tooling and base library (React, webpack, babel, linting)

- 003 Install Redux

- 004 Set up presentational components (views) of the app
    a. Header
    b. Element
    c. Canvas
    d. PageTitle
    e. SavePageButton
    f. ExportButton
    
- 005 Set up Element Actions
    a. addElement action - to add/insert a new element instance to the state
    <sup>returns `{type: ADD_ELEMENT, elementInstance}`</sup>
    
- 006 Set up Page Actions
    a. addPage action - to add/insert a new page instance to the state
    <sup>returns `{type: ADD_PAGE, pageInstance}`</sup>
    b. getCurrentPage action - to get the currently active page
    <sup>returns `{type: GET_CURRENT_PAGE, currentPageId}`</sup>
    
- 007 Create Element Store with the following reducers:
    a. add new Element
    <sup>returns new state (array) of elements</sup>

- 008 Create Page Store with the following reducers:
    a. add new Page
    <sup>returns new state (array) of pages</sup>
    b. update page instance with newly added elements
    <sup>returns new state (array) of pages</sup>

- 009 Create application store
    a. combine Page and Element reducers using `combineReducers`
    
- 010 Create Toolbar Container
    a. `onClick` method that dispatches `ADD_ELEMENT` action
    
- 011 Create Element function that returns a json structure of the element type
    a. create input, textarea elements
    b. create radio button element
    c. create file input element
    d. create paragraph element

- 012 Create Page Container
    a. connect (with redux `connect`) the page container so that it passes store changes to it's children i.e Canvas
    
- 013 Add internal router with `react-router`

- 014 Add a Welcome component (welcome page as the index route)

- 015 Install `static-server` to serve pages in develop mode (backend for develop mode)
    a. Configure to serve all URIs with index.html

- 016 Refactor I - restructure views and containers; rename components
        
        <Provider>
            <RootLayout> /* contains header, footer, page-container */
                <Router>
                    <Welcome path='/'> /* welcome screen if new session */
                    <PageBuilder path='pages/:id'> /* if old session */
                <test>
                </Router>
            </RootLayout>
        </Provider>

- 017 Configure `react-router` to manage routes for components
    a. set index route as Welcome (for now)
    b. set `pages/:id` as PageBuilder

- 018 Session management
 
- 019 

