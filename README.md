# Test Driven Development with Vue and Jest

This project contains a basic app done through TDD. The app acceses github's API and stores the users to a list. 

[![Build Status](https://travis-ci.com/xavism/speakers-tdd.svg?branch=master)](https://travis-ci.com/xavism/speakers-tdd.svg?branch=master)


![Talk Banner](https://secure.meetupstatic.com/photos/event/2/1/8/3/highres_486968579.jpeg)

## Project setup :wrench:
```
npm install
```

### Compiles and hot-reloads for development :fire:
```
npm run serve
```

### Run your unit tests with watchAll flag :microscope:
```
npm run test:unit:watch
```

## Steps :turtle:

The importance of this talk is not the final result but the steps to achieve it. Each branch corresponds to a phase explained in the talk. The resume of the steps can be found bellow 

| branch :octocat: | part          | status      | explanation                                                                              |
|------------------|---------------|-------------|------------------------------------------------------------------------------------------|
| step-1           | SpeakersView  | :red_circle:         | Cleaning the cli project to achieve pure TDD and creating snapshot tests for SpeakerView |
| step-2           | SpeakersView  | :white_check_mark:       | Creating SpeakerView                                                                     |
| step-3           | SpeakersView  | :red_circle:         | Creating tests that ensures that the view renders the right                              |
| step-4           | SpeakersView  | :white_check_mark:       | Solving tests with new components                                                        |
| step-5           | SpeakersView  | :white_check_mark:       | Refactor                                                                                 |
| step-6           | SpeakersView  | :red_circle:         | Test to pass the speakers as props to the child components                               |
| step-7           | SpeakersView  | :white_check_mark:       | Pass speakers as props                                                                   |
| step-8           | SearchForm    | :red_circle::white_check_mark: | Tests and implementation to ensure that the component renders the right                  |
| step-8           | SearchForm    | :red_circle:         | Test for binding input                                                                   |
| step-10          | SearchForm    | :white_check_mark:       | Binding implementation                                                                   |
| step-11          | SearchForm    | :red_circle:         | Testing the clicking action                                                              |
| step-12          | SearchForm    | :white_check_mark:       | Implementing the click event                                                             |
| step-13          | SpeakersList  | :red_circle:         | Test to render the right                                                                 |
| step-14          | SpeakersList  | :white_check_mark:       | Rendering the right thing                                                                |
| step-15          | SpeakersList  | :red_circle::white_check_mark: | Test and implementation of the information forwarding to child                           |
| step-16          | Speaker       | :red_circle:         | Test to render the right                                                                 |
| step-17          | Speaker       | :white_check_mark:       | Rendering the right thing                                                                |
| step-18          | App           | :red_circle:         | Test that App.vue contains the SpeakersView                                              |
| step-19          | App           | :white_check_mark:       | Adding the View                                                                          |
| step-20          | Actions       | :red_circle:         | Testing the FETCH_SPEAKER action, mocking the api call                                   |
| step-21          | Actions       | :white_check_mark:       | Implementing the action                                                                  |
| step-22          | Mutations     | :red_circle:         | Test of the SET_SPEAKER mutation                                                         |
| step-23          | Mutations     | :white_check_mark:       | Implementing the mutation                                                                |
| step-24          | API           | :red_circle:         | Creating the test for the API call, mocking with 'nock'                                  |
| step-25          | API           | :white_check_mark:       | Implementing the call                                                                    |
| step-26          | Getters       | :red_circle:         | Test for the speakers getter                                                             |
| step-27          | Getters       | :white_check_mark:       | Implementing the getter                                                                  |
| step-28          | 3rd parties   | :red_circle:         | Adding 3rd parties components and CSS changes to beautify the app                        |
| step-29          | 3rd parties   | :red_circle:         | Updating test to allow 3rd parties                                                       |
| step-30          | 3rd parties   | :white_check_mark:       | Changing from shallowMount to mount to pass tests                                        |
| master           | Documentation | :white_check_mark:       | App finished + documentation                                                             |

## Final Result :shipit:


![Final Result](https://s3.amazonaws.com/media-p.slid.es/uploads/1006336/images/6872591/pasted-from-clipboard.png)

## Slides :eyes:

The slides are available [here](https://slides.com/xavisanchezmir/tdd#/) :point_left:
