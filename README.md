# Test Driven Development with Vue and Jest

This project contains a basic app done through TDD. The app acceses github's API and stores the users to a list. 

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
| step-1           | SpeakersView  | red         | Cleaning the cli project to achieve pure TDD and creating snapshot tests for SpeakerView |
| step-2           | SpeakersView  | green       | Creating SpeakerView                                                                     |
| step-3           | SpeakersView  | red         | Creating tests that ensures that the view renders the right                              |
| step-4           | SpeakersView  | green       | Solving tests with new components                                                        |
| step-5           | SpeakersView  | green       | Refactor                                                                                 |
| step-6           | SpeakersView  | red         | Test to pass the speakers as props to the child components                               |
| step-7           | SpeakersView  | green       | Pass speakers as props                                                                   |
| step-8           | SearchForm    | red & green | Tests and implementation to ensure that the component renders the right                  |
| step-8           | SearchForm    | red         | Test for binding input                                                                   |
| step-10          | SearchForm    | green       | Binding implementation                                                                   |
| step-11          | SearchForm    | red         | Testing the clicking action                                                              |
| step-12          | SearchForm    | green       | Implementing the click event                                                             |
| step-13          | SpeakersList  | red         | Test to render the right                                                                 |
| step-14          | SpeakersList  | green       | Rendering the right thing                                                                |
| step-15          | SpeakersList  | red & green | Test and implementation of the information forwarding to child                           |
| step-16          | Speaker       | red         | Test to render the right                                                                 |
| step-17          | Speaker       | green       | Rendering the right thing                                                                |
| step-18          | App           | red         | Test that App.vue contains the SpeakersView                                              |
| step-19          | App           | green       | Adding the View                                                                          |
| step-20          | Actions       | red         | Testing the FETCH_SPEAKER action, mocking the api call                                   |
| step-21          | Actions       | green       | Implementing the action                                                                  |
| step-22          | Mutations     | red         | Test of the SET_SPEAKER mutation                                                         |
| step-23          | Mutations     | green       | Implementing the mutation                                                                |
| step-24          | API           | red         | Creating the test for the API call, mocking with 'nock'                                  |
| step-25          | API           | green       | Implementing the call                                                                    |
| step-26          | Getters       | red         | Test for the speakers getter                                                             |
| step-27          | Getters       | green       | Implementing the getter                                                                  |
| step-28          | 3rd parties   | red         | Adding 3rd parties components and CSS changes to beautify the app                        |
| step-29          | 3rd parties   | red         | Updating test to allow 3rd parties                                                       |
| step-30          | 3rd parties   | green       | Changing from shallowMount to mount to pass tests                                        |
| master           | Documentation | green       | App finished + documentation                                                             |

## Final Result :shipit:


![Final Result](https://s3.amazonaws.com/media-p.slid.es/uploads/1006336/images/6872591/pasted-from-clipboard.png)

## Slides :eyes:

The slides are available [here](https://slides.com/xavisanchezmir/tdd#/)
