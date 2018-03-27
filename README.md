# Fat Lama Frontend Challenge

## Challenge:
To keep the Fat Lama business moving, our Operations team reviews transactions, verifies user identities and deals with many other user support issues.

In this challenge, we would like you to build a feed for our ops team to monitor the most recent transactions and view information about that transaction and that user, and approve transactions if it is all correct. 

### Set up
Start by duplicating this repo (please do not fork it, see [instructions](https://help.github.com/articles/duplicating-a-repository/)). Bitbucket offers free private repos if you don't want to use a public one.

You'll find a pre-built binary for Linux, OSX and Windows in the repo which provides a sandbox backend environment for you to build your frontend against. We promise that these binaries do nothing underhanded!

## Requirements:
**Feed view**: where ops team can see all most recent transactions, ordered either by most recent or by status.

**Transaction view**: where ops team can see information about a transaction, approve the transaction.

## Endpoints:
- `GET /transaction/:id`
- `GET /transactions/:page`
- `PUT /transaction/id`
- `GET /user/:id`

Documentation for the API and instructions for the challenge are deliberately sparse as we want to see how you make decisions based on incomplete data.

## Criteria/Guidance
- The challenge is about your grasp of user experience as well as about your coding ability
- Use of frameworks and libraries is up to you. We suggest you use a boilerplate such as [create-react-app](https://github.com/facebook/create-react-app) to get yourself up and running quickly
- Try to implement appropriate [separation of concerns](https://effectivesoftwaredesign.com/2012/02/05/separation-of-concerns/) & modular code
- Think hard about naming of functions and variables
- Code style & file structure is up to you, but make sure it is consistent and legible