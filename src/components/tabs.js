  import axios from 'axios';
  
  
const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  //instantiating the elements
  const tTopics = document.createElement('div');
  const javascript = document.createElement('div');
  const bootstrap = document.createElement('div');
  const technology = document.createElement('div');

  //setting the class name
  topics.classList.add('topics');
  tab.classList.add('tab');

  //setting the hierarchy
  tTopics.appendChild(javascript);
  tTopics.appendChild(bootstrap);
  tTopics.appendChild(technology);  
  }


const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  tabsAppender.forEach(elem => {
  axios.get(`http://localhost:5000/api/topics`) 
  .then(res => {
    let info = res.data;
    const tabsContainer = document.querySelector('.tabs-container');
      tabsContainer.appendChild(Tabs(info));
      })
  })
  .catch(error => {
    console.error(error);
  })
}
export { Tabs, tabsAppender }
